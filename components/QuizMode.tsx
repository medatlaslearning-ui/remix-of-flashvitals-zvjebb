
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { Flashcard, QuizQuestion } from '@/types/flashcard';
import { colors } from '@/styles/commonStyles';
import { IconSymbol } from './IconSymbol';
import * as Haptics from 'expo-haptics';

interface QuizModeProps {
  flashcards: Flashcard[];
  onComplete: (score: number, incorrectCards: string[]) => void;
  onExit: () => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({ flashcards, onComplete, onExit }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectCardIds, setIncorrectCardIds] = useState<string[]>([]);

  useEffect(() => {
    generateQuestions();
  }, [flashcards]);

  const generateQuestions = () => {
    const generatedQuestions: QuizQuestion[] = flashcards.map((card) => {
      const isTrueFalse = Math.random() > 0.5;
      
      if (isTrueFalse) {
        return {
          id: `q-${card.id}`,
          flashcardId: card.id,
          question: card.front,
          type: 'true-false' as const,
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: card.back.definition,
        };
      } else {
        // Generate multiple choice
        const correctAnswer = card.back.definition;
        const wrongAnswers = generateWrongAnswers(card, flashcards);
        const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
        
        return {
          id: `q-${card.id}`,
          flashcardId: card.id,
          question: card.front,
          type: 'multiple-choice' as const,
          options: allOptions,
          correctAnswer: correctAnswer,
          explanation: `${card.back.definition}\n\nHigh-Yield: ${card.back.high_yield}`,
        };
      }
    });

    setQuestions(generatedQuestions);
  };

  const generateWrongAnswers = (currentCard: Flashcard, allCards: Flashcard[]): string[] => {
    const otherCards = allCards.filter(c => c.id !== currentCard.id);
    const wrongAnswers: string[] = [];
    
    // Get 3 random wrong answers from other cards
    const shuffled = otherCards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < Math.min(3, shuffled.length); i++) {
      wrongAnswers.push(shuffled[i].back.definition);
    }

    return wrongAnswers;
  };

  const handleAnswerSelect = (answer: string) => {
    if (showExplanation) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      Alert.alert('Please select an answer', 'Choose an option before submitting.');
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setScore(score + 1);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setIncorrectCardIds([...incorrectCardIds, currentQuestion.flashcardId]);
    }

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // Quiz complete
      onComplete(score, incorrectCardIds);
    }
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Generating quiz...</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onExit} style={styles.exitButton}>
          <IconSymbol name="xmark" size={24} color={colors.text} />
        </Pressable>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {currentQuestionIndex + 1} / {questions.length}
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{score} correct</Text>
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View style={styles.questionCard}>
          <Text style={styles.questionType}>
            {currentQuestion.type === 'true-false' ? 'True or False' : 'Multiple Choice'}
          </Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option === currentQuestion.correctAnswer;
            
            let optionStyle = styles.option;
            if (showExplanation) {
              if (isCorrectOption) {
                optionStyle = styles.optionCorrect;
              } else if (isSelected && !isCorrect) {
                optionStyle = styles.optionIncorrect;
              }
            } else if (isSelected) {
              optionStyle = styles.optionSelected;
            }

            return (
              <Pressable
                key={index}
                onPress={() => handleAnswerSelect(option)}
                style={[styles.optionButton, optionStyle]}
                disabled={showExplanation}
              >
                <View style={styles.optionContent}>
                  <View style={styles.optionNumber}>
                    <Text style={styles.optionNumberText}>{String.fromCharCode(65 + index)}</Text>
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                </View>
                {showExplanation && isCorrectOption && (
                  <IconSymbol name="checkmark.circle.fill" size={24} color={colors.success} />
                )}
                {showExplanation && isSelected && !isCorrect && (
                  <IconSymbol name="xmark.circle.fill" size={24} color={colors.error} />
                )}
              </Pressable>
            );
          })}
        </View>

        {showExplanation && (
          <View style={[styles.explanationCard, isCorrect ? styles.explanationCorrect : styles.explanationIncorrect]}>
            <View style={styles.explanationHeader}>
              <IconSymbol
                name={isCorrect ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                size={32}
                color={isCorrect ? colors.success : colors.error}
              />
              <Text style={styles.explanationTitle}>
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </Text>
            </View>
            <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {!showExplanation ? (
          <Pressable onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </Pressable>
        ) : (
          <Pressable onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.card,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  exitButton: {
    padding: 8,
  },
  progressContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.highlight,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  scoreContainer: {
    padding: 8,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.success,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 40,
  },
  questionCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  questionType: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  option: {
    borderColor: colors.highlight,
  },
  optionSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.highlight,
  },
  optionCorrect: {
    borderColor: colors.success,
    backgroundColor: '#E8F5E9',
  },
  optionIncorrect: {
    borderColor: colors.error,
    backgroundColor: '#FFEBEE',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  optionNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  optionNumberText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.card,
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
    lineHeight: 22,
  },
  explanationCard: {
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
    borderWidth: 2,
  },
  explanationCorrect: {
    backgroundColor: '#E8F5E9',
    borderColor: colors.success,
  },
  explanationIncorrect: {
    backgroundColor: '#FFEBEE',
    borderColor: colors.error,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  explanationTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 12,
  },
  explanationText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  footer: {
    padding: 20,
    backgroundColor: colors.card,
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.card,
  },
  nextButton: {
    backgroundColor: colors.secondary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.card,
  },
});
