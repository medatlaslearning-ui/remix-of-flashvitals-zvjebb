
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { useFlashcards } from '@/hooks/useFlashcards';

const CARDIOLOGY_TOPICS = [
  {
    name: 'Arrhythmias',
    description: 'AFib, VT, Heart Blocks',
    hasReferences: false
  },
  {
    name: 'Heart Failure',
    description: 'HFrEF, HFpEF, Cardiomyopathy',
    hasReferences: false
  },
  {
    name: 'Ischemic Heart Disease',
    description: 'STEMI, NSTEMI, Angina',
    hasReferences: false
  },
  {
    name: 'Valvular Disease',
    description: 'AS, MR, MS, AR',
    hasReferences: false
  }
];

const REFERENCE_MATERIALS = [
  {
    name: 'Cardiology References',
    description: 'All scholarly and guideline-based references',
    hasReferences: false,
    isReferenceSection: true
  },
  {
    name: 'Guideline & Authority Websites',
    description: 'Official clinical practice guidelines',
    hasReferences: false,
    isReferenceSection: true
  }
];

export default function CardiologyTopicsScreen() {
  const router = useRouter();
  const { allFlashcards, getTopicStats, updateTrigger } = useFlashcards();

  // Log when component renders and when updateTrigger changes
  useEffect(() => {
    console.log('CardiologyTopicsScreen rendered, updateTrigger:', updateTrigger);
    console.log('Total flashcards:', allFlashcards.length);
    console.log('Reviewed flashcards:', allFlashcards.filter(c => c.reviewCount > 0).length);
  }, [updateTrigger, allFlashcards]);

  const handleTopicPress = (topicName: string, isReferenceSection?: boolean) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    // If it's the "Cardiology References" section, navigate to references
    if (topicName === 'Cardiology References') {
      console.log('Navigating to Cardiology References');
      router.push({
        pathname: '/(tabs)/(home)/cardiology-references',
        params: { topic: 'All References', system: 'Cardiology' }
      });
      return;
    }
    
    // If it's the "Guideline & Authority Websites" section, navigate to guideline websites
    if (topicName === 'Guideline & Authority Websites') {
      console.log('Navigating to Cardiology Guideline & Authority Websites');
      router.push('/(tabs)/(home)/cardiology-guideline-websites');
      return;
    }
    
    // Other reference sections don't navigate
    if (isReferenceSection) {
      console.log('Reference section clicked:', topicName);
      return;
    }
    
    console.log('Navigating to Cardiology topic:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName, system: 'Cardiology' }
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
          title: 'Cardiology',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol name="heart.fill" size={48} color={colors.primary} />
          <Text style={styles.headerTitle}>Cardiology</Text>
          <Text style={styles.headerSubtitle}>
            Select a subtopic to begin studying
          </Text>
        </View>

        {/* Study Topics Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Study Topics</Text>
          {CARDIOLOGY_TOPICS.map((topic, index) => {
            const stats = getTopicStats('Cardiology', topic.name);
            
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
                  onPress={() => handleTopicPress(topic.name, topic.isReferenceSection)}
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
              </View>
            );
          })}
        </View>

        {/* Reference Materials Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reference Materials</Text>
          {REFERENCE_MATERIALS.map((topic, index) => (
            <View key={index} style={styles.topicWrapper}>
              <Pressable
                style={[styles.topicCard, styles.referenceTopicCard]}
                onPress={() => handleTopicPress(topic.name, topic.isReferenceSection)}
              >
                <View style={styles.topicContent}>
                  <View style={styles.topicHeader}>
                    <View style={styles.topicInfo}>
                      <Text style={styles.topicTitle}>{topic.name}</Text>
                      <Text style={styles.topicDescription}>{topic.description}</Text>
                      {topic.name === 'Cardiology References' && (
                        <Text style={styles.readyLabel}>Tap to view all references</Text>
                      )}
                      {topic.name === 'Guideline & Authority Websites' && (
                        <Text style={styles.readyLabel}>Tap to view guideline websites</Text>
                      )}
                    </View>
                    {topic.name === 'Cardiology References' && (
                      <IconSymbol name="book.fill" size={20} color={colors.primary} />
                    )}
                    {topic.name === 'Guideline & Authority Websites' && (
                      <IconSymbol name="globe" size={20} color={colors.primary} />
                    )}
                  </View>
                </View>
              </Pressable>
            </View>
          ))}
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
    paddingLeft: 4,
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
  referenceTopicCard: {
    borderWidth: 1,
    borderColor: colors.highlight,
    borderStyle: 'dashed',
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
  readyLabel: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
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
