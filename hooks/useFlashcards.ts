
import { useState, useEffect, useCallback } from 'react';
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
      console.log('Loading flashcard states from AsyncStorage...');
      const storedStates = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedStates) {
        const states: FlashcardStates = JSON.parse(storedStates);
        console.log('Loaded states:', states);
        
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
        
        console.log('Updated flashcards with states:', updatedFlashcards.filter(c => c.bookmarked || c.favorite));
        setFlashcards(updatedFlashcards);
      } else {
        console.log('No stored states found');
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
      
      console.log('Saving flashcard states:', states);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(states));
      console.log('States saved successfully');
    } catch (error) {
      console.error('Error saving flashcard states:', error);
    }
  };

  const addFlashcard = useCallback((flashcard: Omit<Flashcard, 'id'>) => {
    const newFlashcard: Flashcard = {
      ...flashcard,
      id: Date.now().toString(),
    };
    setFlashcards(prev => {
      const updatedFlashcards = [...prev, newFlashcard];
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
  }, []);

  const updateFlashcard = useCallback((id: string, updates: Partial<Flashcard>) => {
    setFlashcards(prev => {
      const updatedFlashcards = prev.map(card => 
        card.id === id ? { ...card, ...updates } : card
      );
      // Save immediately after updating
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
  }, []);

  const deleteFlashcard = useCallback((id: string) => {
    setFlashcards(prev => {
      const updatedFlashcards = prev.filter(card => card.id !== id);
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    console.log('Toggling bookmark for card:', id);
    setFlashcards(prev => {
      const card = prev.find(c => c.id === id);
      if (!card) {
        console.log('Card not found:', id);
        return prev;
      }
      
      const newBookmarkedState = !card.bookmarked;
      console.log(`Card ${id} bookmark: ${card.bookmarked} -> ${newBookmarkedState}`);
      
      const updatedFlashcards = prev.map(c => 
        c.id === id ? { ...c, bookmarked: newBookmarkedState } : c
      );
      
      // Save immediately after updating
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    console.log('Toggling favorite for card:', id);
    setFlashcards(prev => {
      const card = prev.find(c => c.id === id);
      if (!card) {
        console.log('Card not found:', id);
        return prev;
      }
      
      const newFavoriteState = !card.favorite;
      console.log(`Card ${id} favorite: ${card.favorite} -> ${newFavoriteState}`);
      
      const updatedFlashcards = prev.map(c => 
        c.id === id ? { ...c, favorite: newFavoriteState } : c
      );
      
      // Save immediately after updating
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
  }, []);

  const incrementReviewCount = useCallback((id: string) => {
    setFlashcards(prev => {
      const card = prev.find(c => c.id === id);
      if (!card) return prev;
      
      const updatedFlashcards = prev.map(c => 
        c.id === id ? {
          ...c,
          reviewCount: c.reviewCount + 1,
          lastReviewed: new Date(),
        } : c
      );
      
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
  }, []);

  const getFlashcardsByTopic = useCallback((topic: string) => {
    return flashcards.filter(card => card.topic === topic);
  }, [flashcards]);

  const getFlashcardsBySystem = useCallback((system: string) => {
    return flashcards.filter(card => card.system === system);
  }, [flashcards]);

  const getBookmarkedFlashcards = useCallback(() => {
    const bookmarked = flashcards.filter(card => card.bookmarked);
    console.log('Getting bookmarked flashcards:', bookmarked.length);
    return bookmarked;
  }, [flashcards]);

  const getFavoriteFlashcards = useCallback(() => {
    const favorites = flashcards.filter(card => card.favorite);
    console.log('Getting favorite flashcards:', favorites.length);
    return favorites;
  }, [flashcards]);

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
