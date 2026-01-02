
export interface QuizQuestion {
  id: string;
  quiz_id: string;
  question_number: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: 'A' | 'B' | 'C' | 'D';
  rationale: string;
  reference_text: string;
  user_answer?: 'A' | 'B' | 'C' | 'D' | null;
  is_correct?: boolean | null;
  answered_at?: string | null;
  created_at: string;
}

export interface Quiz {
  id: string;
  user_id: string;
  medical_system: string;
  topic?: string | null;
  question_count: number;
  status: 'in_progress' | 'completed' | 'abandoned';
  score?: number | null;
  total_questions: number;
  created_at: string;
  completed_at?: string | null;
  metadata?: any;
}

export interface QuizAchievement {
  id: string;
  user_id: string;
  achievement_type: string;
  achievement_name: string;
  achievement_description?: string | null;
  earned_at: string;
  metadata?: any;
}

export interface QuizStats {
  id: string;
  user_id: string;
  total_quizzes: number;
  total_questions_answered: number;
  total_correct_answers: number;
  average_score?: number | null;
  best_score?: number | null;
  best_system?: string | null;
  last_quiz_date?: string | null;
  created_at: string;
  updated_at: string;
}

export interface QuizGenerationParams {
  medicalSystem: string;
  topic?: string;
  questionCount?: number;
  flashcardsContext?: string;
  coreKnowledgeContext?: string;
  guidelinesContext?: string;
}

export interface GeneratedQuestion {
  questionNumber: number;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  rationale: string;
  references: string;
}

export interface QuizGenerationResult {
  quizId: string;
  questionCount: number;
  medicalSystem: string;
  topic?: string;
  duration_ms: number;
  model: string;
  tokens?: {
    prompt?: number;
    completion?: number;
    total?: number;
  };
  questions?: GeneratedQuestion[];
}
