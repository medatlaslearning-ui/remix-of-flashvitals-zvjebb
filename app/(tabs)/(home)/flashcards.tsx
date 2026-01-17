
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Platform, ScrollView } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { colors, commonStyles } from '@/styles/commonStyles';
import { useFlashcards } from '@/hooks/useFlashcards';
import { Flashcard } from '@/types/flashcard';
import { FlashcardComponent } from '@/components/FlashcardComponent';
import { IconSymbol } from '@/components/IconSymbol';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import { useProgressReport } from '@/hooks/useProgressReport';
import * as Haptics from 'expo-haptics';

export default function FlashcardsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const { saveFlashcardView } = useProgressReport(user?.id || null);
  const { 
    allFlashcards, 
    toggleBookmark, 
    toggleFavorite, 
    toggleDifficult,
    incrementReviewCount,
    getBookmarkedFlashcards,
    getFavoriteFlashcards,
    getDifficultFlashcards,
    updateTrigger,
  } = useFlashcards();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedInSession, setReviewedInSession] = useState<Set<string>>(new Set());

  const topic = params.topic as string | undefined;
  const filter = params.filter as string | undefined;
  const system = params.system as string | undefined;

  console.log('=== FlashcardsScreen Render ===');
  console.log('Params:', { topic, filter, system });
  console.log('All flashcards count:', allFlashcards.length);
  console.log('Update trigger:', updateTrigger);

  // Filter flashcards based on params - CRITICAL: Include updateTrigger in dependencies
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
    
    if (filter === 'difficult') {
      const difficult = getDifficultFlashcards();
      console.log('Difficult flashcards:', difficult.length);
      return difficult;
    }
    
    if (topic) {
      let filtered = allFlashcards.filter(card => card.topic === topic);
      console.log(`Cards matching topic "${topic}":`, filtered.length);
      
      if (system) {
        filtered = filtered.filter(card => card.system === system);
        console.log(`Cards matching topic "${topic}" and system "${system}":`, filtered.length);
      }
      
      if (filtered.length > 0) {
        console.log('First card:', {
          id: filtered[0].id,
          front: filtered[0].front,
          system: filtered[0].system,
          topic: filtered[0].topic,
          reviewCount: filtered[0].reviewCount
        });
      }
      
      return filtered;
    }
    
    console.log('Returning all flashcards:', allFlashcards.length);
    return allFlashcards;
  }, [topic, filter, system, allFlashcards, getBookmarkedFlashcards, getFavoriteFlashcards, getDifficultFlashcards, updateTrigger]);

  console.log('Filtered flashcards count:', flashcards.length);
  console.log('Current index:', currentIndex);

  // Reset index and flip state when flashcards change
  useEffect(() => {
    console.log('Flashcards changed, resetting index and flip state');
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewedInSession(new Set());
  }, [flashcards.length, topic, filter]);

  // CRITICAL FIX: Ensure currentIndex is always valid when flashcards array changes
  useEffect(() => {
    if (flashcards.length > 0 && currentIndex >= flashcards.length) {
      console.log('⚠️ Current index out of bounds, resetting to last valid index');
      const newIndex = Math.max(0, flashcards.length - 1);
      setCurrentIndex(newIndex);
      setIsFlipped(false);
    }
  }, [flashcards.length, currentIndex]);

  // Handle card flip - increment review count and save to Progress Report when card is flipped to show answer
  const handleFlip = async () => {
    // GUARD: Ensure we have a valid card
    if (!flashcards[currentIndex]) {
      console.error('❌ No card at current index:', currentIndex);
      return;
    }

    const currentCard = flashcards[currentIndex];
    const newFlipState = !isFlipped;
    setIsFlipped(newFlipState);
    
    if (newFlipState && !reviewedInSession.has(currentCard.id)) {
      console.log('[Flashcard] 🔄 Card flipped to back - triggering review count and Progress Report save');
      console.log('[Flashcard] Card ID:', currentCard.id);
      console.log('[Flashcard] Topic:', currentCard.topic);
      console.log('[Flashcard] System:', currentCard.system);
      console.log('[Flashcard] Current review count:', currentCard.reviewCount);
      
      setReviewedInSession(prev => new Set(prev).add(currentCard.id));
      
      await incrementReviewCount(currentCard.id);
      console.log('[Flashcard] ✅ Review count incremented');
      
      if (user) {
        console.log('[Flashcard] 🌉 BRIDGE: Saving flashcard view to Progress Report...');
        try {
          const saveResult = await saveFlashcardView({
            flashcard_id: currentCard.id,
            medical_topic: currentCard.topic,
            medical_system: currentCard.system,
          });
          
          if (saveResult?.success) {
            console.log('[Flashcard] ✅ BRIDGE SUCCESS: Flashcard view saved to Progress Report (Supabase)');
          } else {
            console.error('[Flashcard] ❌ BRIDGE FAILED:', saveResult?.error);
          }
        } catch (error) {
          console.error('[Flashcard] ❌ BRIDGE ERROR: Failed to save flashcard view:', error);
        }
      } else {
        console.log('[Flashcard] ⚠️ BRIDGE SKIPPED: User not authenticated - cannot save to Progress Report');
      }
    }
  };

  const getScreenTitle = () => {
    if (filter === 'bookmarked') return 'Bookmarked Cards';
    if (filter === 'favorites') return 'Favorite Cards';
    if (filter === 'difficult') return 'Difficult Cards';
    if (topic) return topic;
    return 'All Flashcards';
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentIndex < flashcards.length - 1) {
      console.log('Moving to next card:', currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      Alert.alert('End of Cards', 'You have reviewed all cards in this set!', [
        { text: 'Restart', onPress: () => {
          console.log('Restarting flashcards');
          setCurrentIndex(0);
          setIsFlipped(false);
          setReviewedInSession(new Set());
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
      setIsFlipped(false);
    }
  };

  const handleMarkDifficult = async () => {
    // GUARD: Ensure we have a valid card
    if (!flashcards[currentIndex]) {
      console.error('❌ No card at current index:', currentIndex);
      return;
    }

    const currentCard = flashcards[currentIndex];
    const newDifficultState = !currentCard.difficult;
    
    console.log('[Difficult] Toggling difficult status for card:', currentCard.id, 'new state:', newDifficultState);
    
    if (newDifficultState) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
    
    await toggleDifficult(currentCard.id);
    
    Alert.alert(
      newDifficultState ? 'Marked as Difficult' : 'Removed from Difficult',
      newDifficultState 
        ? 'This card has been added to your Difficult cards. You can review it from the Home or Profile page.'
        : 'This card has been removed from your Difficult cards.',
      [{ text: 'OK' }]
    );
  };

  const handleBookmark = async (id: string) => {
    console.log('[Bookmark] User tapped bookmark button for card:', id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    // CRITICAL FIX: Store current card ID before toggling
    const currentCardId = flashcards[currentIndex]?.id;
    
    await toggleBookmark(id);
    console.log('[Bookmark] Bookmark toggled successfully');
    
    // CRITICAL FIX: After toggling, check if we're in a filter view and the card was removed
    if (filter === 'bookmarked') {
      // Wait a tick for state to update
      setTimeout(() => {
        const updatedFlashcards = getBookmarkedFlashcards();
        console.log('[Bookmark] Updated bookmarked flashcards count:', updatedFlashcards.length);
        
        // If the current card was removed and we're at the end, move back
        if (updatedFlashcards.length > 0 && currentIndex >= updatedFlashcards.length) {
          console.log('[Bookmark] Adjusting index after removal');
          setCurrentIndex(Math.max(0, updatedFlashcards.length - 1));
          setIsFlipped(false);
        }
      }, 50);
    }
  };

  const handleFavorite = async (id: string) => {
    console.log('[Favorite] User tapped favorite button for card:', id);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    // CRITICAL FIX: Store current card ID before toggling
    const currentCardId = flashcards[currentIndex]?.id;
    
    await toggleFavorite(id);
    console.log('[Favorite] Favorite toggled successfully');
    
    // CRITICAL FIX: After toggling, check if we're in a filter view and the card was removed
    if (filter === 'favorites') {
      // Wait a tick for state to update
      setTimeout(() => {
        const updatedFlashcards = getFavoriteFlashcards();
        console.log('[Favorite] Updated favorite flashcards count:', updatedFlashcards.length);
        
        // If the current card was removed and we're at the end, move back
        if (updatedFlashcards.length > 0 && currentIndex >= updatedFlashcards.length) {
          console.log('[Favorite] Adjusting index after removal');
          setCurrentIndex(Math.max(0, updatedFlashcards.length - 1));
          setIsFlipped(false);
        }
      }, 50);
    }
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
          <IconSymbol ios_icon_name="tray" android_material_icon_name="inbox" size={64} color={colors.textSecondary} />
          <Text style={styles.emptyText}>No flashcards available</Text>
          <Text style={styles.emptySubtext}>
            {filter === 'bookmarked' && 'You have not bookmarked any cards yet.'}
            {filter === 'favorites' && 'You have not favorited any cards yet.'}
            {filter === 'difficult' && 'You have not marked any cards as difficult yet.'}
            {!filter && 'No flashcards found for this topic.'}
          </Text>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </>
    );
  }

  // CRITICAL FIX: Guard against invalid currentIndex before rendering
  const currentCard = flashcards[currentIndex];
  if (!currentCard) {
    console.error('❌ RENDER ERROR: No card at index', currentIndex, 'of', flashcards.length);
    // Force reset to first card on next render
    setTimeout(() => {
      setCurrentIndex(0);
      setIsFlipped(false);
    }, 0);
    return null;
  }

  console.log('Rendering card:', {
    index: currentIndex,
    id: currentCard.id,
    front: currentCard.front.substring(0, 50) + '...',
    system: currentCard.system,
    topic: currentCard.topic,
    isFlipped: isFlipped,
    reviewCount: currentCard.reviewCount,
    difficult: currentCard.difficult,
    reviewedInSession: reviewedInSession.has(currentCard.id)
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
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <Pressable
            style={[styles.navButton, currentIndex === 0 && styles.navButtonDisabled]}
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          >
            <IconSymbol 
              ios_icon_name="chevron.left" 
              android_material_icon_name="chevron-left" 
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
            <IconSymbol ios_icon_name="chevron.right" android_material_icon_name="chevron-right" size={24} color={colors.primary} />
          </Pressable>
        </View>

        {/* Additional Actions */}
        <View style={styles.actionsContainer}>
          <Pressable 
            style={[
              styles.actionButton,
              currentCard.difficult && styles.actionButtonActive
            ]} 
            onPress={handleMarkDifficult}
          >
            <IconSymbol 
              ios_icon_name={currentCard.difficult ? "exclamationmark.triangle.fill" : "exclamationmark.triangle"} 
              android_material_icon_name="warning" 
              size={20} 
              color={currentCard.difficult ? colors.card : colors.error} 
            />
            <Text style={[
              styles.actionButtonText,
              currentCard.difficult && styles.actionButtonTextActive
            ]}>
              {currentCard.difficult ? 'Remove from Difficult' : 'Mark Difficult'}
            </Text>
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
  actionButtonActive: {
    backgroundColor: colors.error,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.error,
  },
  actionButtonTextActive: {
    color: colors.card,
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
