
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { useFlashcards } from '@/hooks/useFlashcards';

const INFECTIOUS_DISEASE_TOPICS = [
  {
    name: 'Bacterial Organisms',
    description: 'Gram-positive and Gram-negative bacteria',
    hasReferences: true
  },
  {
    name: 'Fungal Infections',
    description: 'Systemic and opportunistic fungal pathogens',
    hasReferences: true
  },
  {
    name: 'Viral Infections',
    description: 'Common viral pathogens',
    hasReferences: false
  },
  {
    name: 'STIs',
    description: 'Sexually transmitted infections',
    hasReferences: false
  },
  {
    name: 'Parasitic Infections',
    description: 'Protozoan and helminthic parasites',
    hasReferences: false
  }
];

export default function InfectiousDiseaseTopicsScreen() {
  const router = useRouter();
  const { allFlashcards, getTopicStats, updateTrigger } = useFlashcards();

  // Log when component renders and when updateTrigger changes
  useEffect(() => {
    console.log('InfectiousDiseaseTopicsScreen rendered, updateTrigger:', updateTrigger);
    console.log('Total flashcards:', allFlashcards.length);
    console.log('Reviewed flashcards:', allFlashcards.filter(c => c.reviewCount > 0).length);
  }, [updateTrigger, allFlashcards]);

  const handleTopicPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to Infectious Disease topic:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName, system: 'Infectious Disease' }
    });
  };

  const handleReferencesPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to References for:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/references',
      params: { topic: topicName, system: 'Infectious Disease' }
    });
  };

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Infectious Disease',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol name="cross.case.fill" size={48} color={colors.accent} />
          <Text style={styles.headerTitle}>Infectious Disease</Text>
          <Text style={styles.headerSubtitle}>
            Select a subtopic to begin studying
          </Text>
        </View>

        {/* Topics */}
        <View style={styles.section}>
          {INFECTIOUS_DISEASE_TOPICS.map((topic, index) => {
            const stats = getTopicStats('Infectious Disease', topic.name);
            
            console.log(`Topic: ${topic.name}`, {
              total: stats.total,
              reviewed: stats.reviewed,
              remaining: stats.remaining,
              progress: stats.progress
            });

            return (
              <View key={index} style={styles.topicWrapper}>
                <Pressable
                  style={styles.topicCard}
                  onPress={() => handleTopicPress(topic.name)}
                >
                  <View style={styles.topicContent}>
                    <View style={styles.topicHeader}>
                      <View style={styles.topicInfo}>
                        <Text style={styles.topicTitle}>{topic.name}</Text>
                        <Text style={styles.topicDescription}>{topic.description}</Text>
                        <Text style={styles.topicSubtitle}>
                          {stats.remaining} remaining • {stats.reviewed} reviewed
                        </Text>
                      </View>
                      <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
                    </View>
                    {stats.total > 0 && (
                      <View style={styles.progressBarContainer}>
                        <View style={[styles.progressBarFill, { width: `${stats.progress}%` }]} />
                      </View>
                    )}
                  </View>
                </Pressable>
                
                {/* References Button */}
                {topic.hasReferences && (
                  <Pressable
                    style={styles.referencesButton}
                    onPress={() => handleReferencesPress(topic.name)}
                  >
                    <IconSymbol name="book.fill" size={16} color={colors.primary} />
                    <Text style={styles.referencesButtonText}>View References</Text>
                  </Pressable>
                )}
              </View>
            );
          })}
        </View>

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol name="arrow.left" size={20} color={colors.primary} />
            <Text style={styles.backButtonText}>Back to Main Menu</Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  topicWrapper: {
    marginBottom: 12,
  },
  topicCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  topicContent: {
    flex: 1,
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
  topicDescription: {
    fontSize: 13,
    color: colors.textSecondary,
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
    backgroundColor: colors.accent,
    borderRadius: 2,
  },
  referencesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.highlight,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  },
  referencesButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.highlight,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
});
