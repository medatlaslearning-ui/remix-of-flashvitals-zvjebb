
import { useState, useCallback } from 'react';
import { supabase } from '@/app/integrations/supabase/client';
import { invokeQuizGeneration } from '@/app/integrations/supabase/utils/timeoutWrapper';
import type { Quiz, QuizQuestion, QuizGenerationParams, QuizGenerationResult, QuizStats } from '@/types/quiz';
import { cardiologyFlashcards } from '@/data/cardiologyFlashcards';
import { pulmonaryFlashcards } from '@/data/pulmonaryFlashcards';
import { neurologyFlashcards } from '@/data/neurologyFlashcards';
import { renalFlashcards } from '@/data/renalFlashcards';
import { gastroenterologyFlashcards } from '@/data/gastroenterologyFlashcards';
import { endocrineFlashcards } from '@/data/endocrineFlashcards';
import { hematologyFlashcards } from '@/data/hematologyFlashcards';
import { infectiousDiseaseFlashcards } from '@/data/infectiousDiseaseFlashcards';
import { emergencyMedicineFlashcards } from '@/data/emergencyMedicineFlashcards';
import { urologyFlashcards } from '@/data/urologyFlashcards';
import { Flashcard } from '@/types/flashcard';

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: Date;
  answers: QuizAnswer[];
}

// Get flashcards for a medical system
function getFlashcardsForSystem(medicalSystem: string): Flashcard[] {
  const systemMap: { [key: string]: Flashcard[] } = {
    'Cardiology': cardiologyFlashcards,
    'Pulmonary': pulmonaryFlashcards,
    'Neurology': neurologyFlashcards,
    'Renal': renalFlashcards,
    'Gastroenterology': gastroenterologyFlashcards,
    'Endocrine': endocrineFlashcards,
    'Hematology': hematologyFlashcards,
    'Infectious Disease': infectiousDiseaseFlashcards,
    'Emergency Medicine': emergencyMedicineFlashcards,
    'Urology': urologyFlashcards,
  };

  return systemMap[medicalSystem] || [];
}

// Build context from flashcards
function buildFlashcardsContext(flashcards: Flashcard[]): string {
  if (flashcards.length === 0) return '';

  return flashcards
    .slice(0, 20) // Limit to 20 flashcards to avoid token limits
    .map(card => {
      let context = `Topic: ${card.topic}\n`;
      context += `Question: ${card.front}\n`;
      if (card.back.definition) {
        context += `Definition: ${card.back.definition}\n`;
      }
      if (card.back.high_yield) {
        context += `High-Yield: ${card.back.high_yield}\n`;
      }
      if (card.back.clinical_pearl) {
        context += `Clinical Pearl: ${card.back.clinical_pearl}\n`;
      }
      if (card.back.treatment) {
        context += `Treatment: ${card.back.treatment}\n`;
      }
      return context;
    })
    .join('\n---\n\n');
}

