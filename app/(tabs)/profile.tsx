
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import { useQuiz } from '@/hooks/useQuiz';
import * as Haptics from 'expo-haptics';
import QuizMasterTile from '@/components/QuizMasterTile';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const { getQuizStats, getQuizHistory, loading } = useQuiz();
  
  const [stats, setStats] = useState<{
    totalQuizzes: number;
    totalCorrect: number;
    totalQuestions: number;
    averageScore: number;
    bestScore: number;
    bestSystem: string | null;
  } | null>(null);
  const [recentQuizzes, setRecentQuizzes] = useState<any[]>([]);

  const loadQuizStats = useCallback(async () => {
    console.log('[Profile] Loading quiz stats...');
    const quizStats = await getQuizStats();
    
    if (quizStats) {
      setStats({
        totalQuizzes: quizStats.total_quizzes || 0,
        totalCorrect: quizStats.total_correct_answers || 0,
        totalQuestions: quizStats.total_questions_answered || 0,
        averageScore: quizStats.average_score || 0,
        bestScore: quizStats.best_score || 0,
        bestSystem: quizStats.best_system || null,
      });
      console.log('[Profile] Stats loaded:', quizStats);
    } else {
      console.log('[Profile] No stats found');
    }

    // Load recent quiz history
    const history = await getQuizHistory();
    setRecentQuizzes(history.slice(0, 5)); // Show last 5 quizzes
    console.log('[Profile] Recent quizzes loaded:', history.length);
  }, [getQuizStats, getQuizHistory]);

  useEffect(() => {
    loadQuizStats();
  }, [loadQuizStats]);

  const handleSignOut = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            await signOut();
            router.replace('/');
          },
        },
      ]
    );
  };

  const accuracy = stats && stats.totalQuestions > 0
    ? (stats.totalCorrect / stats.totalQuestions) * 100
    : 0;

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Profile',
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.scrollContent}>
        {/* User Info Card */}
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <IconSymbol
              ios_icon_name="person.circle.fill"
              android_material_icon_name="account-circle"
              size={80}
              color={colors.primary}
            />
          </View>
          <Text style={styles.userName}>{user?.email || 'Guest User'}</Text>
          <Text style={styles.userEmail}>{user?.email || 'Not signed in'}</Text>
        </View>

        {/* Quiz Master Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <QuizMasterTile />
        </View>

        {/* Overall Stats */}
        {stats && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Overall Statistics</Text>
            <View style={styles.statsCard}>
              <View style={styles.statRow}>
                <View style={styles.statItem}>
                  <IconSymbol
                    ios_icon_name="doc.text.fill"
                    android_material_icon_name="description"
                    size={32}
                    color={colors.primary}
                  />
                  <Text style={styles.statValue}>{stats.totalQuizzes}</Text>
                  <Text style={styles.statLabel}>Total Quizzes</Text>
                </View>
                <View style={styles.statItem}>
                  <IconSymbol
                    ios_icon_name="checkmark.circle.fill"
                    android_material_icon_name="check-circle"
                    size={32}
                    color={colors.success}
                  />
                  <Text style={styles.statValue}>{stats.totalCorrect}</Text>
                  <Text style={styles.statLabel}>Correct Answers</Text>
                </View>
              </View>
              <View style={styles.statRow}>
                <View style={styles.statItem}>
                  <IconSymbol
                    ios_icon_name="chart.bar.fill"
                    android_material_icon_name="bar-chart"
                    size={32}
                    color={colors.info}
                  />
                  <Text style={styles.statValue}>{accuracy.toFixed(1)}%</Text>
                  <Text style={styles.statLabel}>Accuracy</Text>
                </View>
                <View style={styles.statItem}>
                  <IconSymbol
                    ios_icon_name="star.fill"
                    android_material_icon_name="star"
                    size={32}
                    color={colors.warning}
                  />
                  <Text style={styles.statValue}>{stats.bestScore}%</Text>
                  <Text style={styles.statLabel}>Best Score</Text>
                </View>
              </View>
              {stats.bestSystem && (
                <View style={styles.bestSystemCard}>
                  <IconSymbol
                    ios_icon_name="trophy.fill"
                    android_material_icon_name="emoji-events"
                    size={24}
                    color={colors.warning}
                  />
                  <View style={styles.bestSystemText}>
                    <Text style={styles.bestSystemLabel}>Best System</Text>
                    <Text style={styles.bestSystemValue}>{stats.bestSystem}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        )}

        {/* Recent Quizzes */}
        {recentQuizzes.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Quizzes</Text>
            <View style={styles.quizzesCard}>
              {recentQuizzes.map((quiz, index) => (
                <View key={quiz.id} style={styles.quizItem}>
                  <View style={styles.quizHeader}>
                    <Text style={styles.quizSystem}>{quiz.medical_system}</Text>
                    <Text style={styles.quizScore}>
                      {quiz.score}/{quiz.total_questions}
                    </Text>
                  </View>
                  <Text style={styles.quizDate}>
                    {new Date(quiz.completed_at).toLocaleDateString()}
                  </Text>
                  {index < recentQuizzes.length - 1 && <View style={styles.quizDivider} />}
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actions</Text>
          <Pressable style={styles.actionButton} onPress={() => router.push('/(tabs)/(home)/admin')}>
            <IconSymbol
              ios_icon_name="gear"
              android_material_icon_name="settings"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.actionButtonText}>Admin Panel</Text>
            <IconSymbol
              ios_icon_name="chevron.right"
              android_material_icon_name="arrow-forward"
              size={20}
              color={colors.textSecondary}
            />
          </Pressable>

          {user && (
            <Pressable style={[styles.actionButton, styles.signOutButton]} onPress={handleSignOut}>
              <IconSymbol
                ios_icon_name="arrow.right.square"
                android_material_icon_name="logout"
                size={24}
                color={colors.error}
              />
              <Text style={[styles.actionButtonText, styles.signOutText]}>Sign Out</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  userCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  statsCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bestSystemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.highlight,
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  bestSystemText: {
    flex: 1,
  },
  bestSystemLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  bestSystemValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  quizzesCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  quizItem: {
    paddingVertical: 12,
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  quizSystem: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  quizScore: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  quizDate: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  quizDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  actionButtonText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  signOutButton: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  signOutText: {
    color: colors.error,
  },
});
