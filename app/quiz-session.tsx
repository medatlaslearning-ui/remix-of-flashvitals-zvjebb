
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Modal, ActivityIndicator, Alert } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useQuiz, QuizAnswer } from '@/hooks/useQuiz';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import { useProgressReport } from '@/hooks/useProgressReport';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

// Interface for questions passed from quiz generation
interface GeneratedQuestion {
  questionNumber: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  rationale: string;
  references: string;
}

export default function QuizSessionScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const { completeQuiz, loading: quizLoading } = useQuiz();
  const { saveQuizResult } = useProgressReport(user?.id || null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizResult, setQuizResult] = useState<any>(null);
  const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState(false);

  // Load questions from params (passed directly from quiz generation)
  useEffect(() => {
    try {
      console.log('[QuizSession] Loading questions from params');
      
      if (!params.questionsJson) {
        console.error('[QuizSession] No questionsJson in params');
        Alert.alert('Error', 'No questions found. Please generate a new quiz.');
        router.back();
        return;
      }

      const parsedQuestions = JSON.parse(params.questionsJson as string);
      
      if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
        console.error('[QuizSession] Invalid questions data:', parsedQuestions);
        Alert.alert('Error', 'Invalid quiz data. Please generate a new quiz.');
        router.back();
        return;
      }

      console.log('[QuizSession] Loaded', parsedQuestions.length, 'questions from params');
      setQuestions(parsedQuestions);
      setLoading(false);
    } catch (error) {
      console.error('[QuizSession] Error parsing questions:', error);
      Alert.alert('Error', 'Failed to load quiz questions. Please try again.');
      router.back();
    }
  }, [params.questionsJson, router]);

  const handleAnswer = (selectedAnswer: 'A' | 'B' | 'C' | 'D') => {
    const question = questions[currentIndex];
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    // Create answer object with question number as ID (since we don't have DB IDs yet)
    const answer: QuizAnswer = {
      questionId: `q${question.questionNumber}`,
      selectedAnswer,
      isCorrect,
    };
    
    setAnswers([...answers, answer]);
    setHasAnsweredCurrent(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    console.log('[QuizSession] Answer recorded:', {
      questionNumber: question.questionNumber,
      selected: selectedAnswer,
      correct: question.correctAnswer,
      isCorrect,
    });
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setHasAnsweredCurrent(false);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      console.log('[QuizSession] Moving to next question:', currentIndex + 2);
    }
  };

  const handleFinishQuiz = async () => {
    try {
      console.log('[QuizSession] Finishing quiz');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      
      // Calculate results locally
      const score = answers.filter(a => a.isCorrect).length;
      const totalQuestions = questions.length;
      const percentage = (score / totalQuestions) * 100;

      const result = {
        quizId: params.quizId as string || 'local',
        score,
        totalQuestions,
        percentage,
        completedAt: new Date(),
        answers,
      };

      console.log('[QuizSession] Quiz completed:', result);
      setQuizResult(result);
      setShowResults(true);

      // Save quiz result to Progress Report (Supabase)
      if (user) {
        try {
          const quizType = totalQuestions === 5 ? '5-question' : '10-question';
          await saveQuizResult({
            quiz_type: quizType,
            score,
            total_questions: totalQuestions,
            medical_topic: (params.topic as string) || 'General',
            medical_system: (params.medicalSystem as string) || 'General',
          });
          console.log('[QuizSession] ✅ Quiz result saved to Progress Report (Supabase)');
        } catch (progressError) {
          console.error('[QuizSession] ❌ Error saving to Progress Report:', progressError);
          // Don't show error to user - local results are already calculated
        }
      } else {
        console.log('[QuizSession] ⚠️ User not authenticated - skipping Progress Report save');
      }

      // If user is authenticated and we have a quizId, save to database
      if (user && params.quizId && params.quizId !== 'anonymous') {
        console.log('[QuizSession] Saving quiz results to database...');
        try {
          await completeQuiz(params.quizId as string, answers);
          console.log('[QuizSession] ✅ Quiz results saved to database');
        } catch (dbError) {
          console.error('[QuizSession] ❌ Error saving to database:', dbError);
          // Don't show error to user - local results are already calculated
        }
      } else {
        console.log('[QuizSession] Skipping database save (anonymous or no quizId)');
      }
    } catch (error) {
      console.error('[QuizSession] Error finishing quiz:', error);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      Alert.alert('Error', 'Failed to complete quiz. Please try again.');
    }
  };

  const handleViewProgressReport = () => {
    setShowResults(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/progress-report');
  };

  const handleClose = () => {
    setShowResults(false);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading quiz...</Text>
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <IconSymbol 
          ios_icon_name="exclamationmark.triangle.fill" 
          android_material_icon_name="warning" 
          size={64} 
          color={colors.warning} 
        />
        <Text style={styles.errorText}>No questions available</Text>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;
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
            <Text style={styles.question}>{currentQuestion?.questionText}</Text>
          </View>

          <View style={styles.optionsContainer}>
            {[
              { letter: 'A', text: currentQuestion?.optionA },
              { letter: 'B', text: currentQuestion?.optionB },
              { letter: 'C', text: currentQuestion?.optionC },
              { letter: 'D', text: currentQuestion?.optionD },
            ].map((option) => {
              const isSelected = hasAnsweredCurrent && answers[currentIndex]?.selectedAnswer === option.letter;
              const isCorrect = option.letter === currentQuestion?.correctAnswer;
              
              let optionStyle = styles.option;
              if (hasAnsweredCurrent) {
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
                  onPress={() => !hasAnsweredCurrent && handleAnswer(option.letter as 'A' | 'B' | 'C' | 'D')}
                  disabled={hasAnsweredCurrent}
                >
                  <View style={styles.optionContent}>
                    <View style={styles.optionLetter}>
                      <Text style={styles.optionLetterText}>{option.letter}</Text>
                    </View>
                    <Text style={styles.optionText}>{option.text}</Text>
                  </View>
                  {hasAnsweredCurrent && isCorrect && (
                    <IconSymbol 
                      ios_icon_name="checkmark.circle.fill" 
                      android_material_icon_name="check-circle" 
                      size={24} 
                      color={colors.success} 
                    />
                  )}
                  {hasAnsweredCurrent && isSelected && !isCorrect && (
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

          {hasAnsweredCurrent && (
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
              {currentQuestion?.references && (
                <View style={styles.referencesContainer}>
                  <Text style={styles.referencesLabel}>References:</Text>
                  <Text style={styles.referencesText}>{currentQuestion.references}</Text>
                </View>
              )}
            </View>
          )}

          {hasAnsweredCurrent && !isLastQuestion && (
            <Pressable
              style={styles.nextButton}
              onPress={handleNextQuestion}
            >
              <Text style={styles.nextButtonText}>Next Question</Text>
              <IconSymbol 
                ios_icon_name="arrow.right.circle.fill" 
                android_material_icon_name="arrow-forward" 
                size={24} 
                color="#fff" 
              />
            </Pressable>
          )}

          {hasAnsweredCurrent && isLastQuestion && (
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
              
              {user && (
                <Text style={styles.savedMessage}>
                  ✅ Results saved to Progress Report
                </Text>
              )}
              
              <Pressable style={styles.viewStatsButton} onPress={handleViewProgressReport}>
                <IconSymbol 
                  ios_icon_name="chart.bar.fill" 
                  android_material_icon_name="bar-chart" 
                  size={20} 
                  color="#fff" 
                />
                <Text style={styles.viewStatsButtonText}>View Progress Report</Text>
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
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background, padding: 20 },
  loadingText: { fontSize: 16, color: colors.textSecondary, marginTop: 16 },
  errorText: { fontSize: 18, color: colors.text, marginTop: 16, marginBottom: 24, textAlign: 'center' },
  backButton: { backgroundColor: colors.primary, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
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
  nextButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8, padding: 18, backgroundColor: colors.primary, borderRadius: 12, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', elevation: 5 },
  nextButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  finishButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, marginTop: 8, padding: 18, backgroundColor: colors.primary, borderRadius: 12, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)', elevation: 5 },
  finishButtonDisabled: { opacity: 0.6 },
  finishButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', padding: 20 },
  resultsModal: { backgroundColor: colors.background, borderRadius: 20, padding: 32, width: '100%', maxWidth: 400, alignItems: 'center', boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)', elevation: 8 },
  resultsTitle: { fontSize: 24, fontWeight: '700', color: colors.text, marginTop: 16, marginBottom: 8 },
  resultsScore: { fontSize: 48, fontWeight: '700', color: colors.primary, marginBottom: 4 },
  resultsPercentage: { fontSize: 32, fontWeight: '600', color: colors.textSecondary, marginBottom: 16 },
  resultsMessage: { fontSize: 16, color: colors.text, textAlign: 'center', marginBottom: 12, lineHeight: 24 },
  savedMessage: { fontSize: 14, color: colors.success, textAlign: 'center', marginBottom: 24, fontWeight: '600' },
  viewStatsButton: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 16, backgroundColor: colors.primary, borderRadius: 12, width: '100%', justifyContent: 'center', marginBottom: 12, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)', elevation: 4 },
  viewStatsButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  closeButton: { padding: 12, width: '100%', alignItems: 'center' },
  closeButtonText: { color: colors.textSecondary, fontSize: 16, fontWeight: '600' },
});
