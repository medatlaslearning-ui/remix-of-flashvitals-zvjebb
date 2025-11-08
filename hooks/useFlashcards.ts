
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
  const [updateTrigger, setUpdateTrigger] = useState(0);

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
        console.log('Loaded states:', Object.keys(states).length, 'cards');
        
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
        
        const bookmarkedCount = updatedFlashcards.filter(c => c.bookmarked).length;
        const favoriteCount = updatedFlashcards.filter(c => c.favorite).length;
        console.log('Loaded flashcards:', updatedFlashcards.length, 'total,', bookmarkedCount, 'bookmarked,', favoriteCount, 'favorites');
        setFlashcards(updatedFlashcards);
      } else {
        console.log('No stored states found, using defaults');
        setFlashcards(cardiologyFlashcards);
      }
    } catch (error) {
      console.error('Error loading flashcard states:', error);
      setFlashcards(cardiologyFlashcards);
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
      
      const bookmarkedCount = updatedFlashcards.filter(c => c.bookmarked).length;
      const favoriteCount = updatedFlashcards.filter(c => c.favorite).length;
      console.log('Saving flashcard states:', updatedFlashcards.length, 'total,', bookmarkedCount, 'bookmarked,', favoriteCount, 'favorites');
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(states));
      console.log('States saved successfully to AsyncStorage');
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
    setUpdateTrigger(prev => prev + 1);
  }, []);

  const updateFlashcard = useCallback((id: string, updates: Partial<Flashcard>) => {
    setFlashcards(prev => {
      const updatedFlashcards = prev.map(card => 
        card.id === id ? { ...card, ...updates } : card
      );
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
    setUpdateTrigger(prev => prev + 1);
  }, []);

  const deleteFlashcard = useCallback((id: string) => {
    setFlashcards(prev => {
      const updatedFlashcards = prev.filter(card => card.id !== id);
      saveFlashcardStates(updatedFlashcards);
      return updatedFlashcards;
    });
    setUpdateTrigger(prev => prev + 1);
  }, []);

  const toggleBookmark = useCallback((id: string) => {
    console.log('=== toggleBookmark START ===');
    console.log('Card ID:', id);
    
    setFlashcards(prev => {
      const cardIndex = prev.findIndex(c => c.id === id);
      if (cardIndex === -1) {
        console.log('Card not found:', id);
        return prev;
      }
      
      const card = prev[cardIndex];
      const newBookmarkedState = !card.bookmarked;
      console.log(`Card ${id} bookmark: ${card.bookmarked} -> ${newBookmarkedState}`);
      
      // Create a completely new array with a new card object
      const updatedFlashcards = [
        ...prev.slice(0, cardIndex),
        { ...card, bookmarked: newBookmarkedState },
        ...prev.slice(cardIndex + 1)
      ];
      
      const bookmarkedCount = updatedFlashcards.filter(c => c.bookmarked).length;
      console.log('New bookmarked count:', bookmarkedCount);
      
      // Save to AsyncStorage asynchronously
      saveFlashcardStates(updatedFlashcards);
      
      console.log('=== toggleBookmark END ===');
      return updatedFlashcards;
    });
    
    // Force update trigger
    setUpdateTrigger(prev => prev + 1);
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    console.log('=== toggleFavorite START ===');
    console.log('Card ID:', id);
    
    setFlashcards(prev => {
      const cardIndex = prev.findIndex(c => c.id === id);
      if (cardIndex === -1) {
        console.log('Card not found:', id);
        return prev;
      }
      
      const card = prev[cardIndex];
      const newFavoriteState = !card.favorite;
      console.log(`Card ${id} favorite: ${card.favorite} -> ${newFavoriteState}`);
      
      // Create a completely new array with a new card object
      const updatedFlashcards = [
        ...prev.slice(0, cardIndex),
        { ...card, favorite: newFavoriteState },
        ...prev.slice(cardIndex + 1)
      ];
      
      const favoriteCount = updatedFlashcards.filter(c => c.favorite).length;
      console.log('New favorite count:', favoriteCount);
      
      // Save to AsyncStorage asynchronously
      saveFlashcardStates(updatedFlashcards);
      
      console.log('=== toggleFavorite END ===');
      return updatedFlashcards;
    });
    
    // Force update trigger
    setUpdateTrigger(prev => prev + 1);
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
    setUpdateTrigger(prev => prev + 1);
  }, []);

  const getFlashcardsByTopic = useCallback((topic: string) => {
    const filtered = flashcards.filter(card => card.topic === topic);
    console.log('getFlashcardsByTopic:', topic, '- found', filtered.length, 'cards');
    return filtered;
  }, [flashcards]);

  const getFlashcardsBySystem = useCallback((system: string) => {
    return flashcards.filter(card => card.system === system);
  }, [flashcards]);

  const getBookmarkedFlashcards = useCallback(() => {
    const bookmarked = flashcards.filter(card => card.bookmarked);
    console.log('getBookmarkedFlashcards: found', bookmarked.length, 'cards');
    return bookmarked;
  }, [flashcards]);

  const getFavoriteFlashcards = useCallback(() => {
    const favorites = flashcards.filter(card => card.favorite);
    console.log('getFavoriteFlashcards: found', favorites.length, 'cards');
    return favorites;
  }, [flashcards]);

  return {
    flashcards,
    allFlashcards: flashcards,
    loading,
    updateTrigger,
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
