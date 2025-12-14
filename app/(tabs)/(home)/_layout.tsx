
import { Stack } from 'expo-router';
import React from 'react';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="dr-ava-salta"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="flashcards"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="quiz"
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="admin"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
