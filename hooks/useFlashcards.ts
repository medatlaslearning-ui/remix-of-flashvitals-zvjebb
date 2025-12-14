
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Flashcard } from '@/types/flashcard';
import { cardiologyFlashcards } from '@/data/cardiologyFlashcards';
import { pulmonaryFlashcards } from '@/data/pulmonaryFlashcards';
import { renalFlashcards } from '@/data/renalFlashcards';
import { gastroenterologyFlashcards } from '@/data/gastroenterologyFlashcards';
import { endocrineFlashcards } from '@/data/endocrineFlashcards';
import { hematologyFlashcards } from '@/data/hematologyFlashcards';
import { infectiousDiseaseFlashcards } from '@/data/infectiousDiseaseFlashcards';
import { neurologyFlashcards } from '@/data/neurologyFlashcards';
import { emergencyMedicineFlashcards } from '@/data/emergencyMedicineFlashcards';

const STORAGE_KEY = '@flashcards_state';
const REVIEW_STORAGE_KEY = '@flashcard_reviews';

export function useFlashcards() {
  const [allFlashcards, setAllFlashcards] = useState<Flashcard[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Load flashcards from storage on mount
  useEffect(() => {
    loadFlashcards();
  }, []);

  const loadFlashcards = async () => {
    try {
      console.log('Loading flashcards from storage...');
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      const reviewData = await AsyncStorage.getItem(REVIEW_STORAGE_KEY);
      
      const baseCards = [
        ...cardiologyFlashcards,
        ...pulmonaryFlashcards,
        ...renalFlashcards,
        ...gastroenterologyFlashcards,
        ...endocrineFlashcards,
        ...hematologyFlashcards,
        ...infectiousDiseaseFlashcards,
        ...neurologyFlashcards,
        ...emergencyMedicineFlashcards
      ];

      if (stored || reviewData) {
        const storedCards = stored ? JSON.parse(stored) : [];
        const reviews = reviewData ? JSON.parse(reviewData) : {};
        
        // Merge stored state with base flashcards
        const merged = mergeFlashcards(baseCards, storedCards, reviews);
        console.log('Loaded flashcards with review data:', merged.filter(c => c.reviewCount > 0).length, 'reviewed');
        setAllFlashcards(merged);
      } else {
        console.log('No stored data, using base flashcards');
        setAllFlashcards(baseCards);
      }
    } catch (error) {
      console.error('Error loading flashcards:', error);
      setAllFlashcards([
        ...cardiologyFlashcards,
        ...pulmonaryFlashcards,
        ...renalFlashcards,
        ...gastroenterologyFlashcards,
        ...endocrineFlashcards,
        ...hematologyFlashcards,
        ...infectiousDiseaseFlashcards,
        ...neurologyFlashcards,
        ...emergencyMedicineFlashcards
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const mergeFlashcards = (
    baseCards: Flashcard[], 
    storedCards: Flashcard[], 
    reviews: Record<string, number>
  ): Flashcard[] => {
    const storedMap = new Map(storedCards.map(card => [card.id, card]));
    return baseCards.map(baseCard => {
      const stored = storedMap.get(baseCard.id);
      const reviewCount = reviews[baseCard.id] || 0;
      
      if (stored) {
        return {
          ...baseCard,
          bookmarked: stored.bookmarked,
          favorite: stored.favorite,
          reviewCount: Math.max(stored.reviewCount || 0, reviewCount),
        };
      }
      return {
        ...baseCard,
        reviewCount: reviewCount,
      };
    });
  };

  const saveFlashcards = async (cards: Flashcard[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
      
      // Also save review counts separately for reliability
      const reviewData: Record<string, number> = {};
      cards.forEach(card => {
        if (card.reviewCount > 0) {
          reviewData[card.id] = card.reviewCount;
        }
      });
      await AsyncStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(reviewData));
      
      console.log('Saved flashcards and review data');
    } catch (error) {
      console.error('Error saving flashcards:', error);
    }
  };

  const updateFlashcard = async (id: string, updates: Partial<Flashcard>) => {
    console.log('Updating flashcard:', id, updates);
    const updated = allFlashcards.map(card =>
      card.id === id ? { ...card, ...updates } : card
    );
    setAllFlashcards(updated);
    await saveFlashcards(updated);
    setUpdateTrigger(prev => prev + 1);
  };

  const toggleBookmark = async (id: string) => {
    const card = allFlashcards.find(c => c.id === id);
    if (card) {
      console.log('Toggling bookmark for card:', id, 'current:', card.bookmarked);
      await updateFlashcard(id, { bookmarked: !card.bookmarked });
    }
  };

  const toggleFavorite = async (id: string) => {
    const card = allFlashcards.find(c => c.id === id);
    if (card) {
      console.log('Toggling favorite for card:', id, 'current:', card.favorite);
      await updateFlashcard(id, { favorite: !card.favorite });
    }
  };

  const incrementReviewCount = async (id: string) => {
    const card = allFlashcards.find(c => c.id === id);
    if (card) {
      const newCount = card.reviewCount + 1;
      console.log('Incrementing review count for card:', id, 'from', card.reviewCount, 'to', newCount);
      await updateFlashcard(id, { 
        reviewCount: newCount,
        lastReviewed: new Date()
      });
    }
  };

  const getBookmarkedFlashcards = () => {
    return allFlashcards.filter(card => card.bookmarked);
  };

  const getFavoriteFlashcards = () => {
    return allFlashcards.filter(card => card.favorite);
  };

  const getTopicStats = (system: string, topic: string) => {
    const topicCards = allFlashcards.filter(
      card => card.system === system && card.topic === topic
    );
    const reviewedCount = topicCards.filter(card => card.reviewCount > 0).length;
    const remainingCount = topicCards.length - reviewedCount;
    
    return {
      total: topicCards.length,
      reviewed: reviewedCount,
      remaining: remainingCount,
      progress: topicCards.length > 0 ? (reviewedCount / topicCards.length) * 100 : 0
    };
  };

  return {
    flashcards: allFlashcards,
    allFlashcards,
    updateFlashcard,
    toggleBookmark,
    toggleFavorite,
    incrementReviewCount,
    getBookmarkedFlashcards,
    getFavoriteFlashcards,
    getTopicStats,
    updateTrigger,
    isLoading,
  };
}
