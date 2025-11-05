
import { useState, useEffect } from 'react';
import { Flashcard } from '@/types/flashcard';
import { cardiologyFlashcards } from '@/data/cardiologyFlashcards';

export const useFlashcards = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(cardiologyFlashcards);
  const [loading, setLoading] = useState(false);

  const addFlashcard = (flashcard: Omit<Flashcard, 'id'>) => {
    const newFlashcard: Flashcard = {
      ...flashcard,
      id: Date.now().toString(),
    };
    setFlashcards([...flashcards, newFlashcard]);
  };

  const updateFlashcard = (id: string, updates: Partial<Flashcard>) => {
    setFlashcards(flashcards.map(card => 
      card.id === id ? { ...card, ...updates } : card
    ));
  };

  const deleteFlashcard = (id: string) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  const toggleBookmark = (id: string) => {
    updateFlashcard(id, { 
      bookmarked: !flashcards.find(c => c.id === id)?.bookmarked 
    });
  };

  const toggleFavorite = (id: string) => {
    updateFlashcard(id, { 
      favorite: !flashcards.find(c => c.id === id)?.favorite 
    });
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
