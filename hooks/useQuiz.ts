
import { useState, useCallback } from 'react';
import { supabase } from '@/app/integrations/supabase/client';
import type { Quiz, QuizQuestion, QuizStats, QuizGenerationParams, QuizGenerationResult } from '@/types/quiz';

export function useQuiz() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate a new quiz using OpenAI
  const generateQuiz = useCallback(async (params: QuizGenerationParams): Promise<QuizGenerationResult | null> => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('[useQuiz] Generating quiz with params:', params);
      
      const { data, error: functionError } = await supabase.functions.invoke('generate-quiz', {
        body: params,
      });

      if (functionError) {
        console.error('[useQuiz] Edge function error:', functionError);
        throw new Error(functionError.message || 'Failed to generate quiz');
      }

      if (!data) {
        throw new Error('No data returned from quiz generation');
      }

      console.log('[useQuiz] Quiz generated successfully:', data);
      return data as QuizGenerationResult;
    } catch (err: any) {
      console.error('[useQuiz] Error generating quiz:', err);
      setError(err.message || 'Failed to generate quiz');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch quiz by ID
  const getQuiz = useCallback(async (quizId: string): Promise<Quiz | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from('quizzes')
        .select('*')
        .eq('id', quizId)
        .single();

      if (fetchError) {
        console.error('[useQuiz] Error fetching quiz:', fetchError);
        throw new Error(fetchError.message);
      }

      return data as Quiz;
    } catch (err: any) {
      console.error('[useQuiz] Error:', err);
      setError(err.message || 'Failed to fetch quiz');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch questions for a quiz
  const getQuizQuestions = useCallback(async (quizId: string): Promise<QuizQuestion[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const { data, error: fetchError } = await supabase
        .from('quiz_questions')
        .select('*')
        .eq('quiz_id', quizId)
        .order('question_number', { ascending: true });

      if (fetchError) {
        console.error('[useQuiz] Error fetching questions:', fetchError);
        throw new Error(fetchError.message);
      }

      return (data as QuizQuestion[]) || [];
    } catch (err: any) {
      console.error('[useQuiz] Error:', err);
      setError(err.message || 'Failed to fetch questions');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  // Submit an answer to a question
  const submitAnswer = useCallback(async (
    questionId: string,
    answer: 'A' | 'B' | 'C' | 'D',
    correctAnswer: 'A' | 'B' | 'C' | 'D'
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const isCorrect = answer === correctAnswer;
      
      const { error: updateError } = await supabase
        .from('quiz_questions')
        .update({
          user_answer: answer,
          is_correct: isCorrect,
          answered_at: new Date().toISOString(),
        })
        .eq('id', questionId);

      if (updateError) {
        console.error('[useQuiz] Error submitting answer:', updateError);
        throw new Error(updateError.message);
      }

      return isCorrect;
    } catch (err: any) {
      console.error('[useQuiz] Error:', err);
      setError(err.message || 'Failed to submit answer');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Complete a quiz and calculate score
  const completeQuiz = useCallback(async (quizId: string): Promise<number> => {
    setLoading(true);
    setError(null);
    
    try {
      // Get all questions for this quiz
      const { data: questions, error: questionsError } = await supabase
        .from('quiz_questions')
        .select('is_correct')
        .eq('quiz_id', quizId);

      if (questionsError) {
        throw new Error(questionsError.message);
      }

      const score = questions?.filter(q => q.is_correct === true).length || 0;
      const totalQuestions = questions?.length || 0;

      // Update quiz status
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
        throw new Error(updateError.message);
      }

      console.log('[useQuiz] Quiz completed. Score:', score, '/', totalQuestions);
      return score;
    } catch (err: any) {
      console.error('[useQuiz] Error completing quiz:', err);
      setError(err.message || 'Failed to complete quiz');
      return 0;
    } finally {
      setLoading(false);
    }
  }, []);

  // Get user's quiz stats
  const getQuizStats = useCallback(async (): Promise<QuizStats | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { data, error: fetchError } = await supabase
        .from('quiz_stats')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        // PGRST116 is "no rows returned" - that's okay for new users
        console.error('[useQuiz] Error fetching stats:', fetchError);
        throw new Error(fetchError.message);
      }

      return data as QuizStats | null;
    } catch (err: any) {
      console.error('[useQuiz] Error:', err);
      setError(err.message || 'Failed to fetch stats');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Get user's quiz history
  const getQuizHistory = useCallback(async (limit: number = 10): Promise<Quiz[]> => {
    setLoading(true);
    setError(null);
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { data, error: fetchError } = await supabase
        .from('quizzes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (fetchError) {
        console.error('[useQuiz] Error fetching history:', fetchError);
        throw new Error(fetchError.message);
      }

      return (data as Quiz[]) || [];
    } catch (err: any) {
      console.error('[useQuiz] Error:', err);
      setError(err.message || 'Failed to fetch quiz history');
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    generateQuiz,
    getQuiz,
    getQuizQuestions,
    submitAnswer,
    completeQuiz,
    getQuizStats,
    getQuizHistory,
  };
}
