
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
    
    const updatedFlashcards = [...flashcards, newFlashcard];
    setFlashcards(updatedFlashcards);
    saveFlashcardStates(updatedFlashcards);
    setUpdateTrigger(prev => prev + 1);
  }, [flashcards]);

  const updateFlashcard = useCallback((id: string, updates: Partial<Flashcard>) => {
    const updatedFlashcards = flashcards.map(card => 
      card.id === id ? { ...card, ...updates } : card
    );
    setFlashcards(updatedFlashcards);
    saveFlashcardStates(updatedFlashcards);
    setUpdateTrigger(prev => prev + 1);
  }, [flashcards]);

  const deleteFlashcard = useCallback((id: string) => {
    const updatedFlashcards = flashcards.filter(card => card.id !== id);
    setFlashcards(updatedFlashcards);
    saveFlashcardStates(updatedFlashcards);
    setUpdateTrigger(prev => prev + 1);
  }, [flashcards]);

  const toggleBookmark = useCallback((id: string) => {
    console.log('=== toggleBookmark START ===');
    console.log('Card ID:', id);
    console.log('Current flashcards count:', flashcards.length);
    
    const cardIndex = flashcards.findIndex(c => c.id === id);
    if (cardIndex === -1) {
      console.log('Card not found:', id);
      console.log('=== toggleBookmark END (card not found) ===');
      return;
    }
    
    const card = flashcards[cardIndex];
    const newBookmarkedState = !card.bookmarked;
    console.log(`Card ${id} bookmark: ${card.bookmarked} -> ${newBookmarkedState}`);
    
    // Create a completely new array with a new card object
    const updatedFlashcards = flashcards.map((c, idx) => 
      idx === cardIndex ? { ...c, bookmarked: newBookmarkedState } : c
    );
    
    const bookmarkedCount = updatedFlashcards.filter(c => c.bookmarked).length;
    console.log('New bookmarked count:', bookmarkedCount);
    console.log('Updated flashcards array length:', updatedFlashcards.length);
    
    // Update state
    setFlashcards(updatedFlashcards);
    
    // Save to AsyncStorage
    saveFlashcardStates(updatedFlashcards);
    
    // Increment trigger
    setUpdateTrigger(prev => {
      const newValue = prev + 1;
      console.log('Update trigger incremented to:', newValue);
      return newValue;
    });
    
    console.log('=== toggleBookmark END ===');
  }, [flashcards]);

  const toggleFavorite = useCallback((id: string) => {
    console.log('=== toggleFavorite START ===');
    console.log('Card ID:', id);
    console.log('Current flashcards count:', flashcards.length);
    
    const cardIndex = flashcards.findIndex(c => c.id === id);
    if (cardIndex === -1) {
      console.log('Card not found:', id);
      console.log('=== toggleFavorite END (card not found) ===');
      return;
    }
    
    const card = flashcards[cardIndex];
    const newFavoriteState = !card.favorite;
    console.log(`Card ${id} favorite: ${card.favorite} -> ${newFavoriteState}`);
    
    // Create a completely new array with a new card object
    const updatedFlashcards = flashcards.map((c, idx) => 
      idx === cardIndex ? { ...c, favorite: newFavoriteState } : c
    );
    
    const favoriteCount = updatedFlashcards.filter(c => c.favorite).length;
    console.log('New favorite count:', favoriteCount);
    console.log('Updated flashcards array length:', updatedFlashcards.length);
    
    // Update state
    setFlashcards(updatedFlashcards);
    
    // Save to AsyncStorage
    saveFlashcardStates(updatedFlashcards);
    
    // Increment trigger
    setUpdateTrigger(prev => {
      const newValue = prev + 1;
      console.log('Update trigger incremented to:', newValue);
      return newValue;
    });
    
    console.log('=== toggleFavorite END ===');
  }, [flashcards]);

  const incrementReviewCount = useCallback((id: string) => {
    const card = flashcards.find(c => c.id === id);
    if (!card) return;
    
    const updatedFlashcards = flashcards.map(c => 
      c.id === id ? {
        ...c,
        reviewCount: c.reviewCount + 1,
        lastReviewed: new Date(),
      } : c
    );
    
    setFlashcards(updatedFlashcards);
    saveFlashcardStates(updatedFlashcards);
    setUpdateTrigger(prev => prev + 1);
  }, [flashcards]);

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
