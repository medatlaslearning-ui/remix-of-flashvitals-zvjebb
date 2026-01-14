
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { supabase } from '../client';
import type { User, Session } from '@supabase/supabase-js';
import type { Profile } from '../services/authService';
import { authService } from '../services/authService';

// Auth state with exactly three values
export type AuthState = 'loading' | 'authenticated' | 'unauthenticated';

// Hard timeout for auth initialization (8 seconds max)
const AUTH_INIT_TIMEOUT_MS = 8000;

interface AuthContextType {
  authState: AuthState;
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  error: string | null;
  signUp: typeof authService.signUp;
  signIn: typeof authService.signIn;
  signOut: typeof authService.signOut;
  updateProfile: (updates: Partial<Profile>) => Promise<void>;
  resetPassword: typeof authService.resetPassword;
  updatePassword: typeof authService.updatePassword;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>('loading');
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState<string | null>(null);
  const initTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    console.log('[AuthContext] Initializing auth with timeout protection');
    
    // Set hard timeout for auth initialization
    initTimeoutRef.current = setTimeout(() => {
      if (!isInitializedRef.current) {
        console.warn('[AuthContext] ⏱️ Auth initialization timeout after 8 seconds - treating as unauthenticated');
        setAuthState('unauthenticated');
        setUser(null);
        setProfile(null);
        setSession(null);
        setError('Session initialization timed out. Please sign in again.');
        isInitializedRef.current = true;
      }
    }, AUTH_INIT_TIMEOUT_MS);

    // Initialize auth by explicitly requesting session
    const initializeAuth = async () => {
      try {
        console.log('[AuthContext] Calling supabase.auth.getSession()...');
        const startTime = Date.now();
        
        // Explicitly request current session
        const { data: { session: currentSession }, error: sessionError } = await supabase.auth.getSession();
        
        const duration = Date.now() - startTime;
        console.log(`[AuthContext] getSession() completed in ${duration}ms`);
        
        if (sessionError) {
          console.error('[AuthContext] Session error:', sessionError);
          throw sessionError;
        }

        if (currentSession?.user) {
          console.log('[AuthContext] ✅ Session found, user authenticated:', currentSession.user.id);
          setSession(currentSession);
          setUser(currentSession.user);
          
          // Fetch profile
          try {
            console.log('[AuthContext] Fetching user profile...');
            const userProfile = await authService.getProfile(currentSession.user.id);
            console.log('[AuthContext] Profile fetched:', userProfile ? 'exists' : 'null');
            setProfile(userProfile);
          } catch (profileError) {
            console.error('[AuthContext] Error fetching profile:', profileError);
            // Don't fail auth if profile fetch fails
            setProfile(null);
          }
          
          setAuthState('authenticated');
        } else {
          console.log('[AuthContext] ❌ No session found, user unauthenticated');
          setSession(null);
          setUser(null);
          setProfile(null);
          setAuthState('unauthenticated');
        }
        
        // Clear timeout since we completed successfully
        if (initTimeoutRef.current) {
          clearTimeout(initTimeoutRef.current);
          initTimeoutRef.current = null;
        }
        
        isInitializedRef.current = true;
      } catch (err) {
        console.error('[AuthContext] ❌ Error initializing auth:', err);
        
        // Clear timeout
        if (initTimeoutRef.current) {
          clearTimeout(initTimeoutRef.current);
          initTimeoutRef.current = null;
        }
        
        // Treat error as unauthenticated (graceful degradation)
        setAuthState('unauthenticated');
        setUser(null);
        setProfile(null);
        setSession(null);
        setError(err instanceof Error ? err.message : 'Authentication failed');
        isInitializedRef.current = true;
      }
    };

    initializeAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log('[AuthContext] Auth state changed:', event);
      
      if (newSession?.user) {
        console.log('[AuthContext] User signed in:', newSession.user.id);
        setSession(newSession);
        setUser(newSession.user);
        setAuthState('authenticated');
        
        // Fetch profile
        try {
          const userProfile = await authService.getProfile(newSession.user.id);
          setProfile(userProfile);
        } catch (profileError) {
          console.error('[AuthContext] Error fetching profile on auth change:', profileError);
          setProfile(null);
        }
      } else {
        console.log('[AuthContext] User signed out');
        setSession(null);
        setUser(null);
        setProfile(null);
        setAuthState('unauthenticated');
      }
    });

    return () => {
      console.log('[AuthContext] Cleaning up auth subscription');
      subscription.unsubscribe();
      
      // Clear timeout on unmount
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
        initTimeoutRef.current = null;
      }
    };
  }, []);

  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user) {
      throw new Error('No user authenticated');
    }
    await authService.updateProfile(user.id, updates);
  };

  const value: AuthContextType = {
    authState,
    user,
    profile,
    session,
    error,
    signUp: authService.signUp,
    signIn: authService.signIn,
    signOut: authService.signOut,
    updateProfile,
    resetPassword: authService.resetPassword,
    updatePassword: authService.updatePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
}
