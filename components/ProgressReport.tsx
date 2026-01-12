
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, RefreshControl, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { GlassView } from 'expo-glass-effect';
import { IconSymbol } from './IconSymbol';
import { useProgressReport } from '@/hooks/useProgressReport';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import * as Haptics from 'expo-haptics';

export function ProgressReport() {
  const theme = useTheme();
  const router = useRouter();
  const { user } = useAuth();
  const { stats, quizResults, loading, error, refresh } = useProgressReport(user?.id || null);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    await refresh();
    setRefreshing(false);
  };

  const handleToggleTopic = (topic: string) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setExpandedTopic(expandedTopic === topic ? null : topic);
  };

  const handleQuizMasterPress = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    router.push('/quiz-master');
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={[styles.loadingText, { color: theme.dark ? '#98989D' : '#666' }]}>
          Loading your progress...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <IconSymbol ios_icon_name="exclamationmark.triangle.fill" android_material_icon_name="warning" size={48} color={theme.colors.notification} />
        <Text style={[styles.errorText, { color: theme.colors.notification }]}>
          Error loading progress
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

  if (!stats || stats.totalQuizzesTaken === 0) {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={theme.colors.primary} />
        }
      >
        <View style={styles.emptyContainer}>
          <IconSymbol ios_icon_name="chart.bar.fill" android_material_icon_name="bar-chart" size={64} color={theme.dark ? '#98989D' : '#666'} />
          <Text style={[styles.emptyText, { color: theme.colors.text }]}>
            No progress data yet
          </Text>
          <Text style={[styles.emptySubtext, { color: theme.dark ? '#98989D' : '#666' }]}>
            Start taking quizzes and reviewing flashcards to see your progress here!
          </Text>
        </View>
      </ScrollView>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      console.error('[ProgressReport] Error formatting date:', e);
      return 'Invalid date';
    }
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return '#34C759';
    if (percentage >= 60) return '#FF9500';
    return '#FF3B30';
  };

  const totalQuizzes = stats?.totalQuizzesTaken || 0;
  const averageScore = stats?.averageScore || 0;
  const perfectScores = quizResults?.filter(q => q.score === q.total_questions).length || 0;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor={theme.colors.primary} />
      }
    >
      {/* Overview Stats */}
      <View style={styles.statsGrid}>
        <GlassView 
          style={[
            styles.statTile, 
            { backgroundColor: 'rgba(0, 122, 255, 0.15)' },
            Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(0, 122, 255, 0.2)' : 'rgba(0, 122, 255, 0.1)' }
          ]} 
          glassEffectStyle="regular"
        >
          <IconSymbol ios_icon_name="chart.bar.fill" android_material_icon_name="bar-chart" size={32} color="#007AFF" />
          <Text style={[styles.statValue, { color: theme.colors.text }]}>{totalQuizzes}</Text>
          <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Quizzes</Text>
        </GlassView>

        <GlassView 
          style={[
            styles.statTile, 
            { backgroundColor: 'rgba(52, 199, 89, 0.15)' },
            Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(52, 199, 89, 0.2)' : 'rgba(52, 199, 89, 0.1)' }
          ]} 
          glassEffectStyle="regular"
        >
          <IconSymbol ios_icon_name="star.fill" android_material_icon_name="star" size={32} color="#34C759" />
          <Text style={[styles.statValue, { color: theme.colors.text }]}>{averageScore.toFixed(0)}%</Text>
          <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Avg Score</Text>
        </GlassView>

        <GlassView 
          style={[
            styles.statTile, 
            { backgroundColor: 'rgba(255, 149, 0, 0.15)' },
            Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255, 149, 0, 0.2)' : 'rgba(255, 149, 0, 0.1)' }
          ]} 
          glassEffectStyle="regular"
        >
          <IconSymbol ios_icon_name="book.fill" android_material_icon_name="book" size={32} color="#FF9500" />
          <Text style={[styles.statValue, { color: theme.colors.text }]}>{stats?.totalFlashcardsViewed || 0}</Text>
          <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Cards</Text>
        </GlassView>
      </View>

      {/* Achievements Section */}
      <GlassView 
        style={[
          styles.section,
          Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
        ]} 
        glassEffectStyle="regular"
      >
        <View style={styles.sectionHeader}>
          <View style={styles.achievementsTitleRow}>
            <IconSymbol 
              ios_icon_name="trophy.fill" 
              android_material_icon_name="emoji-events" 
              size={24} 
              color="#FFD700" 
            />
            <Text style={[styles.sectionTitle, { color: theme.colors.text, marginBottom: 0 }]}>
              Achievements
            </Text>
          </View>
        </View>

        {/* Quiz Master Tile */}
        <Pressable onPress={handleQuizMasterPress} style={styles.quizMasterTile}>
          <GlassView 
            style={[
              styles.achievementTile,
              { backgroundColor: 'rgba(255, 215, 0, 0.15)' },
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0.1)' }
            ]} 
            glassEffectStyle="regular"
          >
            <View style={styles.tileHeader}>
              <View style={styles.tileIconContainer}>
                <IconSymbol 
                  ios_icon_name="trophy.fill" 
                  android_material_icon_name="emoji-events" 
                  size={40} 
                  color="#FFD700" 
                />
              </View>
              <View style={styles.tileContent}>
                <Text style={[styles.tileTitleText, { color: theme.colors.text }]}>Quiz Master</Text>
                <Text style={[styles.tileSubtitle, { color: theme.dark ? '#98989D' : '#666' }]}>
                  View all quiz results and statistics
                </Text>
              </View>
              <IconSymbol 
                ios_icon_name="chevron.right" 
                android_material_icon_name="chevron-right" 
                size={24} 
                color={theme.dark ? '#98989D' : '#666'} 
              />
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statItemValue, { color: theme.colors.text }]}>{totalQuizzes}</Text>
                <Text style={[styles.statItemLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Quizzes</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statItemValue, { color: '#34C759' }]}>{averageScore.toFixed(0)}%</Text>
                <Text style={[styles.statItemLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Avg Score</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statItemValue, { color: '#FFD700' }]}>{perfectScores}</Text>
                <Text style={[styles.statItemLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Perfect</Text>
              </View>
            </View>
          </GlassView>
        </Pressable>
      </GlassView>

      {/* Topic Breakdown */}
      {stats?.topicBreakdown && stats.topicBreakdown.length > 0 && (
        <GlassView 
          style={[
            styles.section,
            Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
          ]} 
          glassEffectStyle="regular"
        >
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>📊 Topic Breakdown</Text>
            <Text style={[styles.sectionSubtitle, { color: theme.dark ? '#98989D' : '#666' }]}>
              {stats.topicBreakdown.length} {stats.topicBreakdown.length === 1 ? 'topic' : 'topics'}
            </Text>
          </View>
          {stats.topicBreakdown.map((topic, index) => (
            <Pressable
              key={index}
              onPress={() => handleToggleTopic(topic.topic)}
              style={[
                styles.topicItem,
                index < stats.topicBreakdown.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.dark ? '#333' : '#E5E5EA' }
              ]}
            >
              <View style={styles.topicHeader}>
                <View style={styles.topicTitleRow}>
                  <Text style={[styles.topicName, { color: theme.colors.text }]}>{topic.topic}</Text>
                  <View style={styles.topicBadge}>
                    <Text style={[styles.topicBadgeText, { color: theme.dark ? '#98989D' : '#666' }]}>
                      {topic.quizCount} {topic.quizCount === 1 ? 'quiz' : 'quizzes'}
                    </Text>
                  </View>
                </View>
                <IconSymbol
                  ios_icon_name={expandedTopic === topic.topic ? 'chevron.up' : 'chevron.down'}
                  android_material_icon_name={expandedTopic === topic.topic ? 'expand-less' : 'expand-more'}
                  size={20}
                  color={theme.dark ? '#98989D' : '#666'}
                />
              </View>
              {expandedTopic === topic.topic && (
                <View style={styles.topicDetails}>
                  <View style={styles.topicDetailRow}>
                    <IconSymbol ios_icon_name="chart.bar" android_material_icon_name="bar-chart" size={16} color={theme.dark ? '#98989D' : '#666'} />
                    <Text style={[styles.topicStat, { color: theme.dark ? '#98989D' : '#666' }]}>
                      Average Score: <Text style={{ fontWeight: '700', color: getScoreColor(topic.averageScore, 100) }}>
                        {topic.averageScore.toFixed(1)}%
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.topicDetailRow}>
                    <IconSymbol ios_icon_name="book" android_material_icon_name="book" size={16} color={theme.dark ? '#98989D' : '#666'} />
                    <Text style={[styles.topicStat, { color: theme.dark ? '#98989D' : '#666' }]}>
                      Flashcards Viewed: <Text style={{ fontWeight: '700' }}>{topic.flashcardViews}</Text>
                    </Text>
                  </View>
                </View>
              )}
            </Pressable>
          ))}
        </GlassView>
      )}

      {/* Recent Quiz Results */}
      {quizResults && quizResults.length > 0 && (
        <GlassView 
          style={[
            styles.section,
            Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
          ]} 
          glassEffectStyle="regular"
        >
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>🎯 Recent Quizzes</Text>
            <Text style={[styles.sectionSubtitle, { color: theme.dark ? '#98989D' : '#666' }]}>
              Last {Math.min(5, quizResults.length)}
            </Text>
          </View>
          {quizResults.slice(0, 5).map((quiz, index) => {
            const percentage = (quiz.score / quiz.total_questions) * 100;
            const scoreColor = getScoreColor(quiz.score, quiz.total_questions);
            
            return (
              <View 
                key={quiz.id || index} 
                style={[
                  styles.quizItem,
                  index < Math.min(5, quizResults.length) - 1 && { borderBottomWidth: 1, borderBottomColor: theme.dark ? '#333' : '#E5E5EA' }
                ]}
              >
                <View style={styles.quizHeader}>
                  <View style={styles.quizTitleContainer}>
                    <Text style={[styles.quizTopic, { color: theme.colors.text }]}>{quiz.medical_topic}</Text>
                    <Text style={[styles.quizSystem, { color: theme.dark ? '#98989D' : '#666' }]}>
                      {quiz.medical_system}
                    </Text>
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
                    <Text style={[styles.quizType, { color: theme.dark ? '#98989D' : '#666' }]}>
                      {quiz.quiz_type}
                    </Text>
                  </View>
                  <View style={styles.quizMetaItem}>
                    <IconSymbol ios_icon_name="calendar" android_material_icon_name="calendar-today" size={14} color={theme.dark ? '#98989D' : '#666'} />
                    <Text style={[styles.quizDate, { color: theme.dark ? '#98989D' : '#666' }]}>
                      {formatDate(quiz.completed_at)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </GlassView>
      )}

      {/* Motivational Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.dark ? '#98989D' : '#666' }]}>
          Keep up the great work! 🎓
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    minHeight: 200,
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
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  statTile: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementsTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  quizMasterTile: {
    marginTop: 8,
  },
  achievementTile: {
    borderRadius: 12,
    padding: 16,
  },
  tileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  tileIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 215, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tileContent: {
    flex: 1,
  },
  tileTitleText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  tileSubtitle: {
    fontSize: 13,
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 128, 0.2)',
  },
  statItem: {
    alignItems: 'center',
  },
  statItemValue: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  statItemLabel: {
    fontSize: 11,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
  },
  topicItem: {
    paddingVertical: 12,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicTitleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  topicName: {
    fontSize: 16,
    fontWeight: '600',
  },
  topicBadge: {
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  topicBadgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  topicDetails: {
    marginTop: 12,
    gap: 8,
  },
  topicDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  topicStat: {
    fontSize: 14,
  },
  quizItem: {
    paddingVertical: 12,
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  quizTitleContainer: {
    flex: 1,
    gap: 4,
  },
  quizTopic: {
    fontSize: 16,
    fontWeight: '600',
  },
  quizSystem: {
    fontSize: 12,
    fontWeight: '500',
  },
  quizScoreContainer: {
    alignItems: 'flex-end',
    gap: 2,
  },
  quizScore: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quizPercentage: {
    fontSize: 12,
    fontWeight: '600',
  },
  quizMeta: {
    flexDirection: 'row',
    gap: 16,
  },
  quizMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  quizType: {
    fontSize: 12,
  },
  quizDate: {
    fontSize: 12,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
