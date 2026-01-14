
/**
 * useAuth Hook
 * Provides authentication state and methods with timeout protection
 * 
 * This hook now uses the global AuthContext which handles:
 * - Explicit session initialization via supabase.auth.getSession()
 * - Hard timeout (8 seconds) for auth initialization
 * - Three-state auth: "loading" | "authenticated" | "unauthenticated"
 * - Graceful degradation on timeout or error
 */

import { useAuthContext } from '../contexts/AuthContext';

export function useAuth() {
  const context = useAuthContext();
  
  return {
    // Auth state (exactly three values)
    authState: context.authState,
    loading: context.authState === 'loading',
    isAuthenticated: context.authState === 'authenticated',
    
    // User data
    user: context.user,
    profile: context.profile,
    session: context.session,
    error: context.error,
    
    // Auth methods
    signUp: context.signUp,
    signIn: context.signIn,
    signOut: context.signOut,
    updateProfile: context.updateProfile,
    resetPassword: context.resetPassword,
    updatePassword: context.updatePassword,
  };
}
