
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter, useFocusEffect } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const router = useRouter();
  const { allFlashcards, updateTrigger } = useFlashcards();

  // Get unique topics for Cardiology
  const cardiologyTopics = useMemo(() => {
    return Array.from(new Set(
      allFlashcards
        .filter(card => card.system === 'Cardiology')
        .map(card => card.topic)
    ));
  }, [allFlashcards]);

  // Get unique topics for Pulmonary
  const pulmonaryTopics = useMemo(() => {
    return Array.from(new Set(
      allFlashcards
        .filter(card => card.system === 'Pulmonary')
        .map(card => card.topic)
    ));
  }, [allFlashcards]);

  const handleTopicPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to topic:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName }
    });
  };

  const handleSystemPress = (system: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to system:', system);
    if (system === 'Pulmonary') {
      router.push('/(tabs)/(home)/pulmonary-topics');
    }
  };

  const handleBookmarkedPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to bookmarked cards');
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'bookmarked' }
    });
  };

  const handleFavoritesPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to favorite cards');
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
              <IconSymbol name="bookmark.fill" size={32} color={colors.primary} />
              <Text style={styles.quickActionTitle}>Bookmarked</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleFavoritesPress}>
              <IconSymbol name="heart.fill" size={32} color={colors.error} />
              <Text style={styles.quickActionTitle}>Favorites</Text>
            </Pressable>
          </View>
        </View>

        {/* Medical Systems */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Systems</Text>
          
          {/* Cardiology System */}
          <View style={styles.systemCard}>
            <View style={styles.systemHeader}>
              <View style={styles.systemIconContainer}>
                <IconSymbol name="heart.fill" size={32} color={colors.primary} />
              </View>
              <View style={styles.systemInfo}>
                <Text style={styles.systemTitle}>Cardiology</Text>
                <Text style={styles.systemSubtitle}>
                  {allFlashcards.filter(c => c.system === 'Cardiology').length} cards • {cardiologyTopics.length} topics
                </Text>
              </View>
            </View>
            <View style={styles.topicsContainer}>
              {cardiologyTopics.map((topicName, index) => {
                const topicCards = allFlashcards.filter(
                  card => card.system === 'Cardiology' && card.topic === topicName
                );
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
          </View>

          {/* Pulmonary System */}
          <Pressable 
            style={styles.systemCard}
            onPress={() => handleSystemPress('Pulmonary')}
          >
            <View style={styles.systemHeader}>
              <View style={[styles.systemIconContainer, { backgroundColor: colors.highlight }]}>
                <IconSymbol name="lungs.fill" size={32} color={colors.accent} />
              </View>
              <View style={styles.systemInfo}>
                <Text style={styles.systemTitle}>Pulmonary System</Text>
                <Text style={styles.systemSubtitle}>
                  {allFlashcards.filter(c => c.system === 'Pulmonary').length} cards • {pulmonaryTopics.length} topics
                </Text>
              </View>
              <IconSymbol name="chevron.right" size={24} color={colors.textSecondary} />
            </View>
          </Pressable>
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
  systemCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  systemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  systemIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  systemInfo: {
    flex: 1,
  },
  systemTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  systemSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  topicsContainer: {
    gap: 12,
  },
  topicCard: {
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topicInfo: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  topicSubtitle: {
    fontSize: 12,
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
