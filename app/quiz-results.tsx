
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { IconSymbol } from '@/components/IconSymbol';
import { useQuiz } from '@/hooks/useQuiz';
import type { Quiz, QuizQuestion } from '@/types/quiz';
import * as Haptics from 'expo-haptics';

export default function QuizResultsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { getQuiz, getQuizQuestions } = useQuiz();
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  const quizId = params.quizId as string;
  const score = parseInt(params.score as string) || 0;
  const totalQuestions = parseInt(params.totalQuestions as string) || 0;
  const percentage = parseFloat(params.percentage as string) || 0;
  const medicalSystem = params.medicalSystem as string;

  const loadQuizData = useCallback(async () => {
    try {
      setLoading(true);
      console.log('[QuizResults] Loading quiz data for:', quizId);

      const [quizData, questionsData] = await Promise.all([
        getQuiz(quizId),
        getQuizQuestions(quizId),
      ]);

      setQuiz(quizData);
      setQuestions(questionsData);
      console.log('[QuizResults] Quiz data loaded:', {
        quiz: quizData,
        questionCount: questionsData.length,
      });
    } catch (error) {
      console.error('[QuizResults] Error loading quiz data:', error);
    } finally {
      setLoading(false);
    }
  }, [quizId, getQuiz, getQuizQuestions]);

  useEffect(() => {
    loadQuizData();
  }, [loadQuizData]);

  const getPerformanceLevel = () => {
    if (percentage >= 90) return { label: 'Excellent!', color: colors.success, icon: 'star' };
    if (percentage >= 80) return { label: 'Great Job!', color: colors.primary, icon: 'thumb-up' };
    if (percentage >= 70) return { label: 'Good Work!', color: colors.info, icon: 'check-circle' };
    if (percentage >= 60) return { label: 'Keep Practicing', color: colors.warning, icon: 'trending-up' };
    return { label: 'Review Needed', color: colors.error, icon: 'school' };
  };

  const performance = getPerformanceLevel();

  const handleReviewQuestions = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // Navigate to a review screen (to be implemented)
    console.log('[QuizResults] Review questions feature coming soon');
  };

  const handleRetakeQuiz = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.replace('/quiz');
  };

  const handleGoHome = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.replace('/(tabs)/(home)');
  };

  if (loading) {
    return (
      <>
        <Stack.Screen options={{ title: 'Quiz Results' }} />
        <View style={[commonStyles.container, styles.loadingContainer]}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Loading results...</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Quiz Results',
          headerBackTitle: 'Back',
          headerLeft: () => null, // Prevent going back to quiz session
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.scrollContent}>
        {/* Performance Header */}
        <View style={styles.performanceCard}>
          <IconSymbol
            ios_icon_name={performance.icon as any}
            android_material_icon_name={performance.icon}
            size={64}
            color={performance.color}
          />
          <Text style={[styles.performanceLabel, { color: performance.color }]}>
            {performance.label}
          </Text>
          <Text style={styles.percentageText}>{percentage.toFixed(1)}%</Text>
        </View>

        {/* Score Card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreRow}>
            <View style={styles.scoreItem}>
              <IconSymbol
                ios_icon_name="checkmark.circle.fill"
                android_material_icon_name="check-circle"
                size={32}
                color={colors.success}
              />
              <Text style={styles.scoreValue}>{score}</Text>
              <Text style={styles.scoreLabel}>Correct</Text>
            </View>
            <View style={styles.scoreDivider} />
            <View style={styles.scoreItem}>
              <IconSymbol
                ios_icon_name="xmark.circle.fill"
                android_material_icon_name="cancel"
                size={32}
                color={colors.error}
              />
              <Text style={styles.scoreValue}>{totalQuestions - score}</Text>
              <Text style={styles.scoreLabel}>Incorrect</Text>
            </View>
            <View style={styles.scoreDivider} />
            <View style={styles.scoreItem}>
              <IconSymbol
                ios_icon_name="doc.text.fill"
                android_material_icon_name="description"
                size={32}
                color={colors.primary}
              />
              <Text style={styles.scoreValue}>{totalQuestions}</Text>
              <Text style={styles.scoreLabel}>Total</Text>
            </View>
          </View>
        </View>

        {/* System Info */}
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <IconSymbol
              ios_icon_name="heart.text.square.fill"
              android_material_icon_name="favorite"
              size={24}
              color={colors.primary}
            />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Medical System</Text>
              <Text style={styles.infoValue}>{medicalSystem}</Text>
            </View>
          </View>
          {quiz?.topic && (
            <View style={styles.infoRow}>
              <IconSymbol
                ios_icon_name="tag.fill"
                android_material_icon_name="label"
                size={24}
                color={colors.info}
              />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Topic</Text>
                <Text style={styles.infoValue}>{quiz.topic}</Text>
              </View>
            </View>
          )}
          <View style={styles.infoRow}>
            <IconSymbol
              ios_icon_name="clock.fill"
              android_material_icon_name="access-time"
              size={24}
              color={colors.warning}
            />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Completed</Text>
              <Text style={styles.infoValue}>
                {quiz?.completed_at
                  ? new Date(quiz.completed_at).toLocaleString()
                  : 'Just now'}
              </Text>
            </View>
          </View>
        </View>

        {/* Question Breakdown */}
        {questions.length > 0 && (
          <View style={styles.breakdownCard}>
            <Text style={styles.breakdownTitle}>Question Breakdown</Text>
            {questions.map((question, index) => {
              const isCorrect = question.is_correct;
              return (
                <View key={question.id} style={styles.questionItem}>
                  <View style={styles.questionHeader}>
                    <Text style={styles.questionNumber}>Q{index + 1}</Text>
                    <IconSymbol
                      ios_icon_name={isCorrect ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                      android_material_icon_name={isCorrect ? 'check-circle' : 'cancel'}
                      size={24}
                      color={isCorrect ? colors.success : colors.error}
                    />
                  </View>
                  <Text style={styles.questionPreview} numberOfLines={2}>
                    {question.question_text}
                  </Text>
                  {!isCorrect && question.user_answer && (
                    <View style={styles.answerInfo}>
                      <Text style={styles.answerLabel}>
                        Your answer: <Text style={styles.answerWrong}>{question.user_answer}</Text>
                      </Text>
                      <Text style={styles.answerLabel}>
                        Correct: <Text style={styles.answerCorrect}>{question.correct_answer}</Text>
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Pressable style={styles.reviewButton} onPress={handleReviewQuestions}>
            <IconSymbol
              ios_icon_name="book.fill"
              android_material_icon_name="menu-book"
              size={20}
              color={colors.background}
            />
            <Text style={styles.reviewButtonText}>Review Questions</Text>
          </Pressable>

          <Pressable style={styles.retakeButton} onPress={handleRetakeQuiz}>
            <IconSymbol
              ios_icon_name="arrow.clockwise"
              android_material_icon_name="refresh"
              size={20}
              color={colors.background}
            />
            <Text style={styles.retakeButtonText}>New Quiz</Text>
          </Pressable>

          <Pressable style={styles.homeButton} onPress={handleGoHome}>
            <IconSymbol
              ios_icon_name="house.fill"
              android_material_icon_name="home"
              size={20}
              color={colors.primary}
            />
            <Text style={styles.homeButtonText}>Go Home</Text>
          </Pressable>
        </View>

        {/* Achievement Notice */}
        {percentage === 100 && (
          <View style={styles.achievementCard}>
            <IconSymbol
              ios_icon_name="trophy.fill"
              android_material_icon_name="emoji-events"
              size={32}
              color={colors.warning}
            />
            <Text style={styles.achievementText}>
              🎉 Perfect Score! Achievement unlocked!
            </Text>
          </View>
        )}
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
  performanceCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  performanceLabel: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 8,
  },
  percentageText: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.text,
  },
  scoreCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scoreItem: {
    alignItems: 'center',
    flex: 1,
  },
  scoreDivider: {
    width: 1,
    height: 60,
    backgroundColor: colors.border,
  },
  scoreValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
  },
  scoreLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    gap: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  breakdownCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  breakdownTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 16,
  },
  questionItem: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  questionNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  questionPreview: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 8,
  },
  answerInfo: {
    gap: 4,
  },
  answerLabel: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  answerWrong: {
    fontWeight: '600',
    color: colors.error,
  },
  answerCorrect: {
    fontWeight: '600',
    color: colors.success,
  },
  actionButtons: {
    gap: 12,
    marginBottom: 24,
  },
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
    elevation: 5,
  },
  reviewButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
  retakeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.success,
    borderRadius: 12,
    padding: 16,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  retakeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.background,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: colors.primary,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff9c4',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: colors.warning,
  },
  achievementText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});
