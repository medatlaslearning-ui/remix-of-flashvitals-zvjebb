
/**
 * useAuth Hook
 * Provides authentication state and methods
 */

import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { authService, type Profile } from '../services/authService';
import type { User, Session } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session with error handling
    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...');
        const session = await authService.getSession();
        console.log('Session retrieved:', session ? 'exists' : 'null');
        setSession(session);
        setUser(session?.user ?? null);
        if (session?.user) {
          console.log('Fetching profile for user:', session.user.id);
          const profile = await authService.getProfile(session.user.id);
          console.log('Profile retrieved:', profile ? 'exists' : 'null');
          setProfile(profile);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        // Set to null on error so the app can still render
        setSession(null);
        setUser(null);
        setProfile(null);
      } finally {
        // Always set loading to false, even if there's an error
        console.log('Auth initialization complete');
        setLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('Auth state changed:', _event);
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        try {
          const profile = await authService.getProfile(session.user.id);
          setProfile(profile);
        } catch (error) {
          console.error('Error fetching profile on auth change:', error);
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    user,
    profile,
    session,
    loading,
    isAuthenticated: !!user,
    signUp: authService.signUp,
    signIn: authService.signIn,
    signOut: authService.signOut,
    updateProfile: (updates: Partial<Profile>) =>
      user ? authService.updateProfile(user.id, updates) : Promise.reject('No user'),
    resetPassword: authService.resetPassword,
    updatePassword: authService.updatePassword,
  };
}
