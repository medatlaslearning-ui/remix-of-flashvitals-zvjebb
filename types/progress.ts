
export interface QuizResult {
  id: string;
  user_id: string;
  quiz_type: '5-question' | '10-question';
  score: number;
  total_questions: number;
  medical_topic: string;
  medical_system: string;
  completed_at: string;
  time_spent_seconds?: number;
}

export interface FlashcardView {
  id: string;
  user_id: string;
  flashcard_id: string;
  medical_topic: string;
  medical_system: string;
  viewed_at: string;
}

export interface ProgressStats {
  totalQuizzesTaken: number;
  averageScore: number;
  totalFlashcardsViewed: number;
  topicBreakdown: {
    topic: string;
    quizCount: number;
    averageScore: number;
    flashcardViews: number;
  }[];
  recentActivity: (QuizResult | FlashcardView)[];
}
