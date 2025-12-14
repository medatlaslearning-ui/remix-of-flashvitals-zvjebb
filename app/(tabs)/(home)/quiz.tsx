
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';

export default function QuizScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Quiz Mode',
          headerBackTitle: 'Back',
        }}
      />
      <View style={[commonStyles.container, styles.emptyContainer]}>
        <View style={styles.emptyCard}>
          <View style={styles.quizIcon}>
            <IconSymbol name="questionmark.circle.fill" size={80} color={colors.primary} />
          </View>
          
          <Text style={styles.emptyTitle}>Quiz Mode</Text>
          <Text style={styles.emptyDescription}>
            Quiz mode is currently empty. This feature will be available soon with interactive quizzes to test your knowledge.
          </Text>

          <View style={styles.comingSoonBadge}>
            <Text style={styles.comingSoonText}>Coming Soon</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: 'center',
    padding: 20,
  },
  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  quizIcon: {
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
  comingSoonBadge: {
    backgroundColor: colors.highlight,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  comingSoonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
