
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useQuiz } from '@/hooks/useQuiz';
import * as Haptics from 'expo-haptics';
import { cardiologyFlashcards } from '@/data/cardiologyFlashcards';
import { pulmonaryFlashcards } from '@/data/pulmonaryFlashcards';
import { neurologyFlashcards } from '@/data/neurologyFlashcards';
import { renalFlashcards } from '@/data/renalFlashcards';
import { gastroenterologyFlashcards } from '@/data/gastroenterologyFlashcards';
import { endocrineFlashcards } from '@/data/endocrineFlashcards';
import { hematologyFlashcards } from '@/data/hematologyFlashcards';
import { infectiousDiseaseFlashcards } from '@/data/infectiousDiseaseFlashcards';
import { emergencyMedicineFlashcards } from '@/data/emergencyMedicineFlashcards';
import { urologyFlashcards } from '@/data/urologyFlashcards';
import { getAllGuidelineWebsites } from '@/data/allGuidelineWebsites';

const MEDICAL_SYSTEMS = [
  { 
    name: 'Cardiology', 
    icon: 'favorite', 
    color: '#FF5252', 
    emoji: '❤️',
    description: 'Heart & Circulation'
  },
  { 
    name: 'Pulmonary', 
    icon: 'air', 
    color: '#42A5F5', 
    emoji: '🫁',
    description: 'Lungs & Breathing'
  },
  { 
    name: 'Neurology', 
    icon: 'psychology', 
    color: '#AB47BC', 
    emoji: '🧠',
    description: 'Brain & Nerves'
  },
  { 
    name: 'Renal', 
    icon: 'water-drop', 
    color: '#26C6DA', 
    emoji: '🩺',
    description: 'Kidneys & Fluids'
  },
  { 
    name: 'Gastroenterology', 
    icon: 'restaurant', 
    color: '#66BB6A', 
    emoji: '🍽️',
    description: 'Digestive System'
  },
  { 
    name: 'Endocrine', 
    icon: 'science', 
    color: '#FFA726', 
    emoji: '⚗️',
    description: 'Hormones & Glands'
  },
  { 
    name: 'Hematology', 
    icon: 'bloodtype', 
    color: '#EF5350', 
    emoji: '🩸',
    description: 'Blood & Disorders'
  },
  { 
    name: 'Infectious Disease', 
    icon: 'coronavirus', 
    color: '#FFCA28', 
    emoji: '🦠',
    description: 'Infections & Immunity'
  },
  { 
    name: 'Emergency Medicine', 
    icon: 'local-hospital', 
    color: '#FF7043', 
    emoji: '🚑',
    description: 'Acute Care & Trauma'
  },
  { 
    name: 'Urology', 
    icon: 'medical-services', 
    color: '#5C6BC0', 
    emoji: '💧',
    description: 'Urinary & Reproductive'
  },
];

const QUESTION_COUNTS = [5, 10];

