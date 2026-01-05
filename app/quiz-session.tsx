
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Modal, ActivityIndicator, Alert } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useQuiz, QuizAnswer } from '@/hooks/useQuiz';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';
import type { QuizQuestion } from '@/types/quiz';

export default function QuizSessionScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const { completeQuiz, getQuizQuestions, loading: quizLoading } = useQuiz();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<any>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  // Wrap getQuizQuestions in useCallback to fix dependency warning
  const loadQuestions = useCallback(async () => {
    if (!params.quizId) {
      Alert.alert('Error', 'Quiz ID not found');
      router.back();
      return;
    }

    try {
      console.log('[QuizSession] Loading questions for quiz:', params.quizId);
      const fetchedQuestions = await getQuizQuestions(params.quizId as string);
      
      if (fetchedQuestions.length === 0) {
        Alert.alert('Error', 'No questions found for this quiz');
        router.back();
        return;
      }

      setQuestions(fetchedQuestions);
      setLoading(false);
      console.log('[QuizSession] Loaded', fetchedQuestions.length, 'questions');
    } catch (error) {
      console.error('[QuizSession] Error loading questions:', error);
      Alert.alert('Error', 'Failed to load quiz questions');
      router.back();
    }
  }, [params.quizId, getQuizQuestions, router]);

  // Fetch questions from database
  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const handleAnswer = (selectedAnswer: 'A' | 'B' | 'C' | 'D') => {
    const question = questions[currentIndex];
    const isCorrect = selectedAnswer === question.correct_answer;
    
    // Create answer object with the actual question ID from the database
    const answer: QuizAnswer = {
      questionId: question.id,
      selectedAnswer,
      isCorrect,
    };
    
    setAnswers([...answers, answer]);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    console.log('[QuizSession] Answer recorded:', {
      questionId: question.id,
      questionNumber: question.question_number,
      selected: selectedAnswer,
      correct: question.correct_answer,
      isCorrect,
    });

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 500);
  };

  const handleFinishQuiz = async () => {
    if (!user || !params.quizId) {
      Alert.alert('Error', 'Unable to save quiz results. Please try again.');
      return;
    }

    try {
      console.log('[QuizSession] Finishing quiz:', params.quizId);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      
      const result = await completeQuiz(params.quizId as string, answers);
      
      if (result) {
        console.log('[QuizSession] Quiz completed successfully:', result);
        setQuizResult(result);
        setShowResults(true);
      } else {
        throw new Error('Failed to save quiz results');
      }
    } catch (error) {
      console.error('[QuizSession] Error finishing quiz:', error);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Error', 'Failed to save quiz results. Please try again.');
    }
  };

  const handleViewQuizMaster = () => {
    setShowResults(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/profile');
  };

  const handleClose = () => {
    setShowResults(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)');
  };

  if (questions.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading quiz...</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
  const hasAnswered = answers.length > currentIndex;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <>
      <Stack.Screen
        options={{
          title: `Quiz - ${params.medicalSystem || 'Medical'}`,
          headerBackTitle: 'Back',
        }}
      />
      <View style={styles.container}>
        {/* Progress Header */}
        <View style={styles.progressHeader}>
          <Text style={styles.progressText}>
            Question {currentIndex + 1} of {questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.questionCard}>
            <Text style={styles.system}>{params.medicalSystem || 'General'}</Text>
            <Text style={styles.question}>{currentQuestion?.question_text}</Text>
          </View>

          <View style={styles.optionsContainer}>
            {[
              { letter: 'A', text: currentQuestion?.option_a },
              { letter: 'B', text: currentQuestion?.option_b },
              { letter: 'C', text: currentQuestion?.option_c },
              { letter: 'D', text: currentQuestion?.option_d },
            ].map((option) => {
              const isSelected = hasAnswered && answers[currentIndex].selectedAnswer === option.letter;
              const isCorrect = option.letter === currentQuestion?.correct_answer;
              
              let optionStyle = styles.option;
              if (hasAnswered) {
                if (isCorrect) {
                  optionStyle = styles.optionCorrect;
                } else if (isSelected) {
                  optionStyle = styles.optionIncorrect;
                }
              } else if (isSelected) {
                optionStyle = styles.optionSelected;
              }

              return (
                <Pressable
                  key={option.letter}
                  style={[styles.optionButton, optionStyle]}
                  onPress={() => !hasAnswered && handleAnswer(option.letter as 'A' | 'B' | 'C' | 'D')}
                  disabled={hasAnswered}
                >
                  <View style={styles.optionContent}>
                    <View style={styles.optionLetter}>
                      <Text style={styles.optionLetterText}>{option.letter}</Text>
                    </View>
                    <Text style={styles.optionText}>{option.text}</Text>
                  </View>
                  {hasAnswered && isCorrect && (
                    <IconSymbol 
                      ios_icon_name="checkmark.circle.fill" 
                      android_material_icon_name="check-circle" 
                      size={24} 
                      color={colors.success} 
                    />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <IconSymbol 
                      ios_icon_name="xmark.circle.fill" 
                      android_material_icon_name="cancel" 
                      size={24} 
                      color={colors.error} 
                    />
                  )}
                </Pressable>
              );
            })}
          </View>

          {hasAnswered && (
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
              <Text style={styles.rationaleText}>{currentQuestion?.rationale}</Text>
              {currentQuestion?.reference_text && (
                <View style={styles.referencesContainer}>
                  <Text style={styles.referencesLabel}>References:</Text>
                  <Text style={styles.referencesText}>{currentQuestion.reference_text}</Text>
                </View>
              )}
            </View>
          )}

          {hasAnswered && isLastQuestion && (
            <Pressable
              style={[styles.finishButton, quizLoading && styles.finishButtonDisabled]}
              onPress={handleFinishQuiz}
              disabled={quizLoading}
            >
              {quizLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <>
                  <IconSymbol 
                    ios_icon_name="checkmark.circle.fill" 
                    android_material_icon_name="check-circle" 
                    size={24} 
                    color="#fff" 
                  />
                  <Text style={styles.finishButtonText}>Finish Quiz</Text>
                </>
              )}
            </Pressable>
          )}
        </ScrollView>

        {/* Results Modal */}
        <Modal visible={showResults} animationType="slide" transparent>
          <View style={styles.modalOverlay}>
            <View style={styles.resultsModal}>
              <IconSymbol 
                ios_icon_name="trophy.fill" 
                android_material_icon_name="emoji-events" 
                size={64} 
                color={colors.warning} 
              />
              <Text style={styles.resultsTitle}>Quiz Complete!</Text>
              <Text style={styles.resultsScore}>
                {quizResult?.score} / {quizResult?.totalQuestions}
              </Text>
              <Text style={styles.resultsPercentage}>
                {quizResult?.percentage.toFixed(0)}%
              </Text>
              
              <Text style={styles.resultsMessage}>
                {quizResult?.percentage >= 80 
                  ? 'Excellent work! 🎉' 
                  : quizResult?.percentage >= 60 
                  ? 'Good job! Keep practicing! 💪' 
                  : 'Keep studying! You&apos;ll improve! 📚'}
              </Text>
              
              <Pressable style={styles.viewStatsButton} onPress={handleViewQuizMaster}>
                <IconSymbol 
                  ios_icon_name="chart.bar.fill" 
                  android_material_icon_name="bar-chart" 
                  size={20} 
                  color="#fff" 
                />
                <Text style={styles.viewStatsButtonText}>View Quiz Master Stats</Text>
              </Pressable>
              
              <Pressable style={styles.closeButton} onPress={handleClose}>
                <Text style={styles.closeButtonText}>Back to Home</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
  loadingText: { fontSize: 16, color: colors.textSecondary, marginTop: 16 },
  progressHeader: { padding: 16, backgroundColor: colors.card, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', elevation: 2 },
  progressText: { fontSize: 14, fontWeight: '600', color: colors.text, marginBottom: 8, textAlign: 'center' },
  progressBar: { height: 6, backgroundColor: colors.highlight, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: colors.primary, borderRadius: 3 },
  content: { padding: 20, paddingBottom: 40 },
  questionCard: { backgroundColor: colors.card, borderRadius: 12, padding: 20, marginBottom: 24, boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)', elevation: 3 },
  system: { fontSize: 12, fontWeight: '700', color: colors.primary, textTransform: 'uppercase', marginBottom: 12 },
  question: { fontSize: 18, fontWeight: '600', color: colors.text, lineHeight: 26 },
  optionsContainer: { gap: 12, marginBottom: 24 },
  optionButton: { borderRadius: 12, padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 2 },
  option: { backgroundColor: colors.card, borderColor: colors.highlight, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', elevation: 2 },
  optionSelected: { backgroundColor: colors.highlight, borderColor: colors.primary },
  optionCorrect: { backgroundColor: '#E8F5E9', borderColor: colors.success },
  optionIncorrect: { backgroundColor: '#FFEBEE', borderColor: colors.error },
  optionContent: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  optionLetter: { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  optionLetterText: { fontSize: 16, fontWeight: '700', color: '#fff' },
  optionText: { fontSize: 15, color: colors.text, flex: 1, lineHeight: 22 },
  rationaleCard: { backgroundColor: colors.highlight, borderRadius: 12, padding: 20, marginBottom: 24, borderWidth: 1, borderColor: colors.primary },
  rationaleHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  rationaleTitle: { fontSize: 18, fontWeight: '700', color: colors.text, marginLeft: 8 },
  rationaleText: { fontSize: 15, color: colors.text, lineHeight: 22, marginBottom: 12 },
  referencesContainer: { marginTop: 8, paddingTop: 12, borderTopWidth: 1, borderTopColor: colors.card },
  referencesLabel: { fontSize: 13, fontWeight: '700', color: colors.textSecondary, marginBottom: 4 },
  referencesText: { fontSize: 13, color: colors.textSecondary, lineHeight: 20 },
  finishButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8, padding: 18, backgroundColor: colors.primary, borderRadius: 12, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', elevation: 5 },
  finishButtonDisabled: { opacity: 0.6 },
  finishButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  resultsModal: { backgroundColor: colors.background, borderRadius: 20, padding: 32, width: '100%', maxWidth: 400, alignItems: 'center', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)', elevation: 8 },
  resultsTitle: { fontSize: 24, fontWeight: '700', color: colors.text, marginTop: 16, marginBottom: 8 },
  resultsScore: { fontSize: 48, fontWeight: '700', color: colors.primary, marginBottom: 4 },
  resultsPercentage: { fontSize: 32, fontWeight: '600', color: colors.textSecondary, marginBottom: 16 },
  resultsMessage: { fontSize: 16, color: colors.text, textAlign: 'center', marginBottom: 24, lineHeight: 24 },
  viewStatsButton: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, backgroundColor: colors.primary, borderRadius: 12, width: '100%', justifyContent: 'center', marginBottom: 12, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)', elevation: 4 },
  viewStatsButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  closeButton: { padding: 12, width: '100%', alignItems: 'center' },
  closeButtonText: { color: colors.textSecondary, fontSize: 16, fontWeight: '600' },
});
