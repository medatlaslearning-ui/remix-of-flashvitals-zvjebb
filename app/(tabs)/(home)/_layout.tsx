
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
      <Stack.Screen
        name="cardiology-topics"
        options={{
          headerShown: true,
          title: 'Cardiology Topics',
        }}
      />
      <Stack.Screen
        name="pulmonary-topics"
        options={{
          headerShown: true,
          title: 'Pulmonary Topics',
        }}
      />
      <Stack.Screen
        name="renal-topics"
        options={{
          headerShown: true,
          title: 'Renal Topics',
        }}
      />
      <Stack.Screen
        name="gastroenterology-topics"
        options={{
          headerShown: true,
          title: 'Gastroenterology Topics',
        }}
      />
      <Stack.Screen
        name="endocrine-topics"
        options={{
          headerShown: true,
          title: 'Endocrine Topics',
        }}
      />
    </Stack>
  );
}
