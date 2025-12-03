
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Alert, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';
import { Flashcard } from '@/types/flashcard';
import * as Haptics from 'expo-haptics';

export default function AdminScreen() {
  const router = useRouter();
  const { flashcards } = useFlashcards();
  const [selectedCard, setSelectedCard] = useState<Flashcard | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Form state
  const [system, setSystem] = useState('Cardiology');
  const [topic, setTopic] = useState('');
  const [front, setFront] = useState('');
  const [definition, setDefinition] = useState('');
  const [highYield, setHighYield] = useState('');
  const [clinicalPearl, setClinicalPearl] = useState('');
  const [tags, setTags] = useState('');

  const topics = ['Arrhythmias', 'Heart Failure', 'Ischemic Heart Disease', 'Valvular Disease'];

  const resetForm = () => {
    setSystem('Cardiology');
    setTopic('');
    setFront('');
    setDefinition('');
    setHighYield('');
    setClinicalPearl('');
    setTags('');
    setSelectedCard(null);
    setIsEditing(false);
  };

  const handleEdit = (card: Flashcard) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedCard(card);
    setSystem(card.system);
    setTopic(card.topic);
    setFront(card.front);
    setDefinition(card.back.definition);
    setHighYield(card.back.high_yield);
    setClinicalPearl(card.back.clinical_pearl);
    setTags(card.tags.join(', '));
    setIsEditing(true);
  };

  const handleDelete = (card: Flashcard) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Alert.alert(
      'Delete Flashcard',
      'Are you sure you want to delete this flashcard?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            console.log('Delete flashcard:', card.id);
            Alert.alert('Info', 'Delete functionality coming soon');
          },
        },
      ]
    );
  };

  const handleSave = () => {
    if (!topic || !front || !definition) {
      Alert.alert('Error', 'Please fill in all required fields (Topic, Question, Definition)');
      return;
    }

    console.log('Save flashcard:', { system, topic, front, definition, highYield, clinicalPearl, tags });
    Alert.alert('Info', 'Add/Edit functionality coming soon');
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    resetForm();
  };

  const getTopicStats = (topicName: string) => {
    return flashcards.filter(c => c.topic === topicName).length;
  };

  const totalReviews = flashcards.reduce((sum, card) => sum + card.reviewCount, 0);
  const reviewedCards = flashcards.filter(c => c.reviewCount > 0).length;
  const averageReviews = reviewedCards > 0 ? Math.round(totalReviews / reviewedCards) : 0;

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Admin Panel',
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView 
        style={commonStyles.container}
        contentContainerStyle={[
          styles.scrollContent,
          Platform.OS !== 'ios' && styles.scrollContentWithTabBar
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Admin Panel</Text>
          <Text style={styles.subtitle}>Manage Flashcards</Text>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{flashcards.length}</Text>
              <Text style={styles.statLabel}>Total Cards</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{reviewedCards}</Text>
              <Text style={styles.statLabel}>Reviewed</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{averageReviews}</Text>
              <Text style={styles.statLabel}>Avg Reviews</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Topics Overview</Text>
          {topics.map((topicName, index) => (
            <View key={index} style={styles.topicRow}>
              <Text style={styles.topicName}>{topicName}</Text>
              <Text style={styles.topicCount}>{getTopicStats(topicName)} cards</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              {isEditing ? 'Edit Flashcard' : 'Add New Flashcard'}
            </Text>
            {isEditing && (
              <Pressable onPress={resetForm} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            )}
          </View>

          <View style={styles.form}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>System</Text>
              <TextInput
                style={styles.input}
                value={system}
                onChangeText={setSystem}
                placeholder="e.g., Cardiology"
                placeholderTextColor={colors.textSecondary}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Topic *</Text>
              <TextInput
                style={styles.input}
                value={topic}
                onChangeText={setTopic}
                placeholder="e.g., Arrhythmias"
                placeholderTextColor={colors.textSecondary}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Question (Front) *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={front}
                onChangeText={setFront}
                placeholder="Enter the question or keyword"
                placeholderTextColor={colors.textSecondary}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Definition *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={definition}
                onChangeText={setDefinition}
                placeholder="Enter the definition"
                placeholderTextColor={colors.textSecondary}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>High-Yield Summary</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={highYield}
                onChangeText={setHighYield}
                placeholder="Enter high-yield points"
                placeholderTextColor={colors.textSecondary}
                multiline
                numberOfLines={2}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Clinical Pearl</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={clinicalPearl}
                onChangeText={setClinicalPearl}
                placeholder="Enter clinical pearl"
                placeholderTextColor={colors.textSecondary}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Tags (comma-separated)</Text>
              <TextInput
                style={styles.input}
                value={tags}
                onChangeText={setTags}
                placeholder="e.g., ECG, AFib, Arrhythmia"
                placeholderTextColor={colors.textSecondary}
              />
            </View>

            <Pressable onPress={handleSave} style={styles.saveButton}>
              <IconSymbol name="checkmark.circle.fill" size={20} color={colors.card} />
              <Text style={styles.saveButtonText}>
                {isEditing ? 'Update Flashcard' : 'Add Flashcard'}
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Flashcards ({flashcards.length})</Text>
          {flashcards.map((card) => (
            <View key={card.id} style={styles.cardItem}>
              <View style={styles.cardItemHeader}>
                <View style={styles.cardItemBadge}>
                  <Text style={styles.cardItemBadgeText}>{card.topic}</Text>
                </View>
                <View style={styles.cardItemActions}>
                  <Pressable onPress={() => handleEdit(card)} style={styles.iconButton}>
                    <IconSymbol name="pencil" size={20} color={colors.primary} />
                  </Pressable>
                  <Pressable onPress={() => handleDelete(card)} style={styles.iconButton}>
                    <IconSymbol name="trash" size={20} color={colors.error} />
                  </Pressable>
                </View>
              </View>
              <Text style={styles.cardItemQuestion}>{card.front}</Text>
              <Text style={styles.cardItemAnswer} numberOfLines={2}>
                {card.back.definition}
              </Text>
              <View style={styles.cardItemFooter}>
                <Text style={styles.cardItemMeta}>
                  Reviews: {card.reviewCount}
                </Text>
                {card.bookmarked && (
                  <IconSymbol name="bookmark.fill" size={16} color={colors.primary} />
                )}
                {card.favorite && (
                  <IconSymbol name="heart.fill" size={16} color={colors.error} />
                )}
              </View>
            </View>
          ))}
        </View>
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
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  statsCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  cancelButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.error,
  },
  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  topicName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  topicCount: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  form: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: colors.text,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.card,
  },
  cardItem: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  cardItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardItemBadge: {
    backgroundColor: colors.highlight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  cardItemBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  cardItemActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    padding: 8,
  },
  cardItemQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  cardItemAnswer: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  cardItemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardItemMeta: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
