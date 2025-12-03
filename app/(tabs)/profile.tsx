
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';

export default function ProfileScreen() {
  const { allFlashcards } = useFlashcards();

  const getBookmarkedFlashcards = () => allFlashcards.filter(card => card.bookmarked);
  const getFavoriteFlashcards = () => allFlashcards.filter(card => card.favorite);

  const totalReviews = allFlashcards.reduce((sum, card) => sum + (card.reviewCount || 0), 0);
  const reviewedCards = allFlashcards.filter(c => (c.reviewCount || 0) > 0).length;
  const averageReviews = reviewedCards > 0 ? Math.round(totalReviews / reviewedCards) : 0;

  const stats = [
    {
      label: 'Total Cards',
      value: allFlashcards.length,
      icon: 'square.stack.3d.up.fill',
      color: colors.primary,
    },
    {
      label: 'Cards Reviewed',
      value: reviewedCards,
      icon: 'checkmark.circle.fill',
      color: colors.success,
    },
    {
      label: 'Total Reviews',
      value: totalReviews,
      icon: 'arrow.clockwise',
      color: colors.secondary,
    },
    {
      label: 'Avg Reviews/Card',
      value: averageReviews,
      icon: 'chart.bar.fill',
      color: colors.warning,
    },
    {
      label: 'Bookmarked',
      value: getBookmarkedFlashcards().length,
      icon: 'bookmark.fill',
      color: colors.primary,
    },
    {
      label: 'Favorites',
      value: getFavoriteFlashcards().length,
      icon: 'heart.fill',
      color: colors.error,
    },
  ];

  const topicBreakdown = [
    { name: 'Arrhythmias', count: allFlashcards.filter(c => c.topic === 'Arrhythmias').length },
    { name: 'Heart Failure', count: allFlashcards.filter(c => c.topic === 'Heart Failure').length },
    { name: 'Ischemic Heart Disease', count: allFlashcards.filter(c => c.topic === 'Ischemic Heart Disease').length },
    { name: 'Valvular Disease', count: allFlashcards.filter(c => c.topic === 'Valvular Disease').length },
  ];

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'Profile & Stats',
          }}
        />
      )}
      <ScrollView 
        style={commonStyles.container}
        contentContainerStyle={[
          styles.scrollContent,
          Platform.OS !== 'ios' && styles.scrollContentWithTabBar
        ]}
      >
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <IconSymbol name="person.circle.fill" size={80} color={colors.primary} />
          </View>
          <Text style={styles.name}>Medical Learner</Text>
          <Text style={styles.specialty}>Cardiology Student</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <IconSymbol name={stat.icon as any} size={32} color={stat.color} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Topic Breakdown</Text>
          <View style={styles.topicList}>
            {topicBreakdown.map((topic, index) => {
              const percentage = allFlashcards.length > 0 
                ? Math.round((topic.count / allFlashcards.length) * 100) 
                : 0;
              
              return (
                <View key={index} style={styles.topicItem}>
                  <View style={styles.topicInfo}>
                    <Text style={styles.topicName}>{topic.name}</Text>
                    <Text style={styles.topicCount}>{topic.count} cards</Text>
                  </View>
                  <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
                  </View>
                  <Text style={styles.percentageText}>{percentage}%</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Study Streak</Text>
          <View style={styles.streakCard}>
            <IconSymbol name="flame.fill" size={48} color={colors.warning} />
            <Text style={styles.streakValue}>Coming Soon</Text>
            <Text style={styles.streakLabel}>Track your daily study streak</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsGrid}>
            <View style={styles.achievementCard}>
              <IconSymbol name="star.fill" size={32} color={colors.warning} />
              <Text style={styles.achievementName}>First Review</Text>
              <Text style={styles.achievementStatus}>
                {reviewedCards > 0 ? '✓ Unlocked' : 'Locked'}
              </Text>
            </View>
            <View style={styles.achievementCard}>
              <IconSymbol name="trophy.fill" size={32} color={colors.warning} />
              <Text style={styles.achievementName}>Quiz Master</Text>
              <Text style={styles.achievementStatus}>Coming Soon</Text>
            </View>
            <View style={styles.achievementCard}>
              <IconSymbol name="bolt.fill" size={32} color={colors.warning} />
              <Text style={styles.achievementName}>Speed Learner</Text>
              <Text style={styles.achievementStatus}>Coming Soon</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  scrollContentWithTabBar: {
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  specialty: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  topicList: {
    gap: 16,
  },
  topicItem: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  topicInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topicName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  topicCount: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.highlight,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  percentageText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'right',
  },
  streakCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  streakValue: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.text,
    marginTop: 12,
  },
  streakLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  achievementCard: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  achievementName: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    marginTop: 8,
    textAlign: 'center',
  },
  achievementStatus: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
  },
});
