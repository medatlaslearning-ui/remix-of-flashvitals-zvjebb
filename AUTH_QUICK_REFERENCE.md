
# Auth Quick Reference Guide

## How to Check Auth State

### ✅ CORRECT - Use authState
```tsx
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';

function MyComponent() {
  const { authState, user } = useAuth();
  
  // Check if loading
  if (authState === 'loading') {
    return <LoadingSpinner />;
  }
  
  // Check if authenticated
  if (authState === 'authenticated') {
    return <AuthenticatedContent user={user} />;
  }
  
  // Check if unauthenticated
  if (authState === 'unauthenticated') {
    return <SignInPrompt />;
  }
}
```

### ❌ WRONG - Don't just check user
```tsx
// This is unreliable during loading state
if (user) {
  // User might be null while loading
}
```

## Common Patterns

### Pattern 1: Require Authentication
```tsx
function ProtectedFeature() {
  const { authState, user } = useAuth();
  
  const handleAction = () => {
    if (authState !== 'authenticated' || !user) {
      Alert.alert(
        'Authentication Required',
        'Please sign in to use this feature.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Sign In', onPress: () => router.push('/auth/sign-in') },
        ]
      );
      return;
    }
    
    // Proceed with action
    performAction();
  };
  
  return <Button onPress={handleAction} />;
}
```

### Pattern 2: Optional Authentication
```tsx
function OptionalAuthFeature() {
  const { authState, user } = useAuth();
  
  const handleAction = () => {
    // Feature works for everyone
    performAction();
    
    // But only save if authenticated
    if (authState === 'authenticated' && user) {
      saveToSupabase();
    }
  };
  
  return <Button onPress={handleAction} />;
}
```

### Pattern 3: Loading State
```tsx
function MyScreen() {
  const { authState } = useAuth();
  
  if (authState === 'loading') {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
        <Text>Loading...</Text>
      </View>
    );
  }
  
  return <ScreenContent />;
}
```

## Timeout Wrapper Usage

### Basic Edge Function Call
```tsx
import { invokeWithTimeout } from '@/app/integrations/supabase/utils/timeoutWrapper';

const [loading, setLoading] = useState(false);

const callEdgeFunction = async () => {
  const { data, error, timedOut } = await invokeWithTimeout({
    functionName: 'my-function',
    body: { param: 'value' },
    timeoutMs: 15000, // 15 seconds
    onStart: () => setLoading(true),
    onFinish: () => setLoading(false),
    onError: (err) => console.error('Error:', err),
  });
  
  if (timedOut) {
    Alert.alert('Timeout', 'Request took too long. Please try again.');
    return;
  }
  
  if (error) {
    Alert.alert('Error', error.message);
    return;
  }
  
  // Use data
  console.log('Success:', data);
};
```

### LMM Chat Helper
```tsx
import { invokeLMMChat } from '@/app/integrations/supabase/utils/timeoutWrapper';

const [loading, setLoading] = useState(false);

const sendMessage = async (message: string) => {
  const { data, error, timedOut } = await invokeLMMChat(
    message,
    conversationHistory,
    {
      onStart: () => setLoading(true),
      onFinish: () => setLoading(false),
    }
  );
  
  if (timedOut || error) {
    Alert.alert('Error', 'Failed to send message');
    return;
  }
  
  console.log('Response:', data.response);
};
```

### Quiz Generation Helper
```tsx
import { invokeQuizGeneration } from '@/app/integrations/supabase/utils/timeoutWrapper';

const [loading, setLoading] = useState(false);

const generateQuiz = async () => {
  const { data, error, timedOut } = await invokeQuizGeneration(
    {
      medicalSystem: 'Cardiology',
      questionCount: 10,
      flashcardsContext: '...',
      coreKnowledgeContext: '...',
      guidelinesContext: '...',
    },
    {
      onStart: () => setLoading(true),
      onFinish: () => setLoading(false),
    }
  );
  
  if (timedOut) {
    Alert.alert('Timeout', 'Quiz generation took too long. Try 5 questions instead.');
    return;
  }
  
  if (error) {
    Alert.alert('Error', error.message);
    return;
  }
  
  console.log('Quiz generated:', data);
};
```

