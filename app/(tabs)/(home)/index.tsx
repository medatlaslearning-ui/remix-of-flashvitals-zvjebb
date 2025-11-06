
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const router = useRouter();
  const { allFlashcards, getBookmarkedFlashcards, getFavoriteFlashcards } = useFlashcards();

  // Get unique topics
  const topics = Array.from(new Set(allFlashcards.map(card => card.topic)));

  // Get counts
  const bookmarkedCount = getBookmarkedFlashcards().length;
  const favoritesCount = getFavoriteFlashcards().length;

  const handleTopicPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to topic:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName }
    });
  };

  const handleBookmarkedPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to bookmarked cards. Count:', bookmarkedCount);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'bookmarked' }
    });
  };

  const handleFavoritesPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to favorite cards. Count:', favoritesCount);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'favorites' }
    });
  };

  const handleQuickStart = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)/flashcards');
  };

  const handleQuizMode = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)/quiz');
  };

  const handleAdminPanel = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)/admin');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'MedCards',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <Pressable style={styles.quickActionCard} onPress={handleQuickStart}>
              <IconSymbol name="play.circle.fill" size={32} color={colors.primary} />
              <Text style={styles.quickActionTitle}>Quick Start</Text>
              <Text style={styles.quickActionSubtitle}>Random cards</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleQuizMode}>
              <IconSymbol name="checkmark.circle.fill" size={32} color={colors.accent} />
              <Text style={styles.quickActionTitle}>Quiz Mode</Text>
              <Text style={styles.quickActionSubtitle}>Test yourself</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleBookmarkedPress}>
              <View style={styles.badgeContainer}>
                <IconSymbol name="bookmark.fill" size={32} color={colors.primary} />
                {bookmarkedCount > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{bookmarkedCount}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.quickActionTitle}>Bookmarked</Text>
              <Text style={styles.quickActionSubtitle}>{bookmarkedCount} cards</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleFavoritesPress}>
              <View style={styles.badgeContainer}>
                <IconSymbol name="heart.fill" size={32} color={colors.error} />
                {favoritesCount > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{favoritesCount}</Text>
                  </View>
                )}
              </View>
              <Text style={styles.quickActionTitle}>Favorites</Text>
              <Text style={styles.quickActionSubtitle}>{favoritesCount} cards</Text>
            </Pressable>
          </View>
        </View>

        {/* Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cardiology Topics</Text>
          {topics.map((topicName, index) => {
            const topicCards = allFlashcards.filter(card => card.topic === topicName);
            const reviewedCount = topicCards.filter(card => card.reviewCount > 0).length;
            const progress = topicCards.length > 0 ? (reviewedCount / topicCards.length) * 100 : 0;

            return (
              <Pressable
                key={index}
                style={styles.topicCard}
                onPress={() => handleTopicPress(topicName)}
              >
                <View style={styles.topicHeader}>
                  <View style={styles.topicInfo}>
                    <Text style={styles.topicTitle}>{topicName}</Text>
                    <Text style={styles.topicSubtitle}>
                      {topicCards.length} cards • {reviewedCount} reviewed
                    </Text>
                  </View>
                  <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
                </View>
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Admin Access */}
        <View style={styles.section}>
          <Pressable style={styles.adminButton} onPress={handleAdminPanel}>
            <IconSymbol name="gear" size={20} color={colors.primary} />
            <Text style={styles.adminButtonText}>Admin Panel</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 100 : 110,
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
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickActionCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  badgeContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    backgroundColor: colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: colors.card,
    fontSize: 12,
    fontWeight: '700',
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 12,
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  topicCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  topicInfo: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  topicSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: colors.highlight,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  adminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.highlight,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  adminButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
});
