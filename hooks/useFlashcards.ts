
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Flashcard } from '@/types/flashcard';
import { cardiologyFlashcards } from '@/data/cardiologyFlashcards';
import { pulmonaryFlashcards } from '@/data/pulmonaryFlashcards';
import { renalFlashcards } from '@/data/renalFlashcards';
import { gastroenterologyFlashcards } from '@/data/gastroenterologyFlashcards';
import { endocrineFlashcards } from '@/data/endocrineFlashcards';

const STORAGE_KEY = '@flashcards_state';

export function useFlashcards() {
  const [allFlashcards, setAllFlashcards] = useState<Flashcard[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  // Load flashcards from storage on mount
  useEffect(() => {
    console.log('useFlashcards: Loading flashcards...');
    loadFlashcards();
  }, []);

  const loadFlashcards = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        console.log('useFlashcards: Found stored flashcards');
        const storedCards = JSON.parse(stored);
        // Merge stored state with base flashcards
        const merged = mergeFlashcards([
          ...cardiologyFlashcards,
          ...pulmonaryFlashcards,
          ...renalFlashcards,
          ...gastroenterologyFlashcards,
          ...endocrineFlashcards
        ], storedCards);
        console.log('useFlashcards: Merged flashcards count:', merged.length);
        setAllFlashcards(merged);
      } else {
        console.log('useFlashcards: No stored flashcards, using defaults');
        const defaultCards = [
          ...cardiologyFlashcards,
          ...pulmonaryFlashcards,
          ...renalFlashcards,
          ...gastroenterologyFlashcards,
          ...endocrineFlashcards
        ];
        console.log('useFlashcards: Default flashcards count:', defaultCards.length);
        setAllFlashcards(defaultCards);
      }
    } catch (error) {
      console.error('Error loading flashcards:', error);
      const defaultCards = [
        ...cardiologyFlashcards,
        ...pulmonaryFlashcards,
        ...renalFlashcards,
        ...gastroenterologyFlashcards,
        ...endocrineFlashcards
      ];
      setAllFlashcards(defaultCards);
    }
  };

  const mergeFlashcards = (baseCards: Flashcard[], storedCards: Flashcard[]): Flashcard[] => {
    const storedMap = new Map(storedCards.map(card => [card.id, card]));
    return baseCards.map(baseCard => {
      const stored = storedMap.get(baseCard.id);
      if (stored) {
        return {
          ...baseCard,
          bookmarked: stored.bookmarked,
          favorite: stored.favorite,
          reviewCount: stored.reviewCount,
        };
      }
      return baseCard;
    });
  };

  const saveFlashcards = async (cards: Flashcard[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
      console.log('useFlashcards: Saved flashcards to storage');
    } catch (error) {
      console.error('Error saving flashcards:', error);
    }
  };

  const updateFlashcard = async (id: string, updates: Partial<Flashcard>) => {
    console.log('useFlashcards: Updating flashcard', id, updates);
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
      await updateFlashcard(id, { bookmarked: !card.bookmarked });
    }
  };

  const toggleFavorite = async (id: string) => {
    const card = allFlashcards.find(c => c.id === id);
    if (card) {
      await updateFlashcard(id, { favorite: !card.favorite });
    }
  };

  const incrementReviewCount = async (id: string) => {
    const card = allFlashcards.find(c => c.id === id);
    if (card) {
      await updateFlashcard(id, { reviewCount: card.reviewCount + 1 });
    }
  };

  return {
    allFlashcards,
    updateFlashcard,
    toggleBookmark,
    toggleFavorite,
    incrementReviewCount,
    updateTrigger,
  };
}
