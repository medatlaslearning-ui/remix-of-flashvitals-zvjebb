
import React, { useState, useMemo, useEffect } from 'react';
import { useFlashcards } from '@/hooks/useFlashcards';
import { useQuiz } from '@/hooks/useQuiz';
import QuizMasterTile from '@/components/QuizMasterTile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, commonStyles } from '@/styles/commonStyles';
import { View, Text, StyleSheet, ScrollView, Platform, Pressable, Modal, Alert } from 'react-native';
import type { QuizStats } from '@/types/quiz';
import { Stack, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { IconSymbol } from '@/components/IconSymbol';

type TabType = 'overview' | 'stats';

const SPECIALTY_KEY = '@user_specialty';

const SPECIALTIES = [
  'Nurse Practitioner (NP)',
  'Physician Assistant (PA)',
  'Medical Student',
  'Nursing Student',
  'Other',
];

export default function ProfileScreen() {
  const { getQuizStats } = useQuiz();
  const { flashcards, bookmarkedFlashcards, favoriteFlashcards } = useFlashcards();
  const router = useRouter();
  
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [specialty, setSpecialty] = useState<string>('');
  const [showSpecialtyModal, setShowSpecialtyModal] = useState(false);
  const [topicBreakdownExpanded, setTopicBreakdownExpanded] = useState(false);

  useEffect(() => {
    loadSpecialty();
  }, []);

  const loadSpecialty = async () => {
    try {
      const saved = await AsyncStorage.getItem(SPECIALTY_KEY);
      if (saved) {
        setSpecialty(saved);
      }
    } catch (error) {
      console.log('Error loading specialty:', error);
    }
  };

  const handleSpecialtySelect = async (selectedSpecialty: string) => {
    try {
      await AsyncStorage.setItem(SPECIALTY_KEY, selectedSpecialty);
      setSpecialty(selectedSpecialty);
      setShowSpecialtyModal(false);
      if (Platform.OS === 'ios') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } catch (error) {
      console.log('Error saving specialty:', error);
    }
  };

  const quizStats = useMemo(() => getQuizStats(), [getQuizStats]);

  const systemStats = useMemo(() => {
    const stats: Record<string, { total: number; reviewed: number }> = {};
    
    // Add null check for flashcards
    if (flashcards && Array.isArray(flashcards)) {
      flashcards.forEach(card => {
        if (!stats[card.system]) {
          stats[card.system] = { total: 0, reviewed: 0 };
        }
        stats[card.system].total++;
        if (card.reviewCount && card.reviewCount > 0) {
          stats[card.system].reviewed++;
        }
      });
    }

    return stats;
  }, [flashcards]);

  const topicStats = useMemo(() => {
    const stats: Record<string, { total: number; reviewed: number }> = {};
    
    // Add null check for flashcards
    if (flashcards && Array.isArray(flashcards)) {
      flashcards.forEach(card => {
        if (!stats[card.topic]) {
          stats[card.topic] = { total: 0, reviewed: 0 };
        }
        stats[card.topic].total++;
        if (card.reviewCount && card.reviewCount > 0) {
          stats[card.topic].reviewed++;
        }
      });
    }

    return stats;
  }, [flashcards]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  const handleBookmarkedPress = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    router.push('/(tabs)/(home)/bookmarked');
  };

  const handleFavoritesPress = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    router.push('/(tabs)/(home)/favorites');
  };

  const handleResetAllReviews = () => {
    Alert.alert(
      'Reset All Reviews',
      'Are you sure you want to reset all review counts? This cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            // Reset logic would go here
            if (Platform.OS === 'ios') {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }
          },
        },
      ]
    );
  };

  const handleAskExpertPress = () => {
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    router.push('/(tabs)/(home)/chatbot');
  };

  const toggleTopicBreakdown = () => {
    setTopicBreakdownExpanded(!topicBreakdownExpanded);
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Profile', headerShown: true }} />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <IconSymbol
              ios_icon_name="person.circle.fill"
              android_material_icon_name="person"
              size={80}
              color={colors.primary}
            />
          </View>
          <Text style={styles.userName}>Medical Learner</Text>
          <Pressable
            style={styles.specialtyButton}
            onPress={() => setShowSpecialtyModal(true)}
          >
            <Text style={styles.specialtyText}>
              {specialty || 'Select Specialty'}
            </Text>
            <IconSymbol
              ios_icon_name="chevron.right"
              android_material_icon_name="chevron-right"
              size={16}
              color={colors.textSecondary}
            />
          </Pressable>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <Pressable
            style={[styles.tab, activeTab === 'overview' && styles.activeTab]}
            onPress={() => handleTabChange('overview')}
          >
            <Text style={[styles.tabText, activeTab === 'overview' && styles.activeTabText]}>
              Overview
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'stats' && styles.activeTab]}
            onPress={() => handleTabChange('stats')}
          >
            <Text style={[styles.tabText, activeTab === 'stats' && styles.activeTabText]}>
              Stats
            </Text>
          </Pressable>
        </View>

        {/* Content */}
        {activeTab === 'overview' && (
          <View style={styles.content}>
            {/* Quick Actions */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              <Pressable style={styles.actionCard} onPress={handleBookmarkedPress}>
                <IconSymbol
                  ios_icon_name="bookmark.fill"
                  android_material_icon_name="bookmark"
                  size={24}
                  color={colors.primary}
                />
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Bookmarked</Text>
                  <Text style={styles.actionSubtitle}>
                    {(bookmarkedFlashcards && bookmarkedFlashcards.length) || 0} cards
                  </Text>
                </View>
                <IconSymbol
                  ios_icon_name="chevron.right"
                  android_material_icon_name="chevron-right"
                  size={20}
                  color={colors.textSecondary}
                />
              </Pressable>

              <Pressable style={styles.actionCard} onPress={handleFavoritesPress}>
                <IconSymbol
                  ios_icon_name="heart.fill"
                  android_material_icon_name="favorite"
                  size={24}
                  color={colors.accent}
                />
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Favorites</Text>
                  <Text style={styles.actionSubtitle}>
                    {(favoriteFlashcards && favoriteFlashcards.length) || 0} cards
                  </Text>
                </View>
                <IconSymbol
                  ios_icon_name="chevron.right"
                  android_material_icon_name="chevron-right"
                  size={20}
                  color={colors.textSecondary}
                />
              </Pressable>

              <Pressable style={styles.actionCard} onPress={handleAskExpertPress}>
                <IconSymbol
                  ios_icon_name="message.fill"
                  android_material_icon_name="chat"
                  size={24}
                  color={colors.success}
                />
                <View style={styles.actionContent}>
                  <Text style={styles.actionTitle}>Ask Expert</Text>
                  <Text style={styles.actionSubtitle}>Get instant answers</Text>
                </View>
                <IconSymbol
                  ios_icon_name="chevron.right"
                  android_material_icon_name="chevron-right"
                  size={20}
                  color={colors.textSecondary}
                />
              </Pressable>
            </View>

            {/* Your Progress */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Your Progress</Text>
              
              {/* System Breakdown */}
              <View style={styles.statsCard}>
                <Text style={styles.statsCardTitle}>System Breakdown</Text>
                {Object.entries(systemStats).map(([system, stats]) => (
                  <View key={system} style={styles.statRow}>
                    <Text style={styles.statLabel}>{system}</Text>
                    <Text style={styles.statValue}>
                      {stats.reviewed}/{stats.total}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Topic Breakdown - Collapsible */}
              <View style={styles.statsCard}>
                <Pressable
                  style={styles.collapsibleHeader}
                  onPress={toggleTopicBreakdown}
                >
                  <Text style={styles.statsCardTitle}>Topic Breakdown</Text>
                  <IconSymbol
                    ios_icon_name={topicBreakdownExpanded ? 'chevron.up' : 'chevron.down'}
                    android_material_icon_name={topicBreakdownExpanded ? 'expand-less' : 'expand-more'}
                    size={20}
                    color={colors.textSecondary}
                  />
                </Pressable>
                {topicBreakdownExpanded && (
                  <View style={styles.collapsibleContent}>
                    {Object.entries(topicStats).map(([topic, stats]) => (
                      <View key={topic} style={styles.statRow}>
                        <Text style={styles.statLabel}>{topic}</Text>
                        <Text style={styles.statValue}>
                          {stats.reviewed}/{stats.total}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>
        )}

        {activeTab === 'stats' && (
          <View style={styles.content}>
            <QuizMasterTile quizStats={quizStats} />
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Actions</Text>
              <Pressable style={styles.dangerButton} onPress={handleResetAllReviews}>
                <Text style={styles.dangerButtonText}>Reset All Reviews</Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Specialty Modal */}
        <Modal
          visible={showSpecialtyModal}
          transparent
          animationType="slide"
          onRequestClose={() => setShowSpecialtyModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Your Specialty</Text>
              {SPECIALTIES.map((spec) => (
                <Pressable
                  key={spec}
                  style={[
                    styles.specialtyOption,
                    specialty === spec && styles.specialtyOptionSelected,
                  ]}
                  onPress={() => handleSpecialtySelect(spec)}
                >
                  <Text
                    style={[
                      styles.specialtyOptionText,
                      specialty === spec && styles.specialtyOptionTextSelected,
                    ]}
                  >
                    {spec}
                  </Text>
                  {specialty === spec && (
                    <IconSymbol
                      ios_icon_name="checkmark"
                      android_material_icon_name="check"
                      size={20}
                      color={colors.white}
                    />
                  )}
                </Pressable>
              ))}
              <Pressable
                style={styles.modalCloseButton}
                onPress={() => setShowSpecialtyModal(false)}
              >
                <Text style={styles.modalCloseButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  specialtyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.background,
    borderRadius: 20,
    gap: 8,
  },
  specialtyText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 12,
    ...commonStyles.shadow,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  statsCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    ...commonStyles.shadow,
  },
  statsCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  collapsibleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  collapsibleContent: {
    marginTop: 12,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statLabel: {
    fontSize: 14,
    color: colors.text,
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  dangerButton: {
    backgroundColor: colors.error,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  dangerButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  specialtyOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    backgroundColor: colors.background,
    marginBottom: 12,
  },
  specialtyOptionSelected: {
    backgroundColor: colors.primary,
  },
  specialtyOptionText: {
    fontSize: 16,
    color: colors.text,
  },
  specialtyOptionTextSelected: {
    color: colors.white,
    fontWeight: '600',
  },
  modalCloseButton: {
    marginTop: 12,
    padding: 16,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '600',
  },
});
