
/**
 * Authentication Service
 * Handles user authentication and identity management
 */

import { supabase } from '../client';
import type { Tables } from '../types';

export type Profile = Tables<'profiles'>;

export const authService = {
  /**
   * Sign up a new user
   */
  async signUp(email: string, password: string, fullName?: string) {
    console.log('Signing up user:', email);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: 'https://natively.dev/email-confirmed',
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.error('Sign up error:', error);
      throw error;
    }

    console.log('Sign up successful:', data);
    return data;
  },

  /**
   * Sign in an existing user
   */
  async signIn(email: string, password: string) {
    console.log('Signing in user:', email);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error);
      throw error;
    }

    console.log('Sign in successful');
    return data;
  },

  /**
   * Sign out the current user
   */
  async signOut() {
    console.log('Signing out user');
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Sign out error:', error);
      throw error;
    }

    console.log('Sign out successful');
  },

  /**
   * Get the current user session
   */
  async getSession() {
    try {
      console.log('Getting session...');
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Get session error:', error);
        // Return null instead of throwing to prevent app from hanging
        return null;
      }

      console.log('Session data:', data.session ? 'exists' : 'null');
      return data.session;
    } catch (error) {
      console.error('Unexpected error getting session:', error);
      // Return null on any error to prevent app from hanging
      return null;
    }
  },

  /**
   * Get the current user
   */
  async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Get user error:', error);
      throw error;
    }

    return data.user;
  },

  /**
   * Get the current user's profile
   */
  async getProfile(userId: string): Promise<Profile | null> {
    try {
      console.log('Getting profile for user:', userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Get profile error:', error);
        return null;
      }

      console.log('Profile data:', data ? 'exists' : 'null');
      return data;
    } catch (error) {
      console.error('Unexpected error getting profile:', error);
      return null;
    }
  },

  /**
   * Update the current user's profile
   */
  async updateProfile(userId: string, updates: Partial<Profile>) {
    console.log('Updating profile for user:', userId);
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      console.error('Update profile error:', error);
      throw error;
    }

    console.log('Profile updated successfully');
    return data;
  },

  /**
   * Reset password
   */
  async resetPassword(email: string) {
    console.log('Sending password reset email to:', email);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://natively.dev/reset-password',
    });

    if (error) {
      console.error('Reset password error:', error);
      throw error;
    }

    console.log('Password reset email sent');
  },

  /**
   * Update password
   */
  async updatePassword(newPassword: string) {
    console.log('Updating password');
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error('Update password error:', error);
      throw error;
    }

    console.log('Password updated successfully');
  },
};
