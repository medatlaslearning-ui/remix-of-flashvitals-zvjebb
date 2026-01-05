
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useQuiz } from '@/hooks/useQuiz';
import * as Haptics from 'expo-haptics';

export default function QuizMasterTile() {
  const router = useRouter();
  const { getQuizStats, loading } = useQuiz();
  const [stats, setStats] = useState<{
    totalQuizzes: number;
    totalCorrect: number;
    totalQuestions: number;
    averageScore: number;
    bestScore: number;
  } | null>(null);

  const loadStats = useCallback(async () => {
    console.log('[QuizMasterTile] Loading quiz stats...');
    const quizStats = await getQuizStats();
    
    if (quizStats) {
      setStats({
        totalQuizzes: quizStats.total_quizzes || 0,
        totalCorrect: quizStats.total_correct_answers || 0,
        totalQuestions: quizStats.total_questions_answered || 0,
        averageScore: quizStats.average_score || 0,
        bestScore: quizStats.best_score || 0,
      });
      console.log('[QuizMasterTile] Stats loaded:', quizStats);
    } else {
      console.log('[QuizMasterTile] No stats found');
      setStats({
        totalQuizzes: 0,
        totalCorrect: 0,
        totalQuestions: 0,
        averageScore: 0,
        bestScore: 0,
      });
    }
  }, [getQuizStats]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)/quiz');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={colors.primary} />
      </View>
    );
  }

  const accuracy = stats && stats.totalQuestions > 0
    ? (stats.totalCorrect / stats.totalQuestions) * 100
    : 0;

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <IconSymbol
            ios_icon_name="brain.head.profile"
            android_material_icon_name="psychology"
            size={32}
            color={colors.primary}
          />
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>Quiz Master</Text>
          <Text style={styles.subtitle}>AI-Generated Medical Quizzes</Text>
        </View>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{stats?.totalQuizzes || 0}</Text>
          <Text style={styles.statLabel}>Quizzes</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{accuracy.toFixed(0)}%</Text>
          <Text style={styles.statLabel}>Accuracy</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{stats?.bestScore || 0}%</Text>
          <Text style={styles.statLabel}>Best</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Tap to create a new quiz</Text>
        <IconSymbol
          ios_icon_name="chevron.right"
          android_material_icon_name="arrow-forward"
          size={20}
          color={colors.primary}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    marginBottom: 16,
    backgroundColor: colors.background,
    borderRadius: 12,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});
