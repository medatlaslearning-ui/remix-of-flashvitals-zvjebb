
# Supabase Authentication Bootstrap Implementation

## Overview
This document describes the production-safe Supabase authentication bootstrap and loading control implementation that prevents infinite loading spinners and ensures graceful degradation.

## Key Features

### 1. Global Auth State Management
- **Three-state auth system**: `"loading"` | `"authenticated"` | `"unauthenticated"`
- Centralized in `AuthContext` for consistent state across all screens
- No more ambiguous loading states

### 2. Explicit Session Initialization
- Calls `supabase.auth.getSession()` immediately on app launch
- Listens for auth state changes via `supabase.auth.onAuthStateChange()`
- Ensures session is explicitly requested, not assumed

### 3. Hard Timeout Protection
- **8-second timeout** for auth initialization
- If session not resolved within timeout:
  - Stops all loading spinners
  - Treats user as logged out
  - Shows "Session expired, please sign in again" message
- Prevents infinite loading spinners

### 4. Graceful Degradation
- Auth failures degrade to unauthenticated state
- App remains functional even if auth service is down
- Error messages are user-friendly and actionable

### 5. Supabase Auth Persistence
- `persistSession: true` - Session persists across app restarts
- `autoRefreshToken: true` - Tokens refresh automatically
- Uses `AsyncStorage` for secure mobile storage

## Implementation Details

### Files Created/Modified

#### 1. `app/integrations/supabase/contexts/AuthContext.tsx` (NEW)
Global auth context that manages:
- Auth state initialization with timeout
- Session fetching and monitoring
- Profile loading
- Auth state changes

Key features:
- 8-second hard timeout for initialization
- Explicit `getSession()` call on mount
- Auth state listener for real-time updates
- Graceful error handling

#### 2. `app/integrations/supabase/hooks/useAuth.ts` (UPDATED)
Now uses `AuthContext` instead of local state:
- Provides `authState` with three values
- Exposes `loading` and `isAuthenticated` helpers
- All auth methods (signIn, signOut, etc.)

#### 3. `app/integrations/supabase/utils/timeoutWrapper.ts` (NEW)
Utility for wrapping Supabase Edge Function calls with timeout protection:
- Configurable timeout (default 15 seconds)
- Automatic cleanup with AbortController
- Loading state callbacks
- Error handling
- Helper functions for LMM chat and quiz generation

#### 4. `app/_layout.tsx` (UPDATED)
Wraps app with `AuthProvider`:
```tsx
<AuthProvider>
  <WidgetProvider>
    {/* App content */}
  </WidgetProvider>
</AuthProvider>
```

#### 5. `app/(tabs)/profile.tsx` (UPDATED)
Profile screen behavior based on auth state:
- **`authState === "loading"`**: Shows spinner with "Loading profile..." (max 8 seconds)
- **`authState === "authenticated"`**: Loads and displays user profile data
- **`authState === "unauthenticated"`**: Shows sign-in prompt
- **Auth error/timeout**: Shows error message with "Sign In Again" button

#### 6. `app/(tabs)/(home)/chatbot.tsx` (UPDATED)
LMM chat behavior:
- Checks `authState === "authenticated"` before submitting feedback
- Shows auth prompt if user tries to provide feedback while unauthenticated
- No changes to core chat functionality (works for all users)

#### 7. `app/(tabs)/(home)/quiz.tsx` (UPDATED)
Quiz generation behavior:
- Requires `authState === "authenticated"` before generating quiz
- Shows auth prompt if user tries to generate quiz while unauthenticated
- Prevents wasted API calls for unauthenticated users

#### 8. `hooks/useQuiz.ts` (UPDATED)
Quiz generation with timeout protection:
- Uses `invokeQuizGeneration()` wrapper
- 90-second timeout for quiz generation
- Try/catch/finally blocks
- Always clears loading state
- User-facing error messages for timeouts

#### 9. `app/quiz-session.tsx` (UPDATED)
Quiz session behavior:
- Checks `authState === "authenticated"` before saving results
- Only saves to Supabase if authenticated
- Shows "Results saved" message only if authenticated
- Local results always calculated (no dependency on auth)

## Auth State Flow

### App Launch
```
1. App starts → AuthContext mounts
2. Set authState = "loading"
3. Start 8-second timeout
4. Call supabase.auth.getSession()
5. If session found:
   - Set authState = "authenticated"
   - Fetch user profile
   - Clear timeout
6. If no session or timeout:
   - Set authState = "unauthenticated"
   - Clear timeout
7. Listen for auth state changes
```

### Sign In
```
1. User taps "Sign In"
2. Navigate to /auth/sign-in
3. User enters credentials
4. Call authService.signIn()
5. onAuthStateChange fires
6. Set authState = "authenticated"
7. Fetch user profile
```

