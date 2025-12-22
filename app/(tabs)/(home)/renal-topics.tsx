
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { RenalIcon } from '@/components/MedicalIcons';
import * as Haptics from 'expo-haptics';
import { useFlashcards } from '@/hooks/useFlashcards';

const RENAL_TOPICS = [
  {
    name: 'Acute Kidney Injury (AKI)',
    description: 'AKI diagnosis, staging, management'
  },
  {
    name: 'Chronic Kidney Disease (CKD)',
    description: 'CKD stages, complications, treatment'
  },
  {
    name: 'Glomerular Diseases',
    description: 'Glomerulonephritis, nephrotic syndrome'
  },
  {
    name: 'Electrolytes & Acid–Base',
    description: 'Electrolyte disorders, acid-base balance'
  },
  {
    name: 'Renal Tubular & Interstitial Disorders',
    description: 'Tubular dysfunction, interstitial nephritis'
  },
  {
    name: 'Renal Stones & Infections',
    description: 'Nephrolithiasis, UTI, pyelonephritis'
  }
];

export default function RenalTopicsScreen() {
  const router = useRouter();
  const { allFlashcards, getTopicStats, updateTrigger } = useFlashcards();

  // Log when component renders and when updateTrigger changes
  useEffect(() => {
    console.log('RenalTopicsScreen rendered, updateTrigger:', updateTrigger);
    console.log('Total flashcards:', allFlashcards.length);
    console.log('Reviewed flashcards:', allFlashcards.filter(c => c.reviewCount > 0).length);
  }, [updateTrigger, allFlashcards]);

  const handleTopicPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to Renal topic:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName, system: 'Renal' }
    });
  };

  const handleReferencesPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to Renal References');
    router.push('/(tabs)/(home)/renal-references');
  };

  const handleGuidelineWebsitesPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to Renal Guideline Websites');
    router.push('/(tabs)/(home)/renal-guideline-websites');
  };

  const handleBackPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Renal',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <RenalIcon size={56} color={colors.accent} />
          <Text style={styles.headerTitle}>Renal</Text>
          <Text style={styles.headerSubtitle}>
            Select a subtopic to begin studying
          </Text>
        </View>

        {/* Topics */}
        <View style={styles.section}>
          {RENAL_TOPICS.map((topic, index) => {
            const stats = getTopicStats('Renal', topic.name);
            
            console.log(`Topic: ${topic.name}`, {
              total: stats.total,
              reviewed: stats.reviewed,
              remaining: stats.remaining,
              progress: stats.progress
            });

            return (
              <Pressable
                key={index}
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
            );
          })}
        </View>

        {/* Reference Files Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reference Materials</Text>
          
          {/* Renal References */}
          <Pressable
            style={styles.referenceCard}
            onPress={handleReferencesPress}
          >
            <View style={styles.referenceContent}>
              <IconSymbol name="book.fill" size={24} color={colors.primary} />
              <View style={styles.referenceInfo}>
                <Text style={styles.referenceTitle}>Renal References</Text>
                <Text style={styles.referenceDescription}>
                  Academic references organized by subtopic (APA format)
                </Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
            </View>
          </Pressable>

          {/* Guideline & Authority Websites */}
          <Pressable
            style={styles.referenceCard}
            onPress={handleGuidelineWebsitesPress}
          >
            <View style={styles.referenceContent}>
              <IconSymbol name="globe" size={24} color={colors.primary} />
              <View style={styles.referenceInfo}>
                <Text style={styles.referenceTitle}>Guideline & Authority Websites</Text>
                <Text style={styles.referenceDescription}>
                  Official renal medicine resources and guidelines
                </Text>
              </View>
              <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
            </View>
          </Pressable>
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
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  topicCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
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
  referenceCard: {
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  referenceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  referenceInfo: {
    flex: 1,
  },
  referenceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  referenceDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
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
