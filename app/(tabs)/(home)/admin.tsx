
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Alert, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';
import { Flashcard } from '@/types/flashcard';
import * as Haptics from 'expo-haptics';
import { runKeywordStressTest } from '@/data/merckManualKnowledge';
import SystemHealthMonitor from '@/components/SystemHealthMonitor';

export default function AdminScreen() {
  const router = useRouter();
  const { flashcards } = useFlashcards();
  const [selectedCard, setSelectedCard] = useState<Flashcard | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [testResults, setTestResults] = useState<ReturnType<typeof runKeywordStressTest> | null>(null);
  const [showTestDetails, setShowTestDetails] = useState(false);

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

  const handleRunStressTests = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    console.log('Running keyword search stress tests...');
    const results = runKeywordStressTest();
    setTestResults(results);
    setShowTestDetails(false);
    console.log('Test results:', results);
    
    // Show alert with summary
    const successRate = Math.round((results.passed / (results.passed + results.failed)) * 100);
    Alert.alert(
      'Stress Test Complete',
      `Success Rate: ${successRate}%\nPassed: ${results.passed}\nFailed: ${results.failed}`,
      [{ text: 'OK' }]
    );
  };

  const getSystemColor = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('kidney') || lowerQuery.includes('renal') || lowerQuery.includes('nephro') || 
        lowerQuery.includes('acidosis') || lowerQuery.includes('sodium') || lowerQuery.includes('potassium')) {
      return '#4A90E2';
    }
    if (lowerQuery.includes('heart') || lowerQuery.includes('cardiac') || lowerQuery.includes('atrial') || 
        lowerQuery.includes('ventricular') || lowerQuery.includes('hypertension')) {
      return '#E74C3C';
    }
    if (lowerQuery.includes('lung') || lowerQuery.includes('pulmonary') || lowerQuery.includes('pneumo') || 
        lowerQuery.includes('respiratory') || lowerQuery.includes('asthma') || lowerQuery.includes('copd')) {
      return '#27AE60';
    }
    if (lowerQuery.includes('stroke') || lowerQuery.includes('seizure') || lowerQuery.includes('epilep') || 
        lowerQuery.includes('parkinson') || lowerQuery.includes('alzheimer') || lowerQuery.includes('dementia') ||
        lowerQuery.includes('tremor') || lowerQuery.includes('sclerosis') || lowerQuery.includes('migraine') ||
        lowerQuery.includes('neuropathy') || lowerQuery.includes('myasthenia') || lowerQuery.includes('meningitis') ||
        lowerQuery.includes('encephalitis') || lowerQuery.includes('bell') || lowerQuery.includes('trigeminal') ||
        lowerQuery.includes('als') || lowerQuery.includes('hydrocephalus') || lowerQuery.includes('vertigo')) {
      return '#9B59B6';
    }
    if (lowerQuery.includes('diabetes') || lowerQuery.includes('thyroid') || lowerQuery.includes('adrenal') ||
        lowerQuery.includes('pituitary') || lowerQuery.includes('cushing') || lowerQuery.includes('addison')) {
      return '#F39C12';
    }
    if (lowerQuery.includes('anemia') || lowerQuery.includes('leukemia') || lowerQuery.includes('lymphoma') ||
        lowerQuery.includes('myeloma') || lowerQuery.includes('thrombocyt') || lowerQuery.includes('hemophilia') ||
        lowerQuery.includes('sickle') || lowerQuery.includes('thalassemia')) {
      return '#E91E63';
    }
    return colors.textSecondary;
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
          <Text style={styles.subtitle}>Manage Flashcards & Run Tests</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perpetual Learning Engine</Text>
          <SystemHealthMonitor />
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
          <Text style={styles.sectionTitle}>Keyword Search Testing</Text>
          <Text style={styles.sectionDescription}>
            Run stress tests to validate keyword matching accuracy and prevent content bleeding between diseases.
          </Text>
          
          <Pressable style={styles.stressTestButton} onPress={handleRunStressTests}>
            <IconSymbol
              ios_icon_name="play.circle.fill"
              android_material_icon_name="play_circle"
              size={24}
              color="#FFFFFF"
            />
            <Text style={styles.stressTestButtonText}>Run Stress Tests</Text>
          </Pressable>

          {testResults && (
            <View style={styles.testResultsContainer}>
              <View style={styles.testSummaryCard}>
                <View style={styles.testSummaryRow}>
                  <View style={styles.testSummaryItem}>
                    <IconSymbol
                      ios_icon_name="checkmark.circle.fill"
                      android_material_icon_name="check_circle"
                      size={32}
                      color="#27AE60"
                    />
                    <Text style={styles.testSummaryNumber}>{testResults.passed}</Text>
                    <Text style={styles.testSummaryLabel}>Passed</Text>
                  </View>
                  <View style={styles.testSummaryItem}>
                    <IconSymbol
                      ios_icon_name="xmark.circle.fill"
                      android_material_icon_name="cancel"
                      size={32}
                      color="#E74C3C"
                    />
                    <Text style={styles.testSummaryNumber}>{testResults.failed}</Text>
                    <Text style={styles.testSummaryLabel}>Failed</Text>
                  </View>
                  <View style={styles.testSummaryItem}>
                    <IconSymbol
                      ios_icon_name="chart.bar.fill"
                      android_material_icon_name="bar_chart"
                      size={32}
                      color={colors.primary}
                    />
                    <Text style={styles.testSummaryNumber}>
                      {Math.round((testResults.passed / (testResults.passed + testResults.failed)) * 100)}%
                    </Text>
                    <Text style={styles.testSummaryLabel}>Success Rate</Text>
                  </View>
                </View>
              </View>

              <Pressable
                style={styles.detailsToggle}
                onPress={() => setShowTestDetails(!showTestDetails)}
              >
                <Text style={styles.detailsToggleText}>
                  {showTestDetails ? 'Hide' : 'Show'} Detailed Results
                </Text>
                <IconSymbol
                  ios_icon_name={showTestDetails ? 'chevron.up' : 'chevron.down'}
                  android_material_icon_name={showTestDetails ? 'expand_less' : 'expand_more'}
                  size={20}
                  color={colors.primary}
                />
              </Pressable>

              {showTestDetails && (
                <View style={styles.detailsContainer}>
                  {testResults.results.map((result, index) => (
                    <View
                      key={index}
                      style={[
                        styles.testCard,
                        result.passed ? styles.testCardPassed : styles.testCardFailed,
                      ]}
                    >
                      <View style={styles.testHeader}>
                        <IconSymbol
                          ios_icon_name={result.passed ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                          android_material_icon_name={result.passed ? 'check_circle' : 'cancel'}
                          size={20}
                          color={result.passed ? '#27AE60' : '#E74C3C'}
                        />
                        <Text style={[styles.testQuery, { color: getSystemColor(result.query) }]}>
                          &quot;{result.query}&quot;
                        </Text>
                      </View>
                      <View style={styles.testDetails}>
                        <Text style={styles.testLabel}>Expected:</Text>
                        <Text style={styles.testValue}>{result.expectedTopic}</Text>
                      </View>
                      <View style={styles.testDetails}>
                        <Text style={styles.testLabel}>Actual:</Text>
                        <Text style={[
                          styles.testValue,
                          !result.passed && styles.testValueError
                        ]}>
                          {result.actualTopic || 'No match found'}
                        </Text>
                      </View>
                    </View>
                  ))}

                  {testResults.failed > 0 && (
                    <View style={styles.failedSection}>
                      <Text style={styles.failedTitle}>Failed Tests Summary:</Text>
                      {testResults.results
                        .filter(r => !r.passed)
                        .map((result, index) => (
                          <View key={index} style={styles.failedItem}>
                            <Text style={styles.failedQuery}>• &quot;{result.query}&quot;</Text>
                            <Text style={styles.failedDetail}>
                              Expected: {result.expectedTopic}
                            </Text>
                            <Text style={styles.failedDetail}>
                              Got: {result.actualTopic || 'No match'}
                            </Text>
                          </View>
                        ))}
                    </View>
                  )}
                </View>
              )}
            </View>
          )}
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
              <IconSymbol
                ios_icon_name="checkmark.circle.fill"
                android_material_icon_name="check_circle"
                size={20}
                color={colors.card}
              />
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
                    <IconSymbol
                      ios_icon_name="pencil"
                      android_material_icon_name="edit"
                      size={20}
                      color={colors.primary}
                    />
                  </Pressable>
                  <Pressable onPress={() => handleDelete(card)} style={styles.iconButton}>
                    <IconSymbol
                      ios_icon_name="trash"
                      android_material_icon_name="delete"
                      size={20}
                      color={colors.error}
                    />
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
                  <IconSymbol
                    ios_icon_name="bookmark.fill"
                    android_material_icon_name="bookmark"
                    size={16}
                    color={colors.primary}
                  />
                )}
                {card.favorite && (
                  <IconSymbol
                    ios_icon_name="heart.fill"
                    android_material_icon_name="favorite"
                    size={16}
                    color={colors.error}
                  />
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
  sectionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
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
  stressTestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  stressTestButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  testResultsContainer: {
    marginTop: 20,
  },
  testSummaryCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  testSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  testSummaryItem: {
    alignItems: 'center',
    gap: 8,
  },
  testSummaryNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  testSummaryLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  detailsToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: colors.card,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsToggleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  detailsContainer: {
    marginTop: 8,
  },
  testCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
  },
  testCardPassed: {
    borderColor: '#27AE60',
  },
  testCardFailed: {
    borderColor: '#E74C3C',
  },
  testHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  testQuery: {
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  testDetails: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  testLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    width: 80,
  },
  testValue: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  testValueError: {
    color: '#E74C3C',
    fontWeight: '600',
  },
  failedSection: {
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E74C3C',
  },
  failedTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#E74C3C',
    marginBottom: 12,
  },
  failedItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#FFE0E0',
  },
  failedQuery: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  failedDetail: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 16,
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
