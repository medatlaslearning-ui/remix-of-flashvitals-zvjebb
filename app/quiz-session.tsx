
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useQuiz, type QuizAnswer } from '@/hooks/useQuiz';
import type { QuizQuestion, GeneratedQuestion } from '@/types/quiz';
import * as Haptics from 'expo-haptics';

export default function QuizSessionScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { getQuizQuestions, completeQuiz, loading } = useQuiz();
  
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [showRationale, setShowRationale] = useState(false);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);

  const quizId = params.quizId as string;
  const medicalSystem = params.medicalSystem as string;
  const questionCount = parseInt(params.questionCount as string) || 10;

  const loadQuizQuestions = useCallback(async () => {
    try {
      setIsLoadingQuestions(true);
      console.log('[QuizSession] Loading questions for quiz:', quizId);

      // Check if questions were passed as params (from quiz generation)
      if (params.questionsData) {
        const generatedQuestions: GeneratedQuestion[] = JSON.parse(params.questionsData as string);
        console.log('[QuizSession] Using generated questions from params:', generatedQuestions.length);
        
        // Convert GeneratedQuestion to QuizQuestion format
        const convertedQuestions: QuizQuestion[] = generatedQuestions.map((q, index) => ({
          id: `${quizId}-${index}`,
          quiz_id: quizId,
          question_number: q.questionNumber,
          question_text: q.questionText,
          option_a: q.optionA,
          option_b: q.optionB,
          option_c: q.optionC,
          option_d: q.optionD,
          correct_answer: q.correctAnswer,
          rationale: q.rationale,
          reference_text: q.references,
          created_at: new Date().toISOString(),
        }));
        
        setQuestions(convertedQuestions);
      } else {
        // Load from database
        const dbQuestions = await getQuizQuestions(quizId);
        console.log('[QuizSession] Loaded questions from database:', dbQuestions.length);
        setQuestions(dbQuestions);
      }
    } catch (error) {
      console.error('[QuizSession] Error loading questions:', error);
      Alert.alert('Error', 'Failed to load quiz questions. Please try again.');
      router.back();
    } finally {
      setIsLoadingQuestions(false);
    }
  }, [quizId, params.questionsData, getQuizQuestions, router]);

  useEffect(() => {
    loadQuizQuestions();
  }, [loadQuizQuestions]);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = currentQuestion ? selectedAnswers[currentQuestion.id] : undefined;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const allQuestionsAnswered = questions.every(q => selectedAnswers[q.id]);

  const handleSelectAnswer = (answer: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQuestion) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
    setShowRationale(false);
  };

  const handleShowRationale = () => {
    if (!selectedAnswer) {
      Alert.alert('Select an Answer', 'Please select an answer before viewing the rationale.');
      return;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setShowRationale(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setCurrentQuestionIndex(prev => prev + 1);
      setShowRationale(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setCurrentQuestionIndex(prev => prev - 1);
      setShowRationale(false);
    }
  };

  const handleSubmitQuiz = async () => {
    if (!allQuestionsAnswered) {
      Alert.alert(
        'Incomplete Quiz',
        'Please answer all questions before submitting.',
        [{ text: 'OK' }]
      );
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    // Build answers array
    const answers: QuizAnswer[] = questions.map(q => ({
      questionId: q.id,
      selectedAnswer: selectedAnswers[q.id],
      isCorrect: selectedAnswers[q.id] === q.correct_answer,
    }));

    console.log('[QuizSession] Submitting quiz with answers:', answers);

    const result = await completeQuiz(quizId, answers);

    if (result) {
      console.log('[QuizSession] Quiz completed successfully:', result);
      router.replace({
        pathname: '/quiz-results',
        params: {
          quizId,
          score: result.score.toString(),
          totalQuestions: result.totalQuestions.toString(),
          percentage: result.percentage.toFixed(1),
          medicalSystem,
        },
      });
    } else {
      Alert.alert('Error', 'Failed to submit quiz. Please try again.');
    }
  };

  if (isLoadingQuestions) {
    return (
      <>
        <Stack.Screen options={{ title: 'Loading Quiz...' }} />
        <View style={[commonStyles.container, styles.loadingContainer]}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Loading quiz questions...</Text>
        </View>
      </>
    );
  }

  if (questions.length === 0) {
    return (
      <>
        <Stack.Screen options={{ title: 'Quiz Error' }} />
        <View style={[commonStyles.container, styles.errorContainer]}>
          <IconSymbol
            ios_icon_name="exclamationmark.triangle.fill"
            android_material_icon_name="error"
            size={64}
            color={colors.error}
          />
          <Text style={styles.errorText}>No questions found for this quiz.</Text>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: `${medicalSystem} Quiz`,
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.scrollContent}>
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
        </View>

        {/* Question Card */}
        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>Question {currentQuestion.question_number}</Text>
          <Text style={styles.questionText}>{currentQuestion.question_text}</Text>
        </View>

        {/* Answer Options */}
        <View style={styles.optionsContainer}>
          {(['A', 'B', 'C', 'D'] as const).map(option => {
            const optionText = currentQuestion[`option_${option.toLowerCase()}` as keyof QuizQuestion] as string;
            const isSelected = selectedAnswer === option;
            const isCorrect = currentQuestion.correct_answer === option;
            const showCorrectness = showRationale;

            return (
              <Pressable
                key={option}
                style={[
                  styles.optionButton,
                  isSelected && styles.optionButtonSelected,
                  showCorrectness && isCorrect && styles.optionButtonCorrect,
                  showCorrectness && isSelected && !isCorrect && styles.optionButtonIncorrect,
                ]}
                onPress={() => handleSelectAnswer(option)}
                disabled={showRationale}
              >
                <View style={styles.optionHeader}>
                  <View
                    style={[
                      styles.optionCircle,
                      isSelected && styles.optionCircleSelected,
                      showCorrectness && isCorrect && styles.optionCircleCorrect,
                      showCorrectness && isSelected && !isCorrect && styles.optionCircleIncorrect,
                    ]}
                  >
                    <Text
                      style={[
                        styles.optionLetter,
                        isSelected && styles.optionLetterSelected,
                        showCorrectness && (isCorrect || (isSelected && !isCorrect)) && styles.optionLetterSelected,
                      ]}
                    >
                      {option}
                    </Text>
                  </View>
                  {showCorrectness && isCorrect && (
                    <IconSymbol
                      ios_icon_name="checkmark.circle.fill"
                      android_material_icon_name="check-circle"
                      size={24}
                      color={colors.success}
                    />
                  )}
                  {showCorrectness && isSelected && !isCorrect && (
                    <IconSymbol
                      ios_icon_name="xmark.circle.fill"
                      android_material_icon_name="cancel"
                      size={24}
                      color={colors.error}
                    />
                  )}
                </View>
                <Text style={styles.optionText}>{optionText}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* Rationale Section */}
        {showRationale && (
          <View style={styles.rationaleCard}>
            <View style={styles.rationaleHeader}>
              <IconSymbol
                ios_icon_name="lightbulb.fill"
                android_material_icon_name="lightbulb"
                size={24}
                color={colors.warning}
              />
              <Text style={styles.rationaleTitle}>Rationale</Text>
            </View>
            <Text style={styles.rationaleText}>{currentQuestion.rationale}</Text>
            {currentQuestion.reference_text && (
              <View style={styles.referenceContainer}>
                <IconSymbol
                  ios_icon_name="book.fill"
                  android_material_icon_name="menu-book"
                  size={20}
                  color={colors.info}
                />
                <Text style={styles.referenceText}>{currentQuestion.reference_text}</Text>
              </View>
            )}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          {!showRationale && selectedAnswer && (
            <Pressable style={styles.rationaleButton} onPress={handleShowRationale}>
              <IconSymbol
                ios_icon_name="lightbulb"
                android_material_icon_name="lightbulb"
                size={20}
                color={colors.background}
              />
              <Text style={styles.rationaleButtonText}>Show Rationale</Text>
            </Pressable>
          )}
        </View>

        {/* Navigation Buttons */}
        <View style={styles.navigationButtons}>
          <Pressable
            style={[styles.navButton, currentQuestionIndex === 0 && styles.navButtonDisabled]}
            onPress={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <IconSymbol
              ios_icon_name="chevron.left"
              android_material_icon_name="arrow-back"
              size={20}
              color={currentQuestionIndex === 0 ? colors.textSecondary : colors.primary}
            />
            <Text
              style={[
                styles.navButtonText,
                currentQuestionIndex === 0 && styles.navButtonTextDisabled,
              ]}
            >
              Previous
            </Text>
          </Pressable>

          {!isLastQuestion ? (
            <Pressable style={styles.navButton} onPress={handleNextQuestion}>
              <Text style={styles.navButtonText}>Next</Text>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name="arrow-forward"
                size={20}
                color={colors.primary}
              />
            </Pressable>
          ) : (
            <Pressable
              style={[styles.submitButton, !allQuestionsAnswered && styles.submitButtonDisabled]}
              onPress={handleSubmitQuiz}
              disabled={!allQuestionsAnswered || loading}
            >
              {loading ? (
                <ActivityIndicator color={colors.background} />
              ) : (
                <>
                  <IconSymbol
                    ios_icon_name="checkmark.circle.fill"
                    android_material_icon_name="check-circle"
                    size={20}
                    color={colors.background}
                  />
                  <Text style={styles.submitButtonText}>Submit Quiz</Text>
                </>
              )}
            </Pressable>
          )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: colors.textSecondary,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    marginTop: 16,
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
  },
  backButton: {
    marginTop: 24,
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.card,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  progressText: {
    marginTop: 8,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  questionCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 12,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 26,
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  optionButton: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  optionButtonSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.highlight,
  },
  optionButtonCorrect: {
    borderColor: colors.success,
    backgroundColor: '#e8f5e9',
  },
  optionButtonIncorrect: {
    borderColor: colors.error,
    backgroundColor: '#ffebee',
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  optionCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionCircleSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionCircleCorrect: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  optionCircleIncorrect: {
    backgroundColor: colors.error,
    borderColor: colors.error,
  },
  optionLetter: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  optionLetterSelected: {
    color: colors.background,
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
  },
  rationaleCard: {
    backgroundColor: colors.highlight,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.warning,
  },
  rationaleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  rationaleTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  rationaleText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 12,
  },
  referenceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  referenceText: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  actionButtons: {
    marginBottom: 24,
  },
  rationaleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.warning,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  rationaleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.background,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  navButtonTextDisabled: {
    color: colors.textSecondary,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.success,
    borderRadius: 12,
    padding: 16,
    flex: 1,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
  },
  submitButtonDisabled: {
    backgroundColor: colors.textSecondary,
    opacity: 0.5,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
});