## Auth State Values

| State | Meaning | Duration |
|-------|---------|----------|
| `loading` | Auth is initializing | Max 8 seconds |
| `authenticated` | User is signed in | Until sign out |
| `unauthenticated` | User is not signed in | Until sign in |

## Timeout Values

| Operation | Timeout | Configurable |
|-----------|---------|--------------|
| Auth initialization | 8 seconds | Yes (AuthContext) |
| Edge function (default) | 15 seconds | Yes (per call) |
| Quiz generation | 90 seconds | Yes (per call) |
| LMM chat | 15 seconds | Yes (per call) |

## Error Messages

### Auth Timeout
```
"Session initialization timed out. Please sign in again."
```

### Edge Function Timeout
```
"Request timed out after X seconds"
```

### Quiz Generation Timeout
```
"Quiz generation timed out. Please try with fewer questions (5 instead of 10)."
```

## Best Practices

1. **Always check authState first**
   ```tsx
   if (authState === 'authenticated') {
     // Safe to use user
   }
   ```

2. **Use timeout wrapper for Edge Functions**
   ```tsx
   const { data, error, timedOut } = await invokeWithTimeout({...});
   ```

3. **Always clear loading state**
   ```tsx
   try {
     setLoading(true);
     await doSomething();
   } finally {
     setLoading(false); // Always runs
   }
   ```

4. **Show user-facing error messages**
   ```tsx
   if (error) {
     Alert.alert('Error', 'Something went wrong. Please try again.');
   }
   ```

5. **Graceful degradation**
   ```tsx
   // Feature works for everyone
   performAction();
   
   // But only save if authenticated
   if (authState === 'authenticated') {
     saveToSupabase();
   }
   ```

## Common Mistakes

### ❌ Don't do this
```tsx
// Checking user without authState
if (user) {
  // Might be null during loading
}

// No timeout protection
await supabase.functions.invoke('my-function', { body });

// Not clearing loading state
setLoading(true);
await doSomething();
// Forgot setLoading(false)

// No error handling
const { data } = await invokeWithTimeout({...});
// What if error or timeout?
```

### ✅ Do this instead
```tsx
// Check authState first
if (authState === 'authenticated' && user) {
  // Safe to use user
}

// Use timeout wrapper
const { data, error, timedOut } = await invokeWithTimeout({...});

// Always clear loading state
try {
  setLoading(true);
  await doSomething();
} finally {
  setLoading(false);
}

// Handle errors
if (timedOut || error) {
  Alert.alert('Error', 'Something went wrong');
  return;
}
```

## Testing

### Test Auth States
```tsx
// Test loading state
// - Should show spinner
// - Should resolve within 8 seconds

// Test authenticated state
// - Should show user profile
// - Should enable protected features

// Test unauthenticated state
// - Should show sign-in prompt
// - Should disable protected features

// Test timeout
// - Should show error after 8 seconds
// - Should offer retry option
```

### Test Timeouts
```tsx
// Test Edge Function timeout
// - Should timeout after configured duration
// - Should clear loading state
// - Should show error message

// Test Quiz Generation timeout
// - Should timeout after 90 seconds
// - Should suggest fewer questions
// - Should clear loading state
```

## Quick Checklist

Before deploying:
- [ ] All protected features check `authState === 'authenticated'`
- [ ] All Edge Function calls use timeout wrapper
- [ ] All loading states have timeout protection
- [ ] All error states show user-facing messages
- [ ] All try/catch blocks have finally to clear loading
- [ ] Profile screen handles all three auth states
- [ ] LMM chat works for all users
- [ ] Quiz generation requires authentication
- [ ] Quiz session saves results only if authenticated
