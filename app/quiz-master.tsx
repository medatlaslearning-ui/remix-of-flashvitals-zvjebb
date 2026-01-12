
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, RefreshControl, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { useTheme } from '@react-navigation/native';
import { GlassView } from 'expo-glass-effect';
import { IconSymbol } from '@/components/IconSymbol';
import { useProgressReport } from '@/hooks/useProgressReport';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import * as Haptics from 'expo-haptics';

export default function QuizMasterScreen() {
  const theme = useTheme();
  const { user } = useAuth();
  const { stats, quizResults, loading, error, refresh } = useProgressReport(user?.id || null);
  const [refreshing, setRefreshing] = useState(false);
  const [expandedQuiz, setExpandedQuiz] = useState<string | null>(null);

  const handleRefresh = async () => {
    setRefreshing(true);
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    await refresh();
    setRefreshing(false);
  };

  const handleToggleQuiz = (quizId: string) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setExpandedQuiz(expandedQuiz === quizId ? null : quizId);
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={[styles.loadingText, { color: theme.dark ? '#98989D' : '#666' }]}>
          Loading quiz results...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <IconSymbol ios_icon_name="exclamationmark.triangle.fill" android_material_icon_name="warning" size={48} color={theme.colors.notification} />
        <Text style={[styles.errorText, { color: theme.colors.notification }]}>
          Error loading quiz results
        </Text>
        <Text style={[styles.errorSubtext, { color: theme.dark ? '#98989D' : '#666' }]}>
          {error}
        </Text>
        <Pressable style={[styles.retryButton, { backgroundColor: theme.colors.primary }]} onPress={handleRefresh}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.centerContainer}>
        <IconSymbol ios_icon_name="person.crop.circle.badge.exclamationmark" android_material_icon_name="person" size={64} color={theme.dark ? '#98989D' : '#666'} />
        <Text style={[styles.emptyText, { color: theme.colors.text }]}>
          Sign in to track your quiz results
        </Text>
        <Text style={[styles.emptySubtext, { color: theme.dark ? '#98989D' : '#666' }]}>
          Create an account to save your progress and achievements
        </Text>
      </View>
    );
  }

  if (!stats || stats.totalQuizzesTaken === 0) {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={styles.emptyContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={theme.colors.primary} />
        }
      >
        <IconSymbol ios_icon_name="trophy.fill" android_material_icon_name="emoji-events" size={64} color={theme.dark ? '#98989D' : '#666'} />
        <Text style={[styles.emptyText, { color: theme.colors.text }]}>
          No quiz results yet
        </Text>
        <Text style={[styles.emptySubtext, { color: theme.dark ? '#98989D' : '#666' }]}>
          Start taking quizzes to see your results and track your progress here!
        </Text>
      </ScrollView>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return '#34C759';
    if (percentage >= 60) return '#FF9500';
    return '#FF3B30';
  };

  const getPerformanceEmoji = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return '🏆';
    if (percentage >= 90) return '🌟';
    if (percentage >= 80) return '✨';
    if (percentage >= 70) return '👍';
    if (percentage >= 60) return '💪';
    return '📚';
  };

  const totalQuizzes = stats.totalQuizzesTaken;
  const averageScore = stats.averageScore;
  const perfectScores = quizResults.filter(q => q.score === q.total_questions).length;
  const totalQuestions = quizResults.reduce((sum, q) => sum + q.total_questions, 0);
  const totalCorrect = quizResults.reduce((sum, q) => sum + q.score, 0);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Quiz Master',
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={theme.colors.primary} />
        }
      >
        {/* Header Stats */}
        <View style={styles.header}>
          <View style={styles.trophyContainer}>
            <IconSymbol 
              ios_icon_name="trophy.fill" 
              android_material_icon_name="emoji-events" 
              size={48} 
              color="#FFD700" 
            />
          </View>
          <Text style={[styles.title, { color: theme.colors.text }]}>Quiz Master</Text>
          <Text style={[styles.subtitle, { color: theme.dark ? '#98989D' : '#666' }]}>
            Your complete quiz history
          </Text>
        </View>

        {/* Overview Stats */}
        <View style={styles.statsGrid}>
          <GlassView 
            style={[
              styles.statCard,
              { backgroundColor: 'rgba(0, 122, 255, 0.15)' },
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)' }
            ]} 
            glassEffectStyle="regular"
          >
            <IconSymbol ios_icon_name="chart.bar.fill" android_material_icon_name="bar-chart" size={28} color="#007AFF" />
            <Text style={[styles.statValue, { color: theme.colors.text }]}>{totalQuizzes}</Text>
            <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Total Quizzes</Text>
          </GlassView>

          <GlassView 
            style={[
              styles.statCard,
              { backgroundColor: 'rgba(52, 199, 89, 0.15)' },
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(52, 199, 89, 0.2)' : 'rgba(52, 199, 89, 0.1)' }
            ]} 
            glassEffectStyle="regular"
          >
            <IconSymbol ios_icon_name="star.fill" android_material_icon_name="star" size={28} color="#34C759" />
            <Text style={[styles.statValue, { color: theme.colors.text }]}>{averageScore.toFixed(0)}%</Text>
            <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Average Score</Text>
          </GlassView>

          <GlassView 
            style={[
              styles.statCard,
              { backgroundColor: 'rgba(255, 215, 0, 0.15)' },
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0.1)' }
            ]} 
            glassEffectStyle="regular"
          >
            <IconSymbol ios_icon_name="trophy.fill" android_material_icon_name="emoji-events" size={28} color="#FFD700" />
            <Text style={[styles.statValue, { color: theme.colors.text }]}>{perfectScores}</Text>
            <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Perfect Scores</Text>
          </GlassView>
        </View>

        {/* Additional Stats */}
        <GlassView 
          style={[
            styles.additionalStats,
            Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
          ]} 
          glassEffectStyle="regular"
        >
          <View style={styles.additionalStatRow}>
            <Text style={[styles.additionalStatLabel, { color: theme.dark ? '#98989D' : '#666' }]}>
              Total Questions Answered
            </Text>
            <Text style={[styles.additionalStatValue, { color: theme.colors.text }]}>
              {totalQuestions}
            </Text>
          </View>
          <View style={styles.additionalStatRow}>
            <Text style={[styles.additionalStatLabel, { color: theme.dark ? '#98989D' : '#666' }]}>
              Total Correct Answers
            </Text>
            <Text style={[styles.additionalStatValue, { color: '#34C759' }]}>
              {totalCorrect}
            </Text>
          </View>
          <View style={styles.additionalStatRow}>
            <Text style={[styles.additionalStatLabel, { color: theme.dark ? '#98989D' : '#666' }]}>
              Overall Accuracy
            </Text>
            <Text style={[styles.additionalStatValue, { color: theme.colors.text }]}>
              {totalQuestions > 0 ? ((totalCorrect / totalQuestions) * 100).toFixed(1) : 0}%
            </Text>
          </View>
        </GlassView>

        {/* Quiz History */}
        <View style={styles.historySection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quiz History</Text>
          {quizResults.map((quiz, index) => {
            const percentage = (quiz.score / quiz.total_questions) * 100;
            const scoreColor = getScoreColor(quiz.score, quiz.total_questions);
            const emoji = getPerformanceEmoji(quiz.score, quiz.total_questions);
            const isExpanded = expandedQuiz === quiz.id;

            return (
              <Pressable key={quiz.id} onPress={() => handleToggleQuiz(quiz.id)}>
                <GlassView 
                  style={[
                    styles.quizCard,
                    Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
                  ]} 
                  glassEffectStyle="regular"
                >
                  <View style={styles.quizHeader}>
                    <View style={styles.quizTitleContainer}>
                      <Text style={[styles.quizEmoji]}>{emoji}</Text>
                      <View style={styles.quizInfo}>
                        <Text style={[styles.quizTopic, { color: theme.colors.text }]}>
                          {quiz.medical_topic}
                        </Text>
                        <Text style={[styles.quizSystem, { color: theme.dark ? '#98989D' : '#666' }]}>
                          {quiz.medical_system}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.quizScoreContainer}>
                      <Text style={[styles.quizScore, { color: scoreColor }]}>
                        {quiz.score}/{quiz.total_questions}
                      </Text>
                      <Text style={[styles.quizPercentage, { color: scoreColor }]}>
                        {percentage.toFixed(0)}%
                      </Text>
                    </View>
                  </View>

                  <View style={styles.quizMeta}>
                    <View style={styles.quizMetaItem}>
                      <IconSymbol ios_icon_name="questionmark.circle" android_material_icon_name="help" size={14} color={theme.dark ? '#98989D' : '#666'} />
                      <Text style={[styles.quizMetaText, { color: theme.dark ? '#98989D' : '#666' }]}>
                        {quiz.quiz_type}
                      </Text>
                    </View>
                    <View style={styles.quizMetaItem}>
                      <IconSymbol ios_icon_name="calendar" android_material_icon_name="calendar-today" size={14} color={theme.dark ? '#98989D' : '#666'} />
                      <Text style={[styles.quizMetaText, { color: theme.dark ? '#98989D' : '#666' }]}>
                        {formatDate(quiz.completed_at)}
                      </Text>
                    </View>
                    <IconSymbol 
                      ios_icon_name={isExpanded ? 'chevron.up' : 'chevron.down'} 
                      android_material_icon_name={isExpanded ? 'expand-less' : 'expand-more'} 
                      size={20} 
                      color={theme.dark ? '#98989D' : '#666'} 
                    />
                  </View>

                  {isExpanded && (
                    <View style={styles.quizDetails}>
                      <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: theme.dark ? '#98989D' : '#666' }]}>
                          Performance:
                        </Text>
                        <Text style={[styles.detailValue, { color: scoreColor }]}>
                          {percentage >= 90 ? 'Excellent' : percentage >= 80 ? 'Very Good' : percentage >= 70 ? 'Good' : percentage >= 60 ? 'Fair' : 'Needs Improvement'}
                        </Text>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: theme.dark ? '#98989D' : '#666' }]}>
                          Correct Answers:
                        </Text>
                        <Text style={[styles.detailValue, { color: '#34C759' }]}>
                          {quiz.score}
                        </Text>
                      </View>
                      <View style={styles.detailRow}>
                        <Text style={[styles.detailLabel, { color: theme.dark ? '#98989D' : '#666' }]}>
                          Incorrect Answers:
                        </Text>
                        <Text style={[styles.detailValue, { color: '#FF3B30' }]}>
                          {quiz.total_questions - quiz.score}
                        </Text>
                      </View>
                      {quiz.time_spent_seconds && (
                        <View style={styles.detailRow}>
                          <Text style={[styles.detailLabel, { color: theme.dark ? '#98989D' : '#666' }]}>
                            Time Spent:
                          </Text>
                          <Text style={[styles.detailValue, { color: theme.colors.text }]}>
                            {Math.floor(quiz.time_spent_seconds / 60)}m {quiz.time_spent_seconds % 60}s
                          </Text>
                        </View>
                      )}
                    </View>
                  )}
                </GlassView>
              </Pressable>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.dark ? '#98989D' : '#666' }]}>
            Keep practicing to improve your scores! 🎓
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    fontSize: 14,
    marginTop: 12,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
  },
  errorSubtext: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  trophyContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 14,
  },
  additionalStats: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    gap: 12,
  },
  additionalStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  additionalStatLabel: {
    fontSize: 14,
  },
  additionalStatValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  historySection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  quizCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  quizTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quizEmoji: {
    fontSize: 32,
  },
  quizInfo: {
    flex: 1,
  },
  quizTopic: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  quizSystem: {
    fontSize: 13,
  },
  quizScoreContainer: {
    alignItems: 'flex-end',
  },
  quizScore: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },
  quizPercentage: {
    fontSize: 12,
    fontWeight: '600',
  },
  quizMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  quizMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  quizMetaText: {
    fontSize: 12,
  },
  quizDetails: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 128, 0.2)',
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});