### Sign Out
```
1. User taps "Sign Out"
2. Call authService.signOut()
3. onAuthStateChange fires
4. Set authState = "unauthenticated"
5. Clear user and profile
```

### Timeout
```
1. App starts → AuthContext mounts
2. Set authState = "loading"
3. Start 8-second timeout
4. Call supabase.auth.getSession()
5. If timeout fires before response:
   - Set authState = "unauthenticated"
   - Set error = "Session initialization timed out"
   - Clear timeout
6. Profile screen shows error with "Sign In Again" button
```

## Screen Behaviors

### Profile Screen
| Auth State | Behavior |
|------------|----------|
| `loading` | Show spinner + "Loading profile..." (max 8s) |
| `authenticated` | Show user profile, specialty selection, quick actions |
| `unauthenticated` | Show guest mode card with "Sign In" button |
| Error/Timeout | Show error message with "Sign In Again" button |

### LMM Chat (Dr. Elias Reed)
| Auth State | Behavior |
|------------|----------|
| `loading` | Chat works normally (no auth required for chat) |
| `authenticated` | Chat works + feedback enabled |
| `unauthenticated` | Chat works + feedback shows auth prompt |

### Quiz Generation
| Auth State | Behavior |
|------------|----------|
| `loading` | Generate button disabled |
| `authenticated` | Generate button enabled, quiz generation works |
| `unauthenticated` | Generate button shows auth prompt |

### Quiz Session
| Auth State | Behavior |
|------------|----------|
| `loading` | Quiz works normally (local results) |
| `authenticated` | Quiz works + results saved to Supabase |
| `unauthenticated` | Quiz works + results NOT saved (local only) |

## Timeout Configuration

### Auth Initialization
- **Timeout**: 8 seconds
- **Location**: `AuthContext.tsx`
- **Constant**: `AUTH_INIT_TIMEOUT_MS = 8000`

### Supabase Edge Function Calls
- **Default timeout**: 15 seconds
- **Quiz generation timeout**: 90 seconds
- **Location**: `timeoutWrapper.ts`
- **Configurable per call**

## Error Handling

### Auth Initialization Errors
- Caught in `AuthContext`
- Set `authState = "unauthenticated"`
- Set `error` message
- Profile screen shows error with retry button

### Edge Function Timeout
- Caught by `invokeWithTimeout()`
- Returns `{ data: null, error, timedOut: true }`
- Loading state always cleared in `finally` block
- User-facing error message shown

### Network Errors
- Caught by try/catch blocks
- Loading state always cleared
- User-facing error message shown
- App remains functional

## Testing Checklist

### Auth Initialization
- [ ] App launches and auth initializes within 8 seconds
- [ ] If auth times out, user sees error message
- [ ] If auth fails, user sees error message
- [ ] If no session, user sees guest mode
- [ ] If session exists, user sees authenticated profile

### Profile Screen
- [ ] Loading state shows spinner (max 8 seconds)
- [ ] Authenticated state shows user profile
- [ ] Unauthenticated state shows sign-in prompt
- [ ] Timeout shows error with retry button
- [ ] Sign out works correctly

### LMM Chat
- [ ] Chat works for all users (no auth required)
- [ ] Feedback requires authentication
- [ ] Unauthenticated users see auth prompt when trying to provide feedback

### Quiz Generation
- [ ] Quiz generation requires authentication
- [ ] Unauthenticated users see auth prompt
- [ ] Quiz generation times out after 90 seconds
- [ ] Timeout shows user-facing error message
- [ ] Loading spinner always stops

### Quiz Session
- [ ] Quiz works for all users (local results)
- [ ] Results saved to Supabase only if authenticated
- [ ] "Results saved" message only shown if authenticated
- [ ] Quiz completion never hangs

## Benefits

1. **No Infinite Spinners**: Hard timeouts ensure loading states always resolve
2. **Graceful Degradation**: Auth failures don't break the app
3. **Clear User Feedback**: Users know when auth fails and what to do
4. **Consistent State**: Single source of truth for auth state
5. **Production-Safe**: Robust error handling and timeout protection
6. **Mobile-Optimized**: Secure storage with AsyncStorage
7. **Developer-Friendly**: Easy to check auth state with `authState === "authenticated"`

## Future Enhancements

1. **Retry Logic**: Add automatic retry for transient network errors
2. **Offline Mode**: Better offline support with local-first architecture
3. **Auth Refresh**: Proactive token refresh before expiration
4. **Biometric Auth**: Add Face ID / Touch ID support
5. **Session Analytics**: Track auth success/failure rates
