
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { ProgressReport } from '@/components/ProgressReport';

export default function ProgressReportScreen() {
  const theme = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Progress Report',
          headerShown: true,
          headerBackTitle: 'Back',
        }}
      />
      <SafeAreaView 
        style={[styles.safeArea, { backgroundColor: theme.colors.background }]} 
        edges={['bottom']}
      >
        <View style={styles.container}>
          <ProgressReport />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