export const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuiz = useCallback(async (params: QuizGenerationParams): Promise<QuizGenerationResult | null> => {
    try {
      setLoading(true);
      setError(null);
      console.log('[useQuiz] Generating quiz with params:', params);

      const { data: { user } } = await supabase.auth.getUser();
      
      // Get flashcards for the medical system
      const flashcards = getFlashcardsForSystem(params.medicalSystem);
      console.log('[useQuiz] Found', flashcards.length, 'flashcards for', params.medicalSystem);

      // Build context from flashcards
      const flashcardsContext = buildFlashcardsContext(flashcards);
      console.log('[useQuiz] Flashcards context length:', flashcardsContext.length, 'characters');

      // Build the request body - match the Edge Function's expected format
      const requestBody = {
        topic: params.medicalSystem,
        questions: params.questionCount || 10,
        medicalSystem: params.medicalSystem,
        flashcardsContext,
        maxTokens: params.questionCount === 10 ? 4000 : 2500,
      };

      console.log('[useQuiz] Calling Edge Function with body:', {
        topic: requestBody.topic,
        questions: requestBody.questions,
        flashcardsContextLength: requestBody.flashcardsContext.length,
        maxTokens: requestBody.maxTokens,
      });

      // Call the generate-quiz Edge Function with timeout protection
      const { data, error: functionError, timedOut } = await invokeQuizGeneration(
        requestBody,
        {
          onStart: () => console.log('[useQuiz] Starting quiz generation...'),
          onFinish: () => console.log('[useQuiz] Quiz generation request completed'),
          onError: (err) => console.error('[useQuiz] Quiz generation error:', err),
        }
      );

      if (timedOut) {
        console.log('[useQuiz] ⏱️ Quiz generation timed out after 90 seconds');
        throw new Error('Quiz generation timed out. Please try with fewer questions (5 instead of 10).');
      }

      if (functionError) {
        console.log('[useQuiz] Edge Function error:', functionError);
        throw functionError;
      }

      if (!data) {
        console.log('[useQuiz] No data returned from Edge Function');
        throw new Error('No data returned from quiz generation service');
      }

      console.log('[useQuiz] Edge Function response:', data);

      // The Edge Function now returns { questions: [...] } format
      const questions = data.questions;
      
      if (!questions || !Array.isArray(questions) || questions.length === 0) {
        console.log('[useQuiz] Invalid response - no questions:', data);
        throw new Error('No questions generated. Please try again.');
      }

      // Check if this is a fallback response
      if (data.fallback) {
        console.warn('[useQuiz] ⚠️ Received fallback questions:', data.error);
        // Still return the fallback questions, but log the warning
      }

      // Transform the questions to ensure they have IDs
      const transformedQuestions = questions.map((item: any, index: number) => ({
        id: `q_${Date.now()}_${index}`,
        questionNumber: item.questionNumber || index + 1,
        questionText: item.questionText || `Question ${index + 1}`,
        optionA: item.optionA || 'Option A',
        optionB: item.optionB || 'Option B',
        optionC: item.optionC || 'Option C',
        optionD: item.optionD || 'Option D',
        correctAnswer: item.correctAnswer || 'A',
        rationale: item.rationale || 'Rationale not provided',
        references: item.references || 'References not provided',
      }));

      console.log('[useQuiz] Quiz generated successfully:', {
        questionCount: transformedQuestions.length,
        isFallback: data.fallback,
        model: data.model,
        duration_ms: data.duration_ms,
      });

      // Generate a quiz ID
      const quizId = `quiz_${Date.now()}_${user?.id || 'guest'}`;

      // Return the result in the expected format
      const result: QuizGenerationResult = {
        quizId,
        questionCount: transformedQuestions.length,
        medicalSystem: params.medicalSystem,
        topic: params.topic,
        duration_ms: data.duration_ms || 0,
        model: data.model || 'gpt-4o-mini',
        tokens: data.tokens,
        questions: transformedQuestions,
      };

      return result;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to generate quiz';
      console.log('[useQuiz] Error generating quiz:', errorMsg, err);
      setError(errorMsg);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const completeQuiz = useCallback(async (
    quizId: string,
    answers: QuizAnswer[]
  ): Promise<QuizResult | null> => {
    try {
      setLoading(true);
      setError(null);
      console.log('[useQuiz] Completing quiz:', quizId, 'with', answers.length, 'answers');

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      // TODO: Backend Integration - Fetch quiz details from Supabase
      // Get the quiz details
      const { data: quiz, error: quizError } = await supabase
        .from('quizzes')
        .select('*')
        .eq('id', quizId)
        .single();

      if (quizError || !quiz) {
        console.log('[useQuiz] Error fetching quiz:', quizError);
        throw new Error('Quiz not found');
      }

      // Calculate score
      const score = answers.filter(a => a.isCorrect).length;
      const totalQuestions = answers.length;
      const percentage = (score / totalQuestions) * 100;

      console.log('[useQuiz] Quiz score:', score, '/', totalQuestions, '=', percentage.toFixed(1), '%');

      // TODO: Backend Integration - Update quiz questions with user answers
      // Update quiz questions with user answers first
      for (const answer of answers) {
        const { error: questionError } = await supabase
          .from('quiz_questions')
          .update({
            user_answer: answer.selectedAnswer,
            is_correct: answer.isCorrect,
            answered_at: new Date().toISOString(),
          })
          .eq('id', answer.questionId);

        if (questionError) {
          console.log('[useQuiz] Error updating question:', questionError);
        }
      }

      // TODO: Backend Integration - Update quiz status and score
      // This will trigger the database function to automatically update quiz_stats
      const { error: updateError } = await supabase
        .from('quizzes')
        .update({
          status: 'completed',
          score,
          total_questions: totalQuestions,
          completed_at: new Date().toISOString(),
        })
        .eq('id', quizId);

      if (updateError) {
        console.log('[useQuiz] Error updating quiz:', updateError);
        throw updateError;
      }

      console.log('[useQuiz] Quiz completed successfully. Database trigger will update quiz_stats automatically.');

      // TODO: Backend Integration - Create achievement for perfect score
      // Check for achievements
      if (score === totalQuestions) {
        // Perfect score achievement
        const { error: achievementError } = await supabase
          .from('quiz_achievements')
          .insert({
            user_id: user.id,
            achievement_type: 'perfect_score',
            achievement_name: 'Perfect Score',
            achievement_description: `Achieved a perfect score on ${quiz.medical_system} quiz`,
            metadata: { quiz_id: quizId, system: quiz.medical_system },
          });

        if (achievementError) {
          console.log('[useQuiz] Error creating achievement:', achievementError);
        }
      }

      return {
        quizId,
        score,
        totalQuestions,
        percentage,
        completedAt: new Date(),
        answers,
      };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to complete quiz';
      console.log('[useQuiz] Error completing quiz:', errorMsg);
      setError(errorMsg);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const getQuizStats = useCallback(async (userId?: string): Promise<QuizStats | null> => {
    try {
      let targetUserId = userId;
      
      if (!targetUserId) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          console.log('[useQuiz] No user authenticated');
          return null;
        }
        targetUserId = user.id;
      }

      // TODO: Backend Integration - Fetch quiz statistics from Supabase
      const { data, error: dbError } = await supabase
        .from('quiz_stats')
        .select('*')
        .eq('user_id', targetUserId)
        .single();

      if (dbError) {
        if (dbError.code === 'PGRST116') {
          // No stats found, return empty stats
          console.log('[useQuiz] No quiz stats found for user');
          return null;
        }
        throw dbError;
      }

      console.log('[useQuiz] Quiz stats loaded:', data);
      return data as QuizStats;
    } catch (err) {
      console.log('[useQuiz] Error fetching stats:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch stats');
      return null;
    }
  }, []);

  const getQuiz = useCallback(async (quizId: string): Promise<Quiz | null> => {
    try {
      // TODO: Backend Integration - Fetch quiz from Supabase
      const { data, error: dbError } = await supabase
        .from('quizzes')
        .select('*')
        .eq('id', quizId)
        .single();

      if (dbError) throw dbError;
      return data as Quiz;
    } catch (err) {
      console.log('[useQuiz] Error fetching quiz:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch quiz');
      return null;
    }
  }, []);

  const getQuizQuestions = useCallback(async (quizId: string): Promise<QuizQuestion[]> => {
    try {
      // TODO: Backend Integration - Fetch quiz questions from Supabase
      const { data, error: dbError } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('quiz_id', quizId)
        .order('question_number', { ascending: true });

      if (dbError) throw dbError;
      return (data as QuizQuestion[]) || [];
    } catch (err) {
      console.log('[useQuiz] Error fetching quiz questions:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch quiz questions');
      return [];
    }
  }, []);

  const getQuizHistory = useCallback(async (userId?: string): Promise<Quiz[]> => {
    try {
      let targetUserId = userId;
      
      if (!targetUserId) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return [];
        targetUserId = user.id;
      }

      // TODO: Backend Integration - Fetch quiz history from Supabase
      const { data, error: dbError } = await supabase
        .from('quizzes')
        .select('*')
        .eq('user_id', targetUserId)
        .eq('status', 'completed')
        .order('completed_at', { ascending: false })
        .limit(20);

      if (dbError) throw dbError;
      return (data as Quiz[]) || [];
    } catch (err) {
      console.log('[useQuiz] Error fetching quiz history:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch quiz history');
      return [];
    }
  }, []);

  return {
    generateQuiz,
    completeQuiz,
    getQuizStats,
    getQuiz,
    getQuizQuestions,
    getQuizHistory,
    loading,
    error,
  };
};
