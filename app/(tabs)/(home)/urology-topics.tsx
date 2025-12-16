
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { useFlashcards } from '@/hooks/useFlashcards';

const UROLOGY_TOPICS = [
  {
    name: 'Lower Urinary Tract Disorders',
    description: 'BPH, Incontinence, Voiding Dysfunction'
  },
  {
    name: 'Upper Urinary Tract Disorders',
    description: 'Hydronephrosis, Obstruction, Reflux'
  },
  {
    name: 'Urologic Infections',
    description: 'UTI, Pyelonephritis, Prostatitis'
  },
  {
    name: 'Urologic Stones',
    description: 'Nephrolithiasis, Ureterolithiasis'
  },
  {
    name: 'Urologic Emergencies',
    description: 'Testicular Torsion, Priapism, Obstruction'
  }
];

export default function UrologyTopicsScreen() {
  const router = useRouter();
  const { allFlashcards, getTopicStats, updateTrigger } = useFlashcards();

  useEffect(() => {
    console.log('UrologyTopicsScreen rendered, updateTrigger:', updateTrigger);
    console.log('Total flashcards:', allFlashcards.length);
    console.log('Reviewed flashcards:', allFlashcards.filter(c => c.reviewCount > 0).length);
  }, [updateTrigger, allFlashcards.length]);

  const handleTopicPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to Urology topic:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName, system: 'Urology' }
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
          title: 'Urology',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol 
            ios_icon_name="cross.case.fill" 
            android_material_icon_name="medical_services"
            size={48} 
            color={colors.secondary} 
          />
          <Text style={styles.headerTitle}>Urology</Text>
          <Text style={styles.headerSubtitle}>
            Select a subtopic to begin studying
          </Text>
        </View>

        {/* Topics */}
        <View style={styles.section}>
          {UROLOGY_TOPICS.map((topic, index) => {
            const stats = getTopicStats('Urology', topic.name);
            
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
                    <IconSymbol 
                      ios_icon_name="chevron.right" 
                      android_material_icon_name="chevron_right"
                      size={20} 
                      color={colors.textSecondary} 
                    />
                  </View>
                  <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBarFill, { width: `${stats.progress}%` }]} />
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* References Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>References</Text>
          <View style={styles.referencesCard}>
            <Text style={styles.referencesText}>
              References for Urology topics will be added here.
            </Text>
            <Text style={styles.referencesSubtext}>
              This section will include clinical guidelines, research papers, and educational resources.
            </Text>
          </View>
        </View>

        {/* Back Button */}
        <View style={styles.section}>
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <IconSymbol 
              ios_icon_name="arrow.left" 
              android_material_icon_name="arrow_back"
              size={20} 
              color={colors.primary} 
            />
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
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  referencesCard: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 12,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  referencesText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  referencesSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
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
