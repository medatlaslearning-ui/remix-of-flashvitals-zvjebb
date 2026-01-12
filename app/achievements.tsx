
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, RefreshControl, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useTheme } from '@react-navigation/native';
import { GlassView } from 'expo-glass-effect';
import { IconSymbol } from '@/components/IconSymbol';
import { useProgressReport } from '@/hooks/useProgressReport';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import * as Haptics from 'expo-haptics';

export default function AchievementsScreen() {
  const theme = useTheme();
  const router = useRouter();
  const { user } = useAuth();
  const { stats, quizResults, loading, error, refresh } = useProgressReport(user?.id || null);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    await refresh();
    setRefreshing(false);
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
          Loading achievements...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <IconSymbol ios_icon_name="exclamationmark.triangle.fill" android_material_icon_name="warning" size={48} color={theme.colors.notification} />
        <Text style={[styles.errorText, { color: theme.colors.notification }]}>
          Error loading achievements
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

  const totalQuizzes = stats?.totalQuizzesTaken || 0;
  const averageScore = stats?.averageScore || 0;
  const perfectScores = quizResults.filter(q => q.score === q.total_questions).length;

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Achievements',
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
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.colors.text }]}>🏆 Your Achievements</Text>
          <Text style={[styles.subtitle, { color: theme.dark ? '#98989D' : '#666' }]}>
            Track your learning milestones
          </Text>
        </View>

        {/* Quiz Master Tile */}
        <Pressable onPress={handleQuizMasterPress}>
          <GlassView 
            style={[
              styles.achievementTile,
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)' }
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
                <Text style={[styles.statValue, { color: theme.colors.text }]}>{totalQuizzes}</Text>
                <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Quizzes</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: '#34C759' }]}>{averageScore.toFixed(0)}%</Text>
                <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Avg Score</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: '#FFD700' }]}>{perfectScores}</Text>
                <Text style={[styles.statLabel, { color: theme.dark ? '#98989D' : '#666' }]}>Perfect</Text>
              </View>
            </View>
          </GlassView>
        </Pressable>

        {/* Coming Soon Achievements */}
        <View style={styles.comingSoonSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>More Achievements Coming Soon</Text>
          
          <GlassView 
            style={[
              styles.comingSoonTile,
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }
            ]} 
            glassEffectStyle="regular"
          >
            <IconSymbol 
              ios_icon_name="star.fill" 
              android_material_icon_name="star" 
              size={32} 
              color={theme.dark ? '#555' : '#CCC'} 
            />
            <Text style={[styles.comingSoonText, { color: theme.dark ? '#98989D' : '#666' }]}>
              Flashcard Master
            </Text>
          </GlassView>

          <GlassView 
            style={[
              styles.comingSoonTile,
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }
            ]} 
            glassEffectStyle="regular"
          >
            <IconSymbol 
              ios_icon_name="flame.fill" 
              android_material_icon_name="local-fire-department" 
              size={32} 
              color={theme.dark ? '#555' : '#CCC'} 
            />
            <Text style={[styles.comingSoonText, { color: theme.dark ? '#98989D' : '#666' }]}>
              Study Streak
            </Text>
          </GlassView>

          <GlassView 
            style={[
              styles.comingSoonTile,
              Platform.OS !== 'ios' && { backgroundColor: theme.dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }
            ]} 
            glassEffectStyle="regular"
          >
            <IconSymbol 
              ios_icon_name="graduationcap.fill" 
              android_material_icon_name="school" 
              size={32} 
              color={theme.dark ? '#555' : '#CCC'} 
            />
            <Text style={[styles.comingSoonText, { color: theme.dark ? '#98989D' : '#666' }]}>
              Topic Expert
            </Text>
          </GlassView>
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
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  achievementTile: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  tileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tileIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tileContent: {
    flex: 1,
  },
  tileTitleText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  tileSubtitle: {
    fontSize: 14,
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 128, 0.2)',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
  },
  comingSoonSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  comingSoonTile: {
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
    opacity: 0.6,
  },
  comingSoonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
