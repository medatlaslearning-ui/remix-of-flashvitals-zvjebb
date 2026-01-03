
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
      console.log('[useQuiz] Generating quiz with params:', {
        medicalSystem: params.medicalSystem,
        questionCount: params.questionCount,
        topic: params.topic,
        flashcardsContextLength: params.flashcardsContext?.length || 0,
        coreKnowledgeContextLength: params.coreKnowledgeContext?.length || 0,
        guidelinesContextLength: params.guidelinesContext?.length || 0,
      });
      
      const startTime = performance.now();
      
      const { data, error: functionError } = await supabase.functions.invoke('generate-quiz', {
        body: {
          medicalSystem: params.medicalSystem,
          topic: params.topic,
          questionCount: params.questionCount || 5,
          flashcardsContext: params.flashcardsContext || '',
          coreKnowledgeContext: params.coreKnowledgeContext || '',
          guidelinesContext: params.guidelinesContext || '',
        },
      });

      const duration = Math.round(performance.now() - startTime);
      console.log('[useQuiz] Edge function call completed in', duration, 'ms');

      if (functionError) {
        console.error('[useQuiz] Edge function error:', {
          message: functionError.message,
          details: functionError.details,
          hint: functionError.hint,
          code: functionError.code,
        });
        throw new Error(functionError.message || functionError.details || 'Failed to generate quiz');
      }

      if (!data) {
        console.error('[useQuiz] No data returned from quiz generation');
        throw new Error('No data returned from quiz generation');
      }

      console.log('[useQuiz] Quiz generated successfully:', {
        quizId: data.quizId,
        questionCount: data.questionCount,
        medicalSystem: data.medicalSystem,
        duration_ms: data.duration_ms,
        model: data.model,
        tokens: data.tokens,
        questionsReceived: data.questions?.length || 0,
      });
      
      // Validate the response
      if (!data.questions || data.questions.length === 0) {
        console.error('[useQuiz] No questions in response');
        throw new Error('No questions generated. Please try again.');
      }
      
      return data as QuizGenerationResult;
    } catch (err: any) {
      console.error('[useQuiz] Error generating quiz:', {
        name: err.name,
        message: err.message,
        stack: err.stack,
      });
      
      // Provide user-friendly error messages
      let errorMessage = 'Failed to generate quiz. Please try again.';
      
      if (err.message?.includes('timeout')) {
        errorMessage = 'Quiz generation timed out. Try generating fewer questions.';
      } else if (err.message?.includes('network')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (err.message?.includes('No questions')) {
        errorMessage = err.message;
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
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
