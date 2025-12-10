
export interface FlashcardBack {
  definition: string;
  high_yield: string;
  clinical_pearl: string;
  treatment?: string;
}

export interface Flashcard {
  id: string;
  system: string;
  topic: string;
  front: string;
  back: FlashcardBack;
  tags?: string[];
  bookmarked: boolean;
  favorite: boolean;
  reviewCount: number;
  lastReviewed?: Date;
  nextReview?: Date;
  difficulty: 'easy' | 'medium' | 'hard';
  color?: 'blue' | 'red';
}

export interface QuizQuestion {
  id: string;
  flashcardId: string;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface TopicBundle {
  id: string;
  name: string;
  description: string;
  flashcardIds: string[];
  system: string;
}

export interface UserProgress {
  totalCards: number;
  reviewedCards: number;
  masteredCards: number;
  bookmarkedCards: number;
  favoriteCards: number;
}
