
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { QuizMode } from '@/components/QuizMode';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';

export default function QuizScreen() {
  const router = useRouter();
  const { flashcards } = useFlashcards();
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectCardIds, setIncorrectCardIds] = useState<string[]>([]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setQuizComplete(false);
  };

  const handleQuizComplete = (finalScore: number, incorrectIds: string[]) => {
    setScore(finalScore);
    setIncorrectCardIds(incorrectIds);
    setQuizComplete(true);
    setQuizStarted(false);
  };

  const handleRetakeQuiz = () => {
    setQuizStarted(true);
    setQuizComplete(false);
    setScore(0);
    setIncorrectCardIds([]);
  };

  const handleReviewIncorrect = () => {
    const incorrectCards = flashcards.filter(c => incorrectCardIds.includes(c.id));
    if (incorrectCards.length > 0) {
      router.push('/(tabs)/(home)/flashcards');
    }
  };

  const handleExit = () => {
    Alert.alert(
      'Exit Quiz',
      'Are you sure you want to exit? Your progress will be lost.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Exit',
          style: 'destructive',
          onPress: () => {
            setQuizStarted(false);
            router.back();
          },
        },
      ]
    );
  };

  if (quizStarted) {
    return (
      <QuizMode
        flashcards={flashcards}
        onComplete={handleQuizComplete}
        onExit={handleExit}
      />
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / flashcards.length) * 100);
    const passed = percentage >= 70;

    return (
      <>
        <Stack.Screen
          options={{
            title: 'Quiz Results',
            headerBackTitle: 'Back',
          }}
        />
        <View style={[commonStyles.container, styles.resultsContainer]}>
          <View style={styles.resultsCard}>
            <View style={[styles.resultIcon, passed ? styles.resultIconPass : styles.resultIconFail]}>
              <IconSymbol
                name={passed ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                size={64}
                color={passed ? colors.success : colors.error}
              />
            </View>
            
            <Text style={styles.resultsTitle}>
              {passed ? 'Great Job!' : 'Keep Practicing!'}
            </Text>
            
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{score}</Text>
              <Text style={styles.scoreDivider}>/</Text>
              <Text style={styles.totalText}>{flashcards.length}</Text>
            </View>
            
            <Text style={styles.percentageText}>{percentage}%</Text>
            
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{score}</Text>
                <Text style={styles.statLabel}>Correct</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: colors.error }]}>
                  {flashcards.length - score}
                </Text>
                <Text style={styles.statLabel}>Incorrect</Text>
              </View>
            </View>

            {incorrectCardIds.length > 0 && (
              <View style={styles.reviewNote}>
                <IconSymbol name="info.circle" size={20} color={colors.primary} />
                <Text style={styles.reviewNoteText}>
                  Review {incorrectCardIds.length} cards to improve your score
                </Text>
              </View>
            )}
          </View>

          <View style={styles.actionsContainer}>
            {incorrectCardIds.length > 0 && (
              <Pressable onPress={handleReviewIncorrect} style={styles.reviewButton}>
                <IconSymbol name="book.fill" size={20} color={colors.card} />
                <Text style={styles.reviewButtonText}>Review Incorrect Cards</Text>
              </Pressable>
            )}
            
            <Pressable onPress={handleRetakeQuiz} style={styles.retakeButton}>
              <IconSymbol name="arrow.clockwise" size={20} color={colors.card} />
              <Text style={styles.retakeButtonText}>Retake Quiz</Text>
            </Pressable>
            
            <Pressable onPress={() => router.back()} style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Back to Home</Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Quiz Mode',
          headerBackTitle: 'Back',
        }}
      />
      <View style={[commonStyles.container, styles.startContainer]}>
        <View style={styles.startCard}>
          <View style={styles.quizIcon}>
            <IconSymbol name="questionmark.circle.fill" size={80} color={colors.primary} />
          </View>
          
          <Text style={styles.startTitle}>Ready for a Quiz?</Text>
          <Text style={styles.startDescription}>
            Test your knowledge with {flashcards.length} questions covering all cardiology topics.
          </Text>

          <View style={styles.featuresContainer}>
            <View style={styles.feature}>
              <IconSymbol name="checkmark.circle" size={24} color={colors.success} />
              <Text style={styles.featureText}>Multiple choice & true/false questions</Text>
            </View>
            <View style={styles.feature}>
              <IconSymbol name="arrow.clockwise" size={24} color={colors.secondary} />
              <Text style={styles.featureText}>Review incorrect answers</Text>
            </View>
            <View style={styles.feature}>
              <IconSymbol name="chart.bar.fill" size={24} color={colors.primary} />
              <Text style={styles.featureText}>Track your progress</Text>
            </View>
          </View>

          <Pressable onPress={handleStartQuiz} style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Quiz</Text>
            <IconSymbol name="arrow.right" size={20} color={colors.card} />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  startContainer: {
    justifyContent: 'center',
    padding: 20,
  },
  startCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  quizIcon: {
    marginBottom: 24,
  },
  startTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  startDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  featuresContainer: {
    width: '100%',
    gap: 16,
    marginBottom: 32,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  featureText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  startButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    elevation: 3,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.card,
  },
  resultsContainer: {
    justifyContent: 'center',
    padding: 20,
  },
  resultsCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 5,
  },
  resultIcon: {
    marginBottom: 24,
  },
  resultIconPass: {},
  resultIconFail: {},
  resultsTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 24,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  scoreText: {
    fontSize: 64,
    fontWeight: '800',
    color: colors.primary,
  },
  scoreDivider: {
    fontSize: 48,
    fontWeight: '300',
    color: colors.textSecondary,
    marginHorizontal: 8,
  },
  totalText: {
    fontSize: 48,
    fontWeight: '300',
    color: colors.textSecondary,
  },
  percentageText: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 32,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.success,
  },
  statLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  reviewNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.highlight,
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  reviewNoteText: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  actionsContainer: {
    gap: 12,
  },
  reviewButton: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  reviewButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.card,
  },
  retakeButton: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  retakeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.card,
  },
  homeButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
});
