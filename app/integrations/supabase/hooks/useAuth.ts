
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
    // Get initial session
    authService.getSession().then((session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        authService.getProfile(session.user.id).then(setProfile);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('Auth state changed:', _event);
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        const profile = await authService.getProfile(session.user.id);
        setProfile(profile);
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