export default function QuizCreatorScreen() {
  const router = useRouter();
  const { generateQuiz, loading } = useQuiz();
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState<number>(10);

  const handleSystemSelect = (systemName: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedSystem(systemName);
    console.log('[QuizCreator] Selected system:', systemName);
  };

  const handleQuestionCountSelect = (count: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setQuestionCount(count);
    console.log('[QuizCreator] Selected question count:', count);
  };

  const getFlashcardsForSystem = (system: string) => {
    const systemMap: Record<string, any[]> = {
      'Cardiology': cardiologyFlashcards,
      'Pulmonary': pulmonaryFlashcards,
      'Neurology': neurologyFlashcards,
      'Renal': renalFlashcards,
      'Gastroenterology': gastroenterologyFlashcards,
      'Endocrine': endocrineFlashcards,
      'Hematology': hematologyFlashcards,
      'Infectious Disease': infectiousDiseaseFlashcards,
      'Emergency Medicine': emergencyMedicineFlashcards,
      'Urology': urologyFlashcards,
    };
    return systemMap[system] || [];
  };

  const buildFlashcardsContext = (system: string): string => {
    const flashcards = getFlashcardsForSystem(system);
    // Reduce context size - limit to 10 cards for 10 questions, 15 for 5 questions
    const maxCards = questionCount === 10 ? 10 : 15;
    const contextParts = flashcards.slice(0, maxCards).map(card => 
      `Topic: ${card.topic}\nQ: ${card.front}\nA: ${card.back.definition}\nClinical Pearl: ${card.back.clinical_pearl}`
    );
    return contextParts.join('\n\n');
  };

  const buildGuidelinesContext = (system: string): string => {
    const guidelines = getAllGuidelineWebsites().filter(g => 
      g.system.toLowerCase() === system.toLowerCase()
    );
    // Truncate guidelines - 150 chars for 10 questions, 250 for 5 questions
    const maxLength = questionCount === 10 ? 150 : 250;
    const contextParts = guidelines.slice(0, 5).map(g => {
      const desc = g.description.length > maxLength 
        ? g.description.substring(0, maxLength) + '...'
        : g.description;
      return `${g.name}: ${desc}`;
    });
    return contextParts.join('\n');
  };

  const handleGenerateQuiz = async () => {
    if (!selectedSystem) {
      Alert.alert('Select a System', 'Please select a medical system to generate quiz questions.');
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    console.log('[QuizCreator] Generating quiz for:', selectedSystem, 'with', questionCount, 'questions');

    try {
      // Build context from flashcards and guidelines with aggressive truncation
      const flashcardsContext = buildFlashcardsContext(selectedSystem);
      const guidelinesContext = buildGuidelinesContext(selectedSystem);
      const coreKnowledgeContext = `Medical System: ${selectedSystem}\nGenerate board-style questions that test clinical application and decision-making.`;

      console.log('[QuizCreator] Context sizes (REDUCED):', {
        flashcards: flashcardsContext.length,
        guidelines: guidelinesContext.length,
        coreKnowledge: coreKnowledgeContext.length,
        total: flashcardsContext.length + guidelinesContext.length + coreKnowledgeContext.length,
      });

      // Call the quiz generation API endpoint
      const result = await generateQuiz({
        medicalSystem: selectedSystem,
        questionCount,
        flashcardsContext,
        coreKnowledgeContext,
        guidelinesContext,
      });

      if (result && result.questions && result.questions.length > 0) {
        console.log('[QuizCreator] Quiz generated successfully:', {
          quizId: result.quizId,
          questionCount: result.questions.length,
          duration: result.duration_ms,
        });
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        
        // Navigate to the quiz taking screen with the generated questions
        // Pass questions directly instead of fetching from database
        router.push({
          pathname: '/quiz-session',
          params: { 
            quizId: result.quizId,
            medicalSystem: result.medicalSystem,
            questionCount: result.questionCount.toString(),
            // Pass questions as JSON string
            questionsJson: JSON.stringify(result.questions),
          }
        });
      } else {
        console.log('[QuizCreator] Invalid result - no questions generated:', result);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        Alert.alert(
          'Generation Failed', 
          'Failed to generate quiz questions. Please try again or select fewer questions.'
        );
      }
    } catch (error: any) {
      console.log('[QuizCreator] Error during quiz generation:', error);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      
      // Provide helpful error message
      let errorMessage = 'Failed to generate quiz. Please try again.';
      if (error.message?.includes('timeout') || error.message?.includes('timed out')) {
        errorMessage = 'Quiz generation timed out. Try generating 5 questions instead of 10, or try again in a moment.';
      } else if (error.message?.includes('network')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'AI Quiz Creator',
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <IconSymbol 
            ios_icon_name="brain.head.profile" 
            android_material_icon_name="psychology" 
            size={64} 
            color={colors.primary} 
          />
          <Text style={styles.title}>AI Quiz Creator</Text>
          <Text style={styles.subtitle}>
            Generate board-style questions powered by OpenAI, linked to flashcards, core knowledge, and clinical guidelines
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Medical System</Text>
          <View style={styles.systemGrid}>
            {MEDICAL_SYSTEMS.map((system, index) => {
              const isSelected = selectedSystem === system.name;
              return (
                <Pressable
                  key={index}
                  style={[
                    styles.systemCard,
                    { backgroundColor: isSelected ? system.color : colors.card },
                    isSelected && styles.systemCardSelected
                  ]}
                  onPress={() => handleSystemSelect(system.name)}
                >
                  <View style={styles.emojiContainer}>
                    <Text style={styles.emoji}>{system.emoji}</Text>
                  </View>
                  <Text style={[
                    styles.systemName,
                    { color: isSelected ? '#FFFFFF' : colors.text }
                  ]}>
                    {system.name}
                  </Text>
                  <Text style={[
                    styles.systemDescription,
                    { color: isSelected ? '#FFFFFF' : colors.textSecondary }
                  ]}>
                    {system.description}
                  </Text>
                  {isSelected && (
                    <View style={styles.selectedBadge}>
                      <IconSymbol 
                        ios_icon_name="checkmark" 
                        android_material_icon_name="check" 
                        size={16} 
                        color="#FFFFFF" 
                      />
                    </View>
                  )}
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Number of Questions</Text>
          <View style={styles.questionCountRow}>
            {QUESTION_COUNTS.map((count, index) => (
              <Pressable
                key={index}
                style={[
                  styles.countButton,
                  questionCount === count && styles.countButtonSelected
                ]}
                onPress={() => handleQuestionCountSelect(count)}
              >
                <Text style={[
                  styles.countText,
                  questionCount === count && styles.countTextSelected
                ]}>
                  {count} Questions
                </Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.recommendationText}>
            💡 Tip: Start with 5 questions for faster generation
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Guardrails & Features</Text>
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <IconSymbol 
                ios_icon_name="checkmark.shield.fill" 
                android_material_icon_name="verified-user" 
                size={20} 
                color={colors.success} 
              />
              <Text style={styles.featureText}>Medical accuracy validation</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol 
                ios_icon_name="book.fill" 
                android_material_icon_name="menu-book" 
                size={20} 
                color={colors.primary} 
              />
              <Text style={styles.featureText}>Linked to clinical guidelines</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol 
                ios_icon_name="doc.text.fill" 
                android_material_icon_name="description" 
                size={20} 
                color={colors.info} 
              />
              <Text style={styles.featureText}>Detailed rationale & references</Text>
            </View>
            <View style={styles.featureItem}>
              <IconSymbol 
                ios_icon_name="graduationcap.fill" 
                android_material_icon_name="school" 
                size={20} 
                color={colors.warning} 
              />
              <Text style={styles.featureText}>Board-style format</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={[
            styles.generateButton,
            (!selectedSystem || loading) && styles.generateButtonDisabled
          ]}
          onPress={handleGenerateQuiz}
          disabled={!selectedSystem || loading}
        >
          {loading ? (
            <>
              <ActivityIndicator color={colors.background} />
              <Text style={styles.generateButtonText}>Generating Quiz...</Text>
            </>
          ) : (
            <>
              <IconSymbol 
                ios_icon_name="sparkles" 
                android_material_icon_name="auto-awesome" 
                size={24} 
                color={colors.background} 
              />
              <Text style={styles.generateButtonText}>Generate Quiz</Text>
            </>
          )}
        </Pressable>

        <View style={styles.infoCard}>
          <IconSymbol 
            ios_icon_name="info.circle.fill" 
            android_material_icon_name="info" 
            size={24} 
            color={colors.info} 
          />
          <Text style={styles.infoText}>
            Your quiz scores will be tracked in your Profile under Achievements → Quiz Master
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  systemGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  systemCard: {
    flex: 1,
    minWidth: '45%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 4,
    borderWidth: 3,
    borderColor: 'transparent',
    position: 'relative',
    minHeight: 140,
    justifyContent: 'center',
  },
  systemCardSelected: {
    borderColor: '#FFFFFF',
    boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.25)',
    elevation: 6,
  },
  emojiContainer: {
    marginBottom: 8,
  },
  emoji: {
    fontSize: 40,
    textAlign: 'center',
  },
  systemName: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center',
  },
  systemDescription: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 4,
    textAlign: 'center',
    opacity: 0.9,
  },
  selectedBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionCountRow: {
    flexDirection: 'row',
    gap: 12,
  },
  countButton: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  countButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.highlight,
  },
  countText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  countTextSelected: {
    color: colors.primary,
  },
  recommendationText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 8,
    fontStyle: 'italic',
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  featureText: {
    fontSize: 15,
    color: colors.text,
    fontWeight: '500',
    flex: 1,
  },
  generateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
    marginBottom: 24,
  },
  generateButtonDisabled: {
    backgroundColor: colors.textSecondary,
    opacity: 0.5,
  },
  generateButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.background,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.highlight,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.info,
  },
  infoText: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
    lineHeight: 20,
  },
});
