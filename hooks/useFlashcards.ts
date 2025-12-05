
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

const STORAGE_KEY = '@flashcards_state';

export function useFlashcards() {
  const [allFlashcards, setAllFlashcards] = useState<Flashcard[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  // Load flashcards from storage on mount
  useEffect(() => {
    loadFlashcards();
  }, []);

  const loadFlashcards = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      if (stored) {
        const storedCards = JSON.parse(stored);
        // Merge stored state with base flashcards
        const merged = mergeFlashcards([
          ...cardiologyFlashcards,
          ...pulmonaryFlashcards,
          ...renalFlashcards,
          ...gastroenterologyFlashcards,
          ...endocrineFlashcards,
          ...hematologyFlashcards,
          ...infectiousDiseaseFlashcards
        ], storedCards);
        setAllFlashcards(merged);
      } else {
        setAllFlashcards([
          ...cardiologyFlashcards,
          ...pulmonaryFlashcards,
          ...renalFlashcards,
          ...gastroenterologyFlashcards,
          ...endocrineFlashcards,
          ...hematologyFlashcards,
          ...infectiousDiseaseFlashcards
        ]);
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
        ...infectiousDiseaseFlashcards
      ]);
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
    } catch (error) {
      console.error('Error saving flashcards:', error);
    }
  };

  const updateFlashcard = async (id: string, updates: Partial<Flashcard>) => {
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

  const getBookmarkedFlashcards = () => {
    return allFlashcards.filter(card => card.bookmarked);
  };

  const getFavoriteFlashcards = () => {
    return allFlashcards.filter(card => card.favorite);
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
    updateTrigger,
  };
}
