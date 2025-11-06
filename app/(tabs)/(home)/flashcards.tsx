
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Platform, ScrollView } from 'react-native';
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
  const filter = params.filter as string | undefined;
  
  const {
    allFlashcards,
    toggleBookmark,
    toggleFavorite,
    incrementReviewCount,
    getFlashcardsByTopic,
    getBookmarkedFlashcards,
    getFavoriteFlashcards,
  } = useFlashcards();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [incorrectCards, setIncorrectCards] = useState<string[]>([]);
  
  // Track which cards have been reviewed to prevent duplicate increments
  const reviewedCardsRef = useRef<Set<string>>(new Set());

  // Get screen title based on filter or topic
  const getScreenTitle = () => {
    if (filter === 'bookmarked') return 'Bookmarked Cards';
    if (filter === 'favorites') return 'Favorite Cards';
    if (topic) return topic;
    return 'All Cards';
  };

  // Get filtered flashcards - recalculate whenever allFlashcards changes
  const flashcards = useMemo(() => {
    let cards: Flashcard[] = [];
    
    console.log('=== Filtering flashcards ===');
    console.log('Filter:', filter, 'Topic:', topic);
    console.log('Total flashcards:', allFlashcards.length);
    
    if (filter === 'bookmarked') {
      cards = getBookmarkedFlashcards();
      console.log('Bookmarked cards found:', cards.length);
    } else if (filter === 'favorites') {
      cards = getFavoriteFlashcards();
      console.log('Favorite cards found:', cards.length);
    } else if (topic) {
      cards = getFlashcardsByTopic(topic);
      console.log('Topic cards found:', cards.length);
    } else {
      cards = allFlashcards;
    }
    
    console.log('=== End filtering ===');
    return cards;
  }, [allFlashcards, topic, filter, getBookmarkedFlashcards, getFavoriteFlashcards, getFlashcardsByTopic]);

  // Reset current index when flashcards change
  useEffect(() => {
    console.log('Flashcards array changed, resetting to index 0');
    setCurrentIndex(0);
    reviewedCardsRef.current.clear();
  }, [flashcards.length, filter, topic]);

  // Increment review count only when moving to a new card
  useEffect(() => {
    if (flashcards.length > 0 && currentIndex < flashcards.length) {
      const currentCard = flashcards[currentIndex];
      const cardId = currentCard.id;
      
      // Only increment if we haven't reviewed this card yet in this session
      if (!reviewedCardsRef.current.has(cardId)) {
        console.log('Incrementing review count for card:', cardId);
        incrementReviewCount(cardId);
        reviewedCardsRef.current.add(cardId);
      }
    }
  }, [currentIndex, flashcards.length]);

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
                setCurrentIndex(0);
                setIncorrectCards([]);
                reviewedCardsRef.current.clear();
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

  const handleBookmark = (id: string) => {
    console.log('=== handleBookmark pressed ===');
    console.log('Card ID:', id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleBookmark(id);
  };

  const handleFavorite = (id: string) => {
    console.log('=== handleFavorite pressed ===');
    console.log('Card ID:', id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleFavorite(id);
  };

  if (flashcards.length === 0) {
    return (
      <>
        <Stack.Screen
          options={{
            title: getScreenTitle(),
            headerBackTitle: 'Back',
          }}
        />
        <View style={[commonStyles.container, commonStyles.center]}>
          <IconSymbol 
            name={filter === 'bookmarked' ? 'bookmark' : filter === 'favorites' ? 'heart' : 'square.stack.3d.up'} 
            size={64} 
            color={colors.textSecondary} 
          />
          <Text style={styles.emptyText}>
            {filter === 'bookmarked' 
              ? 'No bookmarked cards yet' 
              : filter === 'favorites' 
              ? 'No favorite cards yet' 
              : 'No flashcards available'}
          </Text>
          <Text style={styles.emptySubtext}>
            {filter === 'bookmarked' 
              ? 'Tap the bookmark icon on any card to save it here' 
              : filter === 'favorites' 
              ? 'Tap the heart icon on any card to mark it as favorite' 
              : 'Start by adding some flashcards'}
          </Text>
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
          title: getScreenTitle(),
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

        <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <FlashcardComponent
            key={currentCard.id}
            flashcard={currentCard}
            onBookmark={() => handleBookmark(currentCard.id)}
            onFavorite={() => handleFavorite(currentCard.id)}
          />
        </ScrollView>

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
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 100 : 110,
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
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 32,
    lineHeight: 22,
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
