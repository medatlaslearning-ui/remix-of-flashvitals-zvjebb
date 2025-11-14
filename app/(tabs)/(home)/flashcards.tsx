
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Platform, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { Flashcard } from '@/types/flashcard';
import { FlashcardComponent } from '@/components/FlashcardComponent';
import { IconSymbol } from '@/components/IconSymbol';
import * as Haptics from 'expo-haptics';

export default function FlashcardsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { 
    allFlashcards, 
    toggleBookmark, 
    toggleFavorite, 
    incrementReviewCount,
    getBookmarkedFlashcards,
    getFavoriteFlashcards,
  } = useFlashcards();

  const [currentIndex, setCurrentIndex] = useState(0);
  const hasIncrementedReview = useRef(false);

  const topic = params.topic as string | undefined;
  const filter = params.filter as string | undefined;
  const system = params.system as string | undefined;

  console.log('=== FlashcardsScreen Render ===');
  console.log('Params:', { topic, filter, system });
  console.log('All flashcards count:', allFlashcards.length);

  // Filter flashcards based on params
  const flashcards = useMemo(() => {
    console.log('Filtering flashcards with params:', { topic, filter, system });
    console.log('Total flashcards available:', allFlashcards.length);
    
    if (filter === 'bookmarked') {
      const bookmarked = getBookmarkedFlashcards();
      console.log('Bookmarked flashcards:', bookmarked.length);
      return bookmarked;
    }
    
    if (filter === 'favorites') {
      const favorites = getFavoriteFlashcards();
      console.log('Favorite flashcards:', favorites.length);
      return favorites;
    }
    
    if (topic) {
      let filtered = allFlashcards.filter(card => card.topic === topic);
      console.log(`Cards matching topic "${topic}":`, filtered.length);
      
      // If system is specified, also filter by system
      if (system) {
        filtered = filtered.filter(card => card.system === system);
        console.log(`Cards matching topic "${topic}" and system "${system}":`, filtered.length);
      }
      
      // Log first few cards for debugging
      if (filtered.length > 0) {
        console.log('First card:', {
          id: filtered[0].id,
          front: filtered[0].front,
          system: filtered[0].system,
          topic: filtered[0].topic
        });
      }
      
      return filtered;
    }
    
    console.log('Returning all flashcards:', allFlashcards.length);
    return allFlashcards;
  }, [topic, filter, system, allFlashcards, getBookmarkedFlashcards, getFavoriteFlashcards]);

  console.log('Filtered flashcards count:', flashcards.length);
  console.log('Current index:', currentIndex);

  // Reset index when flashcards change
  useEffect(() => {
    console.log('Flashcards changed, resetting index');
    setCurrentIndex(0);
    hasIncrementedReview.current = false;
  }, [flashcards.length, topic, filter]);

  // Increment review count for current card (only once per card)
  useEffect(() => {
    if (flashcards.length > 0 && currentIndex < flashcards.length && !hasIncrementedReview.current) {
      const currentCard = flashcards[currentIndex];
      console.log('Incrementing review count for card:', currentCard.id);
      incrementReviewCount(currentCard.id);
      hasIncrementedReview.current = true;
    }
  }, [currentIndex, flashcards.length, incrementReviewCount]);

  const getScreenTitle = () => {
    if (filter === 'bookmarked') return 'Bookmarked Cards';
    if (filter === 'favorites') return 'Favorite Cards';
    if (topic) return topic;
    return 'All Flashcards';
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentIndex < flashcards.length - 1) {
      console.log('Moving to next card:', currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
      hasIncrementedReview.current = false;
    } else {
      Alert.alert('End of Cards', 'You have reviewed all cards in this set!', [
        { text: 'Restart', onPress: () => {
          console.log('Restarting flashcards');
          setCurrentIndex(0);
          hasIncrementedReview.current = false;
        }},
        { text: 'Go Back', onPress: () => router.back() }
      ]);
    }
  };

  const handlePrevious = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentIndex > 0) {
      console.log('Moving to previous card:', currentIndex - 1);
      setCurrentIndex(currentIndex - 1);
      hasIncrementedReview.current = false;
    }
  };

  const handleMarkDifficult = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert('Mark as Difficult', 'This feature will be available in a future update.');
  };

  const handleBookmark = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    console.log('Toggling bookmark for card:', id);
    toggleBookmark(id);
  };

  const handleFavorite = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    console.log('Toggling favorite for card:', id);
    toggleFavorite(id);
  };

  if (flashcards.length === 0) {
    console.log('No flashcards to display - showing empty state');
    return (
      <>
        <Stack.Screen
          options={{
            title: getScreenTitle(),
            headerBackTitle: 'Back',
          }}
        />
        <View style={[commonStyles.container, styles.emptyContainer]}>
          <IconSymbol name="tray" size={64} color={colors.textSecondary} />
          <Text style={styles.emptyText}>No flashcards available</Text>
          <Text style={styles.emptySubtext}>
            {filter === 'bookmarked' && 'You haven&apos;t bookmarked any cards yet.'}
            {filter === 'favorites' && 'You haven&apos;t favorited any cards yet.'}
            {!filter && 'No flashcards found for this topic.'}
          </Text>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </>
    );
  }

  const currentCard = flashcards[currentIndex];
  console.log('Rendering card:', {
    index: currentIndex,
    id: currentCard.id,
    front: currentCard.front.substring(0, 50) + '...',
    system: currentCard.system,
    topic: currentCard.topic
  });

  return (
    <>
      <Stack.Screen
        options={{
          title: getScreenTitle(),
          headerBackTitle: 'Back',
        }}
      />
      <ScrollView style={commonStyles.container} contentContainerStyle={styles.content}>
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Card {currentIndex + 1} of {flashcards.length}
          </Text>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentIndex + 1) / flashcards.length) * 100}%` }
              ]} 
            />
          </View>
        </View>

        {/* Flashcard */}
        <FlashcardComponent
          flashcard={currentCard}
          onBookmark={() => handleBookmark(currentCard.id)}
          onFavorite={() => handleFavorite(currentCard.id)}
          showActions={true}
        />

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <Pressable
            style={[styles.navButton, currentIndex === 0 && styles.navButtonDisabled]}
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          >
            <IconSymbol 
              name="chevron.left" 
              size={24} 
              color={currentIndex === 0 ? colors.textSecondary : colors.primary} 
            />
            <Text style={[
              styles.navButtonText,
              currentIndex === 0 && styles.navButtonTextDisabled
            ]}>
              Previous
            </Text>
          </Pressable>

          <Pressable
            style={styles.navButton}
            onPress={handleNext}
          >
            <Text style={styles.navButtonText}>
              {currentIndex === flashcards.length - 1 ? 'Finish' : 'Next'}
            </Text>
            <IconSymbol name="chevron.right" size={24} color={colors.primary} />
          </Pressable>
        </View>

        {/* Additional Actions */}
        <View style={styles.actionsContainer}>
          <Pressable style={styles.actionButton} onPress={handleMarkDifficult}>
            <IconSymbol name="exclamationmark.triangle" size={20} color={colors.error} />
            <Text style={styles.actionButtonText}>Mark Difficult</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
    paddingBottom: Platform.OS === 'ios' ? 100 : 110,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.highlight,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    gap: 12,
  },
  navButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    padding: 16,
    borderRadius: 12,
    gap: 8,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
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
  actionsContainer: {
    marginTop: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 12,
    gap: 8,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.error,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
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
