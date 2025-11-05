
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { FlashcardComponent } from '@/components/FlashcardComponent';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { IconSymbol } from '@/components/IconSymbol';
import { Flashcard } from '@/types/flashcard';
import * as Haptics from 'expo-haptics';

export default function FlashcardsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const topic = params.topic as string | undefined;
  
  const {
    flashcards: allFlashcards,
    toggleBookmark,
    toggleFavorite,
    incrementReviewCount,
    getFlashcardsByTopic,
  } = useFlashcards();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [incorrectCards, setIncorrectCards] = useState<string[]>([]);

  useEffect(() => {
    let cards = topic ? getFlashcardsByTopic(topic) : allFlashcards;
    
    // Shuffle cards for variety
    cards = [...cards].sort(() => Math.random() - 0.5);
    
    setFlashcards(cards);
  }, [topic, allFlashcards]);

  useEffect(() => {
    if (flashcards.length > 0) {
      incrementReviewCount(flashcards[currentIndex].id);
    }
  }, [currentIndex, flashcards]);

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Check if there are incorrect cards to review
      if (incorrectCards.length > 0) {
        Alert.alert(
          'Review Complete',
          `You have ${incorrectCards.length} cards to review again. Would you like to review them now?`,
          [
            { text: 'Exit', onPress: () => router.back() },
            {
              text: 'Review Again',
              onPress: () => {
                const cardsToReview = flashcards.filter(c => incorrectCards.includes(c.id));
                setFlashcards(cardsToReview);
                setCurrentIndex(0);
                setIncorrectCards([]);
              },
            },
          ]
        );
      } else {
        Alert.alert('Great Job!', 'You have reviewed all cards.', [
          { text: 'OK', onPress: () => router.back() },
        ]);
      }
    }
  };

  const handlePrevious = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMarkDifficult = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const currentCard = flashcards[currentIndex];
    if (!incorrectCards.includes(currentCard.id)) {
      setIncorrectCards([...incorrectCards, currentCard.id]);
      Alert.alert('Marked for Review', 'This card will be shown again at the end.');
    }
  };

  if (flashcards.length === 0) {
    return (
      <>
        <Stack.Screen
          options={{
            title: topic || 'All Cards',
            headerBackTitle: 'Back',
          }}
        />
        <View style={[commonStyles.container, commonStyles.center]}>
          <Text style={styles.emptyText}>No flashcards available</Text>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </>
    );
  }

  const currentCard = flashcards[currentIndex];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  return (
    <>
      <Stack.Screen
        options={{
          title: topic || 'All Cards',
          headerBackTitle: 'Back',
        }}
      />
      <View style={commonStyles.container}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Card {currentIndex + 1} of {flashcards.length}
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.cardContainer}>
          <FlashcardComponent
            flashcard={currentCard}
            onBookmark={() => toggleBookmark(currentCard.id)}
            onFavorite={() => toggleFavorite(currentCard.id)}
          />
        </View>

        <View style={styles.controls}>
          <Pressable
            onPress={handlePrevious}
            style={[styles.controlButton, currentIndex === 0 && styles.controlButtonDisabled]}
            disabled={currentIndex === 0}
          >
            <IconSymbol
              name="chevron.left"
              size={24}
              color={currentIndex === 0 ? colors.textSecondary : colors.primary}
            />
            <Text style={[styles.controlButtonText, currentIndex === 0 && styles.controlButtonTextDisabled]}>
              Previous
            </Text>
          </Pressable>

          <Pressable onPress={handleMarkDifficult} style={styles.difficultButton}>
            <IconSymbol name="exclamationmark.triangle" size={20} color={colors.warning} />
            <Text style={styles.difficultButtonText}>Review Again</Text>
          </Pressable>

          <Pressable onPress={handleNext} style={styles.controlButton}>
            <Text style={styles.controlButtonText}>
              {currentIndex === flashcards.length - 1 ? 'Finish' : 'Next'}
            </Text>
            <IconSymbol name="chevron.right" size={24} color={colors.primary} />
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    padding: 16,
    backgroundColor: colors.card,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
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
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.card,
    boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  controlButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 4,
  },
  controlButtonDisabled: {
    opacity: 0.3,
  },
  controlButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  controlButtonTextDisabled: {
    color: colors.textSecondary,
  },
  difficultButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.highlight,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    gap: 6,
  },
  difficultButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.warning,
  },
  emptyText: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.card,
  },
});
