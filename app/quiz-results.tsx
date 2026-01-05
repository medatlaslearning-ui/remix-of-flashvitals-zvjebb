
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useQuiz } from '@/hooks/useQuiz';
import type { Quiz, QuizQuestion } from '@/types/quiz';
import * as Haptics from 'expo-haptics';

export default function QuizResultsScreen() {
  const router = useRouter();
  const { quizId } = useLocalSearchParams<{ quizId: string }>();
  const { getQuiz, getQuizQuestions, loading } = useQuiz();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);

  const loadQuizData = useCallback(async () => {
    console.log('[QuizResults] Loading quiz:', quizId);
    const quizData = await getQuiz(quizId);
    const questionsData = await getQuizQuestions(quizId);
    
    if (quizData && questionsData.length > 0) {
      setQuiz(quizData);
      setQuestions(questionsData);
      console.log('[QuizResults] Loaded results');
    }
  }, [quizId, getQuiz, getQuizQuestions]);

  useEffect(() => {
    if (quizId) {
      loadQuizData();
    }
  }, [quizId, loadQuizData]);

  const handleBackToHome = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/(home)');
  };

  const handleViewAchievements = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push('/(tabs)/profile');
  };

  if (loading || !quiz || questions.length === 0) {
    return (
      <View style={[commonStyles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Loading results...</Text>
      </View>
    );
  }

  const score = quiz.score || 0;
  const totalQuestions = quiz.total_questions || questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const correctQuestions = questions.filter(q => q.is_correct === true);
  const incorrectQuestions = questions.filter(q => q.is_correct === false);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return 'Outstanding! 🎉';
    if (percentage >= 80) return 'Excellent Work! 🌟';
    if (percentage >= 70) return 'Good Job! 👍';
    if (percentage >= 60) return 'Keep Practicing! 💪';
    return 'Review and Try Again! 📚';
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return colors.success;
    if (percentage >= 60) return colors.warning;
    return colors.error;
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Quiz Results',
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={[styles.scoreCircle, { borderColor: getPerformanceColor() }]}>
            <Text style={[styles.scorePercentage, { color: getPerformanceColor() }]}>
              {percentage}%
            </Text>
            <Text style={styles.scoreLabel}>{score}/{totalQuestions}</Text>
          </View>
          <Text style={styles.performanceMessage}>{getPerformanceMessage()}</Text>
        </View>

        <View style={styles.statsCard}>
          <View style={styles.statRow}>
            <View style={styles.statItem}>
              <IconSymbol name="checkmark.circle.fill" size={32} color={colors.success} />
              <Text style={styles.statValue}>{correctQuestions.length}</Text>
              <Text style={styles.statLabel}>Correct</Text>
            </View>
            <View style={styles.statItem}>
              <IconSymbol name="xmark.circle.fill" size={32} color={colors.error} />
              <Text style={styles.statValue}>{incorrectQuestions.length}</Text>
              <Text style={styles.statLabel}>Incorrect</Text>
            </View>
            <View style={styles.statItem}>
              <IconSymbol name="chart.bar.fill" size={32} color={colors.primary} />
              <Text style={styles.statValue}>{percentage}%</Text>
              <Text style={styles.statLabel}>Score</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Question Breakdown</Text>
          {questions.map((question, index) => (
            <View key={question.id} style={styles.questionItem}>
              <View style={styles.questionHeader}>
                <Text style={styles.questionNumber}>Q{question.question_number}</Text>
                <IconSymbol 
                  name={question.is_correct ? 'checkmark.circle.fill' : 'xmark.circle.fill'} 
                  size={24} 
                  color={question.is_correct ? colors.success : colors.error} 
                />
              </View>
              <Text style={styles.questionPreview} numberOfLines={2}>
                {question.question_text}
              </Text>
              <View style={styles.answerRow}>
                <Text style={styles.answerLabel}>Your answer:</Text>
                <Text style={[
                  styles.answerValue,
                  { color: question.is_correct ? colors.success : colors.error }
                ]}>
                  {question.user_answer}
                </Text>
                {!question.is_correct && (
                  <>
                    <Text style={styles.answerLabel}>Correct:</Text>
                    <Text style={[styles.answerValue, { color: colors.success }]}>
                      {question.correct_answer}
                    </Text>
                  </>
                )}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.achievementCard}>
          <IconSymbol name="trophy.fill" size={48} color={colors.warning} />
          <Text style={styles.achievementTitle}>Quiz Master Achievement</Text>
          <Text style={styles.achievementText}>
            Your quiz scores are tracked in your Profile under Achievements
          </Text>
          <Pressable style={styles.achievementButton} onPress={handleViewAchievements}>
            <Text style={styles.achievementButtonText}>View Achievements</Text>
            <IconSymbol name="arrow.right" size={20} color={colors.background} />
          </Pressable>
        </View>

        <Pressable style={styles.homeButton} onPress={handleBackToHome}>
          <IconSymbol name="house.fill" size={20} color={colors.primary} />
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </Pressable>
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
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  scoreCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    marginBottom: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  scorePercentage: {
    fontSize: 48,
    fontWeight: '700',
  },
  scoreLabel: {
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 4,
  },
  performanceMessage: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
  },
  statsCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  questionItem: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  questionPreview: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 8,
  },
  answerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  answerLabel: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  answerValue: {
    fontSize: 14,
    fontWeight: '700',
  },
  achievementCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  achievementTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  achievementText: {
    fontSize: 15,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  achievementButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    elevation: 4,
  },
  achievementButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: colors.highlight,
    borderRadius: 12,
    padding: 18,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
});
