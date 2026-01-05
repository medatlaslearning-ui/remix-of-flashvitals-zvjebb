
import { useState, useCallback } from 'react';
import { supabase } from '@/app/integrations/supabase/client';
import type { Quiz, QuizQuestion, QuizGenerationParams, QuizGenerationResult, QuizStats } from '@/types/quiz';

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

// Retry configuration
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 2000;

/**
 * Sleep utility for retry delays
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuiz = useCallback(async (params: QuizGenerationParams, retryCount = 0): Promise<QuizGenerationResult | null> => {
    try {
      setLoading(true);
      setError(null);
      console.log('[useQuiz] Generating quiz with params:', {
        medicalSystem: params.medicalSystem,
        topic: params.topic,
        questionCount: params.questionCount,
        attempt: retryCount + 1,
        maxRetries: MAX_RETRIES + 1,
      });

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      // Call the Edge Function to generate quiz
      const { data, error: functionError } = await supabase.functions.invoke('generate-quiz', {
        body: {
          userId: user.id,
          medicalSystem: params.medicalSystem,
          topic: params.topic,
          questionCount: params.questionCount || 10,
          flashcardsContext: params.flashcardsContext,
          coreKnowledgeContext: params.coreKnowledgeContext,
          guidelinesContext: params.guidelinesContext,
        },
      });

      if (functionError) {
        console.error('[useQuiz] Edge Function error:', functionError);
        
        // Check if we should retry
        if (retryCount < MAX_RETRIES) {
          const isRetryableError = 
            functionError.message?.includes('timeout') ||
            functionError.message?.includes('network') ||
            functionError.message?.includes('Failed to send') ||
            functionError.message?.includes('fetch') ||
            (functionError as any).status === 500 ||
            (functionError as any).status === 502 ||
            (functionError as any).status === 503 ||
            (functionError as any).status === 504;
          
          if (isRetryableError) {
            console.log(`[useQuiz] Retryable error detected. Retrying in ${RETRY_DELAY_MS}ms... (attempt ${retryCount + 2}/${MAX_RETRIES + 1})`);
            await sleep(RETRY_DELAY_MS);
            return generateQuiz(params, retryCount + 1);
          }
        }
        
        throw functionError;
      }

      // CRITICAL: Validate response structure before accessing properties
      if (!data) {
        console.error('[useQuiz] Null response from Edge Function');
        
        // Retry on null response
        if (retryCount < MAX_RETRIES) {
          console.log(`[useQuiz] Null response - retrying in ${RETRY_DELAY_MS}ms... (attempt ${retryCount + 2}/${MAX_RETRIES + 1})`);
          await sleep(RETRY_DELAY_MS);
          return generateQuiz(params, retryCount + 1);
        }
        
        throw new Error('No response from quiz generation service. Please try again.');
      }

      // Validate required fields
      if (!data.quizId) {
        console.error('[useQuiz] Missing quizId in response:', data);
        throw new Error('Invalid response: missing quiz ID');
      }

      if (!data.questions || !Array.isArray(data.questions)) {
        console.error('[useQuiz] Missing or invalid questions array in response:', data);
        throw new Error('Invalid response: missing questions');
      }

      if (data.questions.length === 0) {
        console.error('[useQuiz] Empty questions array in response:', data);
        throw new Error('No questions were generated. Please try again.');
      }

      // Validate each question has required fields
      for (let i = 0; i < data.questions.length; i++) {
        const q = data.questions[i];
        if (!q.questionText || !q.optionA || !q.optionB || !q.optionC || !q.optionD || !q.correctAnswer || !q.rationale) {
          console.error('[useQuiz] Invalid question at index', i, ':', q);
          throw new Error(`Invalid question structure at position ${i + 1}`);
        }
      }

      console.log('[useQuiz] ✓ Quiz generated successfully:', {
        quizId: data.quizId,
        questionCount: data.questions.length,
        duration: data.duration_ms,
        model: data.model,
      });

      return data as QuizGenerationResult;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to generate quiz';
      console.error('[useQuiz] Error generating quiz:', errorMsg);
      console.error('[useQuiz] Full error:', err);
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

      // Get the quiz details
      const { data: quiz, error: quizError } = await supabase
        .from('quizzes')
        .select('*')
        .eq('id', quizId)
        .single();

      if (quizError || !quiz) {
        console.error('[useQuiz] Error fetching quiz:', quizError);
        throw new Error('Quiz not found');
      }

      // Calculate score
      const score = answers.filter(a => a.isCorrect).length;
      const totalQuestions = answers.length;
      const percentage = (score / totalQuestions) * 100;

      console.log('[useQuiz] Quiz score:', score, '/', totalQuestions, '=', percentage.toFixed(1), '%');

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
          console.error('[useQuiz] Error updating question:', questionError);
        }
      }

      // Update quiz status and score
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
        console.error('[useQuiz] Error updating quiz:', updateError);
        throw updateError;
      }

      console.log('[useQuiz] Quiz completed successfully. Database trigger will update quiz_stats automatically.');

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
          console.error('[useQuiz] Error creating achievement:', achievementError);
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
      console.error('[useQuiz] Error completing quiz:', errorMsg);
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
      console.error('[useQuiz] Error fetching stats:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch stats');
      return null;
    }
  }, []);

  const getQuiz = useCallback(async (quizId: string): Promise<Quiz | null> => {
    try {
      const { data, error: dbError } = await supabase
        .from('quizzes')
        .select('*')
        .eq('id', quizId)
        .single();

      if (dbError) throw dbError;
      return data as Quiz;
    } catch (err) {
      console.error('[useQuiz] Error fetching quiz:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch quiz');
      return null;
    }
  }, []);

  const getQuizQuestions = useCallback(async (quizId: string): Promise<QuizQuestion[]> => {
    try {
      const { data, error: dbError } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('quiz_id', quizId)
        .order('question_number', { ascending: true });

      if (dbError) throw dbError;
      return (data as QuizQuestion[]) || [];
    } catch (err) {
      console.error('[useQuiz] Error fetching quiz questions:', err);
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
      console.error('[useQuiz] Error fetching quiz history:', err);
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
