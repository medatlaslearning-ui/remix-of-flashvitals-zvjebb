
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform, Alert } from 'react-native';
import { Stack, useRouter, useFocusEffect } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';
import { modalDemos } from '@/components/homeData';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const router = useRouter();
  const { allFlashcards, updateTrigger, getBookmarkedFlashcards, getFavoriteFlashcards, getDifficultFlashcards } = useFlashcards();

  // Recalculate counts when screen is focused or flashcards change
  const bookmarkedCount = useMemo(() => getBookmarkedFlashcards().length, [getBookmarkedFlashcards]);
  const favoritesCount = useMemo(() => getFavoriteFlashcards().length, [getFavoriteFlashcards]);
  const difficultCount = useMemo(() => getDifficultFlashcards().length, [getDifficultFlashcards]);

  console.log('Home screen - Bookmarked count:', bookmarkedCount);
  console.log('Home screen - Favorites count:', favoritesCount);
  console.log('Home screen - Difficult count:', difficultCount);

  // Map system names from homeData to actual system names in flashcards
  const systemNameMap: { [key: string]: string } = {
    'Cardiology': 'Cardiology',
    'Pulmonary': 'Pulmonary',
    'Neurology': 'Neurology',
    'Hematology': 'Hematology',
    'Gastroenterology': 'Gastroenterology',
    'Endocrine': 'Endocrine',
    'Renal': 'Renal',
    'Infectious Disease': 'Infectious Disease',
    'Emergency Medicine': 'Emergency Medicine & Trauma',
    'Urology': 'Urology',
  };

  // Get system stats
  const getSystemStats = (systemName: string) => {
    const mappedName = systemNameMap[systemName] || systemName;
    const cards = allFlashcards.filter(c => c.system === mappedName);
    const topics = Array.from(new Set(cards.map(card => card.topic)));
    return { cardCount: cards.length, topicCount: topics.length };
  };

  const handleSystemPress = (systemName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to system:', systemName);
    
    const mappedName = systemNameMap[systemName] || systemName;
    
    if (mappedName === 'Cardiology') {
      router.push('/(tabs)/(home)/cardiology-topics');
    } else if (mappedName === 'Pulmonary') {
      router.push('/(tabs)/(home)/pulmonary-topics');
    } else if (mappedName === 'Renal') {
      router.push('/(tabs)/(home)/renal-topics');
    } else if (mappedName === 'Gastroenterology') {
      router.push('/(tabs)/(home)/gastroenterology-topics');
    } else if (mappedName === 'Endocrine') {
      router.push('/(tabs)/(home)/endocrine-topics');
    } else if (mappedName === 'Hematology') {
      router.push('/(tabs)/(home)/hematology-topics');
    } else if (mappedName === 'Infectious Disease') {
      router.push('/(tabs)/(home)/infectious-disease-topics');
    } else if (mappedName === 'Neurology') {
      router.push('/(tabs)/(home)/neurology-topics');
    } else if (mappedName === 'Emergency Medicine & Trauma') {
      router.push('/(tabs)/(home)/emergency-medicine-topics');
    } else if (mappedName === 'Urology') {
      router.push('/(tabs)/(home)/urology-topics');
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

  const handleDifficultPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to difficult cards');
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'difficult' }
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

  const handleChatbot = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)/chatbot');
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
              <Text style={styles.quickActionEmoji}>▶️</Text>
              <Text style={styles.quickActionTitle}>Quick Start</Text>
              <Text style={styles.quickActionSubtitle}>Random cards</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleQuizMode}>
              <Text style={styles.quickActionEmoji}>✅</Text>
              <Text style={styles.quickActionTitle}>Quiz Mode</Text>
              <Text style={styles.quickActionSubtitle}>Test yourself</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleChatbot}>
              <Text style={styles.quickActionEmoji}>💬</Text>
              <Text style={styles.quickActionTitle}>Medical Guidelines Chatbot</Text>
              <Text style={styles.quickActionSubtitle}>Ask guidelines</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleBookmarkedPress}>
              <Text style={styles.quickActionEmoji}>🔖</Text>
              <Text style={styles.quickActionTitle}>Bookmarked</Text>
              <Text style={styles.quickActionCount}>{bookmarkedCount}</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleFavoritesPress}>
              <Text style={styles.quickActionEmoji}>❤️</Text>
              <Text style={styles.quickActionTitle}>Favorites</Text>
              <Text style={styles.quickActionCount}>{favoritesCount}</Text>
            </Pressable>

            <Pressable style={styles.quickActionCard} onPress={handleDifficultPress}>
              <Text style={styles.quickActionEmoji}>⚠️</Text>
              <Text style={styles.quickActionTitle}>Difficult</Text>
              <Text style={styles.quickActionCount}>{difficultCount}</Text>
            </Pressable>
          </View>
        </View>

        {/* Medical Systems */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Medical Systems</Text>
          
          {modalDemos.map((system, index) => {
            const stats = getSystemStats(system.title.replace(/^[^\s]+\s/, '')); // Remove emoji from title
            const systemName = system.title.replace(/^[^\s]+\s/, ''); // Remove emoji from title
            
            return (
              <Pressable 
                key={index}
                style={[styles.systemCard, { backgroundColor: system.color }]}
                onPress={() => handleSystemPress(systemName)}
              >
                <View style={styles.systemHeader}>
                  <View style={styles.systemEmojiContainer}>
                    <Text style={styles.systemEmoji}>{system.emoji}</Text>
                  </View>
                  <View style={styles.systemInfo}>
                    <Text style={styles.systemTitle}>{systemName}</Text>
                    <Text style={styles.systemDescription}>{system.description}</Text>
                    <Text style={styles.systemSubtitle}>
                      {stats.cardCount} cards • {stats.topicCount} topics
                    </Text>
                  </View>
                  <IconSymbol 
                    ios_icon_name="chevron.right"
                    android_material_icon_name="chevron-right"
                    size={24} 
                    color={colors.textSecondary} 
                  />
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* Admin Access */}
        <View style={styles.section}>
          <Pressable style={styles.adminButton} onPress={handleAdminPanel}>
            <IconSymbol 
              ios_icon_name="gear"
              android_material_icon_name="settings"
              size={20} 
              color={colors.primary} 
            />
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
    backgroundColor: '#E3F2FD',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  quickActionEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  quickActionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 4,
    textAlign: 'center',
  },
  quickActionSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  quickActionCount: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginTop: 4,
  },
  systemCard: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  systemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  systemEmojiContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  systemEmoji: {
    fontSize: 32,
  },
  systemInfo: {
    flex: 1,
  },
  systemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  systemDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  systemSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
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
