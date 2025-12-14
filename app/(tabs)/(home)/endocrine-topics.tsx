
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import { useFlashcards } from '@/hooks/useFlashcards';

const ENDOCRINE_TOPICS = [
  {
    name: 'Diabetes Mellitus',
    description: 'Type 1, Type 2, DKA, HHS'
  },
  {
    name: 'Thyroid Disorders',
    description: 'Hyper/hypothyroidism, thyroid nodules'
  },
  {
    name: 'Adrenal Disorders',
    description: 'Cushing, Addison, adrenal insufficiency'
  },
  {
    name: 'Pituitary Disorders',
    description: 'Prolactinoma, acromegaly, DI, SIADH'
  },
  {
    name: 'Calcium & Bone Metabolism',
    description: 'Hypercalcemia, osteoporosis, PTH disorders'
  },
  {
    name: 'Reproductive Endocrinology',
    description: 'PCOS, hypogonadism, reproductive hormones'
  },
  {
    name: 'Endocrine Tumors',
    description: 'Pituitary adenomas, MEN syndromes'
  }
];

export default function EndocrinologyTopicsScreen() {
  const router = useRouter();
  const { allFlashcards } = useFlashcards();

  const handleTopicPress = (topicName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    console.log('Navigating to Endocrine topic:', topicName);
    router.push({
      pathname: '/(tabs)/(home)/flashcards',
      params: { topic: topicName, system: 'Endocrine' }
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
          title: 'Endocrine',
          headerLargeTitle: true,
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <IconSymbol name="waveform.path.ecg" size={48} color={colors.secondary} />
          <Text style={styles.headerTitle}>Endocrine</Text>
          <Text style={styles.headerSubtitle}>
            Select a subtopic to begin studying
          </Text>
        </View>

        {/* Topics */}
        <View style={styles.section}>
          {ENDOCRINE_TOPICS.map((topic, index) => {
            const topicCards = allFlashcards.filter(
              card => card.system === 'Endocrine' && card.topic === topic.name
            );
            const reviewedCount = topicCards.filter(card => card.reviewCount > 0).length;
            const progress = topicCards.length > 0 ? (reviewedCount / topicCards.length) * 100 : 0;

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
                        {topicCards.length} cards • {reviewedCount} reviewed
                      </Text>
                    </View>
                    <IconSymbol name="chevron.right" size={20} color={colors.textSecondary} />
                  </View>
                  {topicCards.length > 0 && (
                    <View style={styles.progressBarContainer}>
                      <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
                    </View>
                  )}
                </View>
              </Pressable>
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
    backgroundColor: colors.secondary,
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
