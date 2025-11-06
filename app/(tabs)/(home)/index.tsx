
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const router = useRouter();
  const { flashcards, getFlashcardsByTopic, getBookmarkedFlashcards, getFavoriteFlashcards } = useFlashcards();

  const topics = [
    { name: 'Arrhythmias', icon: 'waveform.path.ecg', color: colors.primary },
    { name: 'Heart Failure', icon: 'heart.fill', color: colors.error },
    { name: 'Ischemic Heart Disease', icon: 'bolt.heart.fill', color: colors.warning },
    { name: 'Valvular Disease', icon: 'heart.circle', color: colors.secondary },
  ];

  const bookmarkedCount = getBookmarkedFlashcards().length;
  const favoritesCount = getFavoriteFlashcards().length;

  const stats = [
    { label: 'Total Cards', value: flashcards.length, icon: 'square.stack.3d.up.fill', color: colors.primary, onPress: null },
    { label: 'Bookmarked', value: bookmarkedCount, icon: 'bookmark.fill', color: colors.secondary, onPress: () => handleBookmarkedPress() },
    { label: 'Favorites', value: favoritesCount, icon: 'heart.fill', color: colors.error, onPress: () => handleFavoritesPress() },
    { label: 'Reviewed', value: flashcards.filter(c => c.reviewCount > 0).length, icon: 'checkmark.circle.fill', color: colors.success, onPress: null },
  ];

  const handleTopicPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName }
    });
  };

  const handleBookmarkedPress = () => {
    if (bookmarkedCount === 0) {
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'bookmarked' }
    });
  };

  const handleFavoritesPress = () => {
    if (favoritesCount === 0) {
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'favorites' }
    });
  };

  const handleQuickStart = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push('/(tabs)/(home)/flashcards');
  };

  const handleQuizMode = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push('/(tabs)/(home)/quiz');
  };

  const handleAdminPanel = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)/admin');
  };

  return (
    <>
      {Platform.OS === 'ios' && (
        <Stack.Screen
          options={{
            title: 'MedLearn Cardiology',
            headerRight: () => (
              <Pressable onPress={handleAdminPanel} style={styles.headerButton}>
                <IconSymbol name="gear" color={colors.primary} size={24} />
              </Pressable>
            ),
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
          <Text style={styles.title}>MedLearn</Text>
          <Text style={styles.subtitle}>Cardiology Flashcards</Text>
          <Text style={styles.description}>
            Master cardiology concepts with high-yield flashcards and clinical pearls
          </Text>
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <Pressable
              key={index}
              style={[
                styles.statCard,
                stat.onPress && stat.value > 0 && styles.statCardClickable
              ]}
              onPress={stat.onPress || undefined}
              disabled={!stat.onPress || stat.value === 0}
            >
              <IconSymbol name={stat.icon as any} size={28} color={stat.color} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
              {stat.onPress && stat.value > 0 && (
                <View style={styles.statCardIndicator}>
                  <IconSymbol name="chevron.right" size={12} color={colors.textSecondary} />
                </View>
              )}
            </Pressable>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionButtons}>
            <Pressable onPress={handleQuickStart} style={[styles.actionButton, { backgroundColor: colors.primary }]}>
              <IconSymbol name="play.fill" size={24} color={colors.card} />
              <Text style={styles.actionButtonText}>Start Review</Text>
            </Pressable>
            <Pressable onPress={handleQuizMode} style={[styles.actionButton, { backgroundColor: colors.secondary }]}>
              <IconSymbol name="questionmark.circle.fill" size={24} color={colors.card} />
              <Text style={styles.actionButtonText}>Quiz Mode</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Topics</Text>
          <View style={styles.topicsGrid}>
            {topics.map((topic, index) => (
              <Pressable
                key={index}
                onPress={() => handleTopicPress(topic.name)}
                style={styles.topicCard}
              >
                <View style={[styles.topicIcon, { backgroundColor: topic.color }]}>
                  <IconSymbol name={topic.icon as any} size={32} color={colors.card} />
                </View>
                <Text style={styles.topicName}>{topic.name}</Text>
                <Text style={styles.topicCount}>
                  {getFlashcardsByTopic(topic.name).length} cards
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {Platform.OS !== 'ios' && (
          <View style={styles.section}>
            <Pressable onPress={handleAdminPanel} style={styles.adminButton}>
              <IconSymbol name="gear" size={20} color={colors.primary} />
              <Text style={styles.adminButtonText}>Admin Panel</Text>
            </Pressable>
          </View>
        )}
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
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
    position: 'relative',
  },
  statCardClickable: {
    opacity: 1,
  },
  statCardIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    gap: 8,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.card,
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  topicCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  topicIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  topicName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  topicCount: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  headerButton: {
    padding: 8,
  },
  adminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  adminButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
});
