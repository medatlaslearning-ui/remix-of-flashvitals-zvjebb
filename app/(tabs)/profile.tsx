
import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Pressable, Modal, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';

const SPECIALTY_KEY = '@user_specialty';

const SPECIALTIES = [
  'Nursing',
  'Medical',
  'Nurse Practitioner',
  'Clinical Nurse Specialist',
  'Physician Associate',
];

type TabType = 'expert' | 'progress';

export default function ProfileScreen() {
  const router = useRouter();
  const { flashcards, getBookmarkedFlashcards, getFavoriteFlashcards, resetAllReviews } = useFlashcards();
  const [specialty, setSpecialty] = useState<string>('Medical');
  const [showSpecialtyPicker, setShowSpecialtyPicker] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('expert');

  // Load specialty from storage
  React.useEffect(() => {
    const loadSpecialty = async () => {
      try {
        const stored = await AsyncStorage.getItem(SPECIALTY_KEY);
        if (stored) {
          setSpecialty(stored);
        }
      } catch (error) {
        console.error('Error loading specialty:', error);
      }
    };
    loadSpecialty();
  }, []);

  const handleSpecialtySelect = async (selectedSpecialty: string) => {
    try {
      await AsyncStorage.setItem(SPECIALTY_KEY, selectedSpecialty);
      setSpecialty(selectedSpecialty);
      setShowSpecialtyPicker(false);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      console.log('Specialty updated to:', selectedSpecialty);
    } catch (error) {
      console.error('Error saving specialty:', error);
    }
  };

  const handleBookmarkedPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to bookmarked cards from profile');
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'bookmarked' }
    });
  };

  const handleFavoritesPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to favorite cards from profile');
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { filter: 'favorites' }
    });
  };

  const handleResetAllReviews = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert(
      'Reset All Reviews',
      'Are you sure you want to reset all card review counts? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => console.log('Reset cancelled')
        },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            console.log('Resetting all review counts...');
            await resetAllReviews();
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            Alert.alert('Success', 'All review counts have been reset.');
          }
        }
      ]
    );
  };

  const handleTabChange = (tab: TabType) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setActiveTab(tab);
    console.log('Switched to tab:', tab);
  };

  const handleAskExpertPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to Medical Guidelines Chatbot');
    router.push('/(tabs)/(home)/chatbot');
  };

  // Calculate stats
  const totalReviews = flashcards.reduce((sum, card) => sum + card.reviewCount, 0);
  const reviewedCards = flashcards.filter(c => c.reviewCount > 0).length;
  const averageReviews = reviewedCards > 0 ? (totalReviews / reviewedCards).toFixed(1) : '0';
  const bookmarkedCount = getBookmarkedFlashcards().length;
  const favoritesCount = getFavoriteFlashcards().length;

  const stats = [
    {
      label: 'Total Cards',
      value: flashcards.length,
      icon: 'square.stack.3d.up.fill',
      color: colors.primary,
      onPress: null,
    },
    {
      label: 'Cards Reviewed',
      value: reviewedCards,
      icon: 'checkmark.circle.fill',
      color: colors.success,
      onPress: null,
    },
    {
      label: 'Total Reviews',
      value: totalReviews,
      icon: 'arrow.clockwise',
      color: colors.secondary,
      onPress: handleResetAllReviews,
    },
    {
      label: 'Avg Reviews/Card',
      value: averageReviews,
      icon: 'chart.bar.fill',
      color: colors.warning,
      onPress: null,
    },
    {
      label: 'Bookmarked',
      value: bookmarkedCount,
      icon: 'bookmark.fill',
      color: colors.primary,
      onPress: handleBookmarkedPress,
    },
    {
      label: 'Favorites',
      value: favoritesCount,
      icon: 'heart.fill',
      color: colors.error,
      onPress: handleFavoritesPress,
    },
  ];

  // Get all unique topics across all systems with their review counts
  const topicBreakdown = useMemo(() => {
    const topicMap = new Map<string, { total: number; reviewed: number }>();
    
    flashcards.forEach(card => {
      const key = `${card.system} - ${card.topic}`;
      const existing = topicMap.get(key) || { total: 0, reviewed: 0 };
      topicMap.set(key, {
        total: existing.total + 1,
        reviewed: existing.reviewed + (card.reviewCount > 0 ? 1 : 0)
      });
    });

    // Convert to array and sort by system then topic
    const breakdown = Array.from(topicMap.entries()).map(([key, stats]) => ({
      name: key,
      total: stats.total,
      reviewed: stats.reviewed,
      percentage: stats.total > 0 ? Math.round((stats.reviewed / stats.total) * 100) : 0
    }));

    // Sort by system and topic name
    breakdown.sort((a, b) => a.name.localeCompare(b.name));

    console.log('Topic breakdown:', breakdown.length, 'topics');
    return breakdown;
  }, [flashcards]);

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
          <Text style={styles.name}>MedAtlas Scholar</Text>
          
          {/* Specialty Dropdown */}
          <Pressable 
            style={styles.specialtyButton}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setShowSpecialtyPicker(true);
            }}
          >
            <Text style={styles.specialty}>{specialty}</Text>
            <IconSymbol name="chevron.down" size={16} color={colors.textSecondary} />
          </Pressable>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <Pressable
            style={[styles.tab, activeTab === 'expert' && styles.tabActive]}
            onPress={() => handleTabChange('expert')}
          >
            <IconSymbol 
              name="brain.head.profile" 
              size={20} 
              color={activeTab === 'expert' ? colors.primary : colors.textSecondary} 
            />
            <Text style={[styles.tabText, activeTab === 'expert' && styles.tabTextActive]}>
              Ask an Expert
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'progress' && styles.tabActive]}
            onPress={() => handleTabChange('progress')}
          >
            <IconSymbol 
              name="chart.bar.fill" 
              size={20} 
              color={activeTab === 'progress' ? colors.primary : colors.textSecondary} 
            />
            <Text style={[styles.tabText, activeTab === 'progress' && styles.tabTextActive]}>
              Your Progress
            </Text>
          </Pressable>
        </View>

        {/* Ask an Expert Tab Content */}
        {activeTab === 'expert' && (
          <View style={styles.section}>
            <View style={styles.expertCard}>
              <IconSymbol name="brain.head.profile" size={64} color={colors.primary} />
              <Text style={styles.expertTitle}>Ask the Medical Expert</Text>
              <Text style={styles.expertDescription}>
                Get answers to your medical questions based on evidence-based guidelines and references from our comprehensive knowledge base covering all medical specialties.
              </Text>
              <Pressable style={styles.expertButton} onPress={handleAskExpertPress}>
                <IconSymbol name="message.fill" size={20} color={colors.background} />
                <Text style={styles.expertButtonText}>Start Conversation</Text>
              </Pressable>
              <View style={styles.expertFeatures}>
                <View style={styles.featureItem}>
                  <IconSymbol name="book.fill" size={16} color={colors.primary} />
                  <Text style={styles.featureText}>Evidence-Based</Text>
                </View>
                <View style={styles.featureItem}>
                  <IconSymbol name="globe" size={16} color={colors.primary} />
                  <Text style={styles.featureText}>Clinical Guidelines</Text>
                </View>
                <View style={styles.featureItem}>
                  <IconSymbol name="doc.text.fill" size={16} color={colors.primary} />
                  <Text style={styles.featureText}>Referenced Answers</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Your Progress Tab Content */}
        {activeTab === 'progress' && (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Your Progress</Text>
              <View style={styles.statsGrid}>
                {stats.map((stat, index) => (
                  <Pressable
                    key={index}
                    style={styles.statCard}
                    onPress={stat.onPress || undefined}
                    disabled={!stat.onPress}
                  >
                    <IconSymbol name={stat.icon as any} size={32} color={stat.color} />
                    <Text style={styles.statValue}>{stat.value}</Text>
                    <Text style={styles.statLabel}>{stat.label}</Text>
                    {stat.onPress && (
                      <View style={styles.actionIndicator}>
                        <IconSymbol name="hand.tap" size={12} color={colors.textSecondary} />
                      </View>
                    )}
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Topic Breakdown</Text>
              <Text style={styles.sectionSubtitle}>
                {topicBreakdown.length} topics across all systems
              </Text>
              <View style={styles.topicList}>
                {topicBreakdown.map((topic, index) => (
                  <View key={index} style={styles.topicItem}>
                    <View style={styles.topicInfo}>
                      <Text style={styles.topicName}>{topic.name}</Text>
                      <Text style={styles.topicCount}>
                        {topic.reviewed}/{topic.total} reviewed
                      </Text>
                    </View>
                    <View style={styles.progressBarContainer}>
                      <View style={[styles.progressBarFill, { width: `${topic.percentage}%` }]} />
                    </View>
                    <Text style={styles.percentageText}>{topic.percentage}%</Text>
                  </View>
                ))}
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
          </>
        )}
      </ScrollView>

      {/* Specialty Picker Modal */}
      <Modal
        visible={showSpecialtyPicker}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSpecialtyPicker(false)}
      >
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setShowSpecialtyPicker(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Your Specialty</Text>
            {SPECIALTIES.map((spec, index) => (
              <Pressable
                key={index}
                style={[
                  styles.specialtyOption,
                  specialty === spec && styles.specialtyOptionSelected
                ]}
                onPress={() => handleSpecialtySelect(spec)}
              >
                <Text style={[
                  styles.specialtyOptionText,
                  specialty === spec && styles.specialtyOptionTextSelected
                ]}>
                  {spec}
                </Text>
                {specialty === spec && (
                  <IconSymbol name="checkmark" size={20} color={colors.primary} />
                )}
              </Pressable>
            ))}
            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setShowSpecialtyPicker(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
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
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  specialtyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.card,
    borderRadius: 20,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  specialty: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: colors.highlight,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  tabTextActive: {
    color: colors.primary,
  },
  section: {
    marginBottom: 32,
  },
  expertCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  expertTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  expertDescription: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  expertButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    elevation: 4,
    marginBottom: 24,
  },
  expertButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
  expertFeatures: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  featureText: {
    fontSize: 13,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
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
    position: 'relative',
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
  actionIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
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
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  topicCount: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 8,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  specialtyOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  specialtyOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.highlight,
  },
  specialtyOptionText: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  specialtyOptionTextSelected: {
    color: colors.primary,
    fontWeight: '600',
  },
  modalCloseButton: {
    marginTop: 8,
    padding: 16,
    backgroundColor: colors.card,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '600',
  },
});
