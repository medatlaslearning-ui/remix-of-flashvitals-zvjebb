
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Flashcard } from '@/types/flashcard';
import { cardiologyFlashcards } from '@/data/cardiologyFlashcards';

const STORAGE_KEY = '@flashcard_states';

interface FlashcardState {
  bookmarked: boolean;
  favorite: boolean;
  reviewCount: number;
  lastReviewed?: string;
}

interface FlashcardStates {
  [id: string]: FlashcardState;
}

export const useFlashcards = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(cardiologyFlashcards);
  const [loading, setLoading] = useState(true);

  // Load persisted states from AsyncStorage on mount
  useEffect(() => {
    loadFlashcardStates();
  }, []);

  const loadFlashcardStates = async () => {
    try {
      const storedStates = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedStates) {
        const states: FlashcardStates = JSON.parse(storedStates);
        
        // Merge stored states with default flashcards
        const updatedFlashcards = cardiologyFlashcards.map(card => {
          const state = states[card.id];
          if (state) {
            return {
              ...card,
              bookmarked: state.bookmarked,
              favorite: state.favorite,
              reviewCount: state.reviewCount,
              lastReviewed: state.lastReviewed ? new Date(state.lastReviewed) : undefined,
            };
          }
          return card;
        });
        
        setFlashcards(updatedFlashcards);
      }
    } catch (error) {
      console.error('Error loading flashcard states:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveFlashcardStates = async (updatedFlashcards: Flashcard[]) => {
    try {
      const states: FlashcardStates = {};
      
      updatedFlashcards.forEach(card => {
        states[card.id] = {
          bookmarked: card.bookmarked,
          favorite: card.favorite,
          reviewCount: card.reviewCount,
          lastReviewed: card.lastReviewed?.toISOString(),
        };
      });
      
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(states));
    } catch (error) {
      console.error('Error saving flashcard states:', error);
    }
  };

  const addFlashcard = (flashcard: Omit<Flashcard, 'id'>) => {
    const newFlashcard: Flashcard = {
      ...flashcard,
      id: Date.now().toString(),
    };
    const updatedFlashcards = [...flashcards, newFlashcard];
    setFlashcards(updatedFlashcards);
    saveFlashcardStates(updatedFlashcards);
  };

  const updateFlashcard = (id: string, updates: Partial<Flashcard>) => {
    const updatedFlashcards = flashcards.map(card => 
      card.id === id ? { ...card, ...updates } : card
    );
    setFlashcards(updatedFlashcards);
    saveFlashcardStates(updatedFlashcards);
  };

  const deleteFlashcard = (id: string) => {
    const updatedFlashcards = flashcards.filter(card => card.id !== id);
    setFlashcards(updatedFlashcards);
    saveFlashcardStates(updatedFlashcards);
  };

  const toggleBookmark = (id: string) => {
    const card = flashcards.find(c => c.id === id);
    if (card) {
      updateFlashcard(id, { bookmarked: !card.bookmarked });
    }
  };

  const toggleFavorite = (id: string) => {
    const card = flashcards.find(c => c.id === id);
    if (card) {
      updateFlashcard(id, { favorite: !card.favorite });
    }
  };

  const incrementReviewCount = (id: string) => {
    const card = flashcards.find(c => c.id === id);
    if (card) {
      updateFlashcard(id, {
        reviewCount: card.reviewCount + 1,
        lastReviewed: new Date(),
      });
    }
  };

  const getFlashcardsByTopic = (topic: string) => {
    return flashcards.filter(card => card.topic === topic);
  };

  const getFlashcardsBySystem = (system: string) => {
    return flashcards.filter(card => card.system === system);
  };

  const getBookmarkedFlashcards = () => {
    return flashcards.filter(card => card.bookmarked);
  };

  const getFavoriteFlashcards = () => {
    return flashcards.filter(card => card.favorite);
  };

  return {
    flashcards,
    allFlashcards: flashcards,
    loading,
    addFlashcard,
    updateFlashcard,
    deleteFlashcard,
    toggleBookmark,
    toggleFavorite,
    incrementReviewCount,
    getFlashcardsByTopic,
    getFlashcardsBySystem,
    getBookmarkedFlashcards,
    getFavoriteFlashcards,
  };
};
