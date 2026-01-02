
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useQuiz } from '@/hooks/useQuiz';
import type { Quiz, QuizQuestion, GeneratedQuestion } from '@/types/quiz';
import * as Haptics from 'expo-haptics';

export default function QuizSessionScreen() {
  const router = useRouter();
  const { quizId, questionsData, medicalSystem, questionCount } = useLocalSearchParams<{ 
    quizId: string;
    questionsData?: string;
    medicalSystem?: string;
    questionCount?: string;
  }>();
  const { getQuiz, getQuizQuestions, submitAnswer, completeQuiz, loading } = useQuiz();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<(QuizQuestion | GeneratedQuestion)[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [showRationale, setShowRationale] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, { answer: 'A' | 'B' | 'C' | 'D', isCorrect: boolean }>>({});
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    if (questionsData) {
      // Load questions from passed data (anonymous mode)
      try {
        const parsedQuestions: GeneratedQuestion[] = JSON.parse(questionsData);
        setQuestions(parsedQuestions);
        setIsAnonymous(true);
        setQuiz({
          id: quizId,
          user_id: 'anonymous',
          medical_system: medicalSystem || 'Unknown',
          question_count: parseInt(questionCount || '0'),
          status: 'in_progress',
          total_questions: parsedQuestions.length,
          created_at: new Date().toISOString(),
        } as Quiz);
        console.log('[QuizSession] Loaded', parsedQuestions.length, 'questions from data');
      } catch (error) {
        console.error('[QuizSession] Error parsing questions:', error);
        Alert.alert('Error', 'Failed to load quiz questions');
        router.back();
      }
    } else if (quizId && quizId !== 'anonymous') {
      // Load from database
      loadQuizData();
    } else {
      Alert.alert('Error', 'No quiz data provided');
      router.back();
    }
  }, [quizId, questionsData]);

  const loadQuizData = async () => {
    console.log('[QuizSession] Loading quiz from database:', quizId);
    const quizData = await getQuiz(quizId);
    const questionsData = await getQuizQuestions(quizId);
    
    if (quizData && questionsData.length > 0) {
      setQuiz(quizData);
      setQuestions(questionsData);
      console.log('[QuizSession] Loaded', questionsData.length, 'questions from database');
    } else {
      Alert.alert('Error', 'Failed to load quiz data');
      router.back();
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  const getQuestionText = (q: QuizQuestion | GeneratedQuestion): string => {
    return 'question_text' in q ? q.question_text : q.questionText;
  };

  const getOptionText = (q: QuizQuestion | GeneratedQuestion, option: 'A' | 'B' | 'C' | 'D'): string => {
    if ('option_a' in q) {
      return q[`option_${option.toLowerCase()}` as keyof QuizQuestion] as string;
    } else {
      return q[`option${option}` as keyof GeneratedQuestion] as string;
    }
  };

  const getCorrectAnswer = (q: QuizQuestion | GeneratedQuestion): 'A' | 'B' | 'C' | 'D' => {
    return 'correct_answer' in q ? q.correct_answer : q.correctAnswer;
  };

  const getRationale = (q: QuizQuestion | GeneratedQuestion): string => {
    return 'rationale' in q ? q.rationale : q.rationale;
  };

  const getReferences = (q: QuizQuestion | GeneratedQuestion): string => {
    return 'reference_text' in q ? q.reference_text : q.references;
  };

  const getQuestionNumber = (q: QuizQuestion | GeneratedQuestion): number => {
    return 'question_number' in q ? q.question_number : q.questionNumber;
  };

  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswerSubmitted) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedAnswer(answer);
    console.log('[QuizSession] Selected answer:', answer);
  };

  const handleSubmitAnswer = async () => {
    if (!selectedAnswer || !currentQuestion) return;

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    console.log('[QuizSession] Submitting answer:', selectedAnswer);

    const correctAnswer = getCorrectAnswer(currentQuestion);
    const isCorrect = selectedAnswer === correctAnswer;

    // Store answer in local state
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: { answer: selectedAnswer, isCorrect }
    }));

    // Submit to database if not anonymous
    if (!isAnonymous && 'id' in currentQuestion) {
      // TODO: Backend Integration - Submit answer to the quiz API endpoint
      await submitAnswer(
        currentQuestion.id,
        selectedAnswer,
        correctAnswer
      );
    }

    setIsAnswerSubmitted(true);
    setShowRationale(true);

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const handleNextQuestion = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowRationale(false);
      setIsAnswerSubmitted(false);
      console.log('[QuizSession] Moving to question', currentQuestionIndex + 2);
    } else {
      handleFinishQuiz();
    }
  };

  const handleFinishQuiz = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    console.log('[QuizSession] Finishing quiz');

    const score = Object.values(userAnswers).filter(a => a.isCorrect).length;

    if (!isAnonymous && quizId !== 'anonymous') {
      // TODO: Backend Integration - Complete quiz and calculate score
      await completeQuiz(quizId);
    }
    
    Alert.alert(
      'Quiz Complete!',
      `You scored ${score} out of ${questions.length}`,
      [
        {
          text: 'OK',
          onPress: () => {
            router.back();
          }
        }
      ]
    );
  };

  if (loading || !quiz || questions.length === 0) {
    return (
      <View style={[commonStyles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading quiz...</Text>
      </View>
    );
  }

  const getOptionStyle = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!isAnswerSubmitted) {
      return selectedAnswer === option ? styles.optionSelected : styles.option;
    }
    
    const correctAnswer = getCorrectAnswer(currentQuestion);
    if (option === correctAnswer) {
      return styles.optionCorrect;
    }
    
    if (selectedAnswer === option && option !== correctAnswer) {
      return styles.optionIncorrect;
    }
    
    return styles.option;
  };

  const getOptionIcon = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!isAnswerSubmitted) {
      return selectedAnswer === option ? 'check-circle' : 'radio-button-unchecked';
    }
    
    const correctAnswer = getCorrectAnswer(currentQuestion);
    if (option === correctAnswer) {
      return 'check-circle';
    }
    
    if (selectedAnswer === option && option !== correctAnswer) {
      return 'cancel';
    }
    
    return 'radio-button-unchecked';
  };

  const getOptionIconColor = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!isAnswerSubmitted) {
      return selectedAnswer === option ? colors.primary : colors.textSecondary;
    }
    
    const correctAnswer = getCorrectAnswer(currentQuestion);
    if (option === correctAnswer) {
      return colors.success;
    }
    
    if (selectedAnswer === option && option !== correctAnswer) {
      return colors.error;
    }
    
    return colors.textSecondary;
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: `Question ${currentQuestionIndex + 1} of ${questions.length}`,
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }]} />
        </View>

        <View style={styles.systemBadge}>
          <Text style={styles.systemBadgeText}>{quiz.medical_system}</Text>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.questionNumber}>Question {getQuestionNumber(currentQuestion)}</Text>
          <Text style={styles.questionText}>{getQuestionText(currentQuestion)}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {(['A', 'B', 'C', 'D'] as const).map((option) => (
            <Pressable
              key={option}
              style={getOptionStyle(option)}
              onPress={() => handleAnswerSelect(option)}
              disabled={isAnswerSubmitted}
            >
              <View style={styles.optionHeader}>
                <IconSymbol 
                  ios_icon_name={getOptionIcon(option) as any}
                  android_material_icon_name={getOptionIcon(option)}
                  size={24} 
                  color={getOptionIconColor(option)} 
                />
                <Text style={styles.optionLabel}>{option}</Text>
              </View>
              <Text style={styles.optionText}>
                {getOptionText(currentQuestion, option)}
              </Text>
            </Pressable>
          ))}
        </View>

        {!isAnswerSubmitted && (
          <Pressable
            style={[styles.submitButton, !selectedAnswer && styles.submitButtonDisabled]}
            onPress={handleSubmitAnswer}
            disabled={!selectedAnswer}
          >
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </Pressable>
        )}

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
            <Text style={styles.rationaleText}>{getRationale(currentQuestion)}</Text>
            
            <View style={styles.referencesSection}>
              <IconSymbol 
                ios_icon_name="book.fill" 
                android_material_icon_name="menu-book" 
                size={20} 
                color={colors.info} 
              />
              <Text style={styles.referencesTitle}>References</Text>
            </View>
            <Text style={styles.referencesText}>{getReferences(currentQuestion)}</Text>

            <Pressable style={styles.nextButton} onPress={handleNextQuestion}>
              <Text style={styles.nextButtonText}>
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Text>
              <IconSymbol 
                ios_icon_name="arrow.right" 
                android_material_icon_name="arrow-forward" 
                size={20} 
                color={colors.background} 
              />
            </Pressable>
          </View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 16,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.highlight,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 24,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  systemBadge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.highlight,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
  },
  systemBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  questionCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 12,
  },
  questionText: {
    fontSize: 17,
    color: colors.text,
    lineHeight: 26,
    fontWeight: '500',
  },
  optionsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  option: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  optionSelected: {
    backgroundColor: colors.highlight,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  optionCorrect: {
    backgroundColor: '#e8f5e9',
    borderColor: colors.success,
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  optionIncorrect: {
    backgroundColor: '#ffebee',
    borderColor: colors.error,
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  optionText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
  },
  submitButtonDisabled: {
    backgroundColor: colors.textSecondary,
    opacity: 0.5,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.background,
  },
  rationaleCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    marginTop: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  rationaleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  rationaleTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  rationaleText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 24,
    marginBottom: 20,
  },
  referencesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  referencesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  referencesText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: 24,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.background,
  },
});
