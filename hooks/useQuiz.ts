
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

export const useQuiz = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQuiz = useCallback(async (params: QuizGenerationParams): Promise<QuizGenerationResult | null> => {
    try {
      setLoading(true);
      setError(null);
      console.log('[useQuiz] Generating quiz with params:', params);

      const { data: { user } } = await supabase.auth.getUser();
      
      // Build the request body
      const requestBody = {
        medicalSystem: params.medicalSystem,
        topic: params.topic,
        questionCount: params.questionCount || 10,
        flashcardsContext: params.flashcardsContext || '',
        coreKnowledgeContext: params.coreKnowledgeContext || '',
        guidelinesContext: params.guidelinesContext || '',
      };

      console.log('[useQuiz] Calling Edge Function with body:', {
        medicalSystem: requestBody.medicalSystem,
        topic: requestBody.topic,
        questionCount: requestBody.questionCount,
        contextSizes: {
          flashcards: requestBody.flashcardsContext.length,
          coreKnowledge: requestBody.coreKnowledgeContext.length,
          guidelines: requestBody.guidelinesContext.length,
        },
      });

      // Call the Edge Function to generate quiz
      const { data, error: functionError } = await supabase.functions.invoke('generate-quiz', {
        body: requestBody,
      });

      if (functionError) {
        console.error('[useQuiz] Edge Function error:', functionError);
        throw new Error(functionError.message || 'Failed to generate quiz');
      }

      if (!data) {
        console.error('[useQuiz] No data returned from Edge Function');
        throw new Error('No data returned from quiz generation service');
      }

      console.log('[useQuiz] Edge Function response:', {
        quizId: data.quizId,
        questionCount: data.questionCount,
        hasQuestions: !!data.questions,
        questionsLength: data.questions?.length,
      });

      // Validate the response
      if (!data.questions || !Array.isArray(data.questions) || data.questions.length === 0) {
        console.error('[useQuiz] Invalid response - no questions:', data);
        throw new Error('No questions generated. Please try again.');
      }

      console.log('[useQuiz] Quiz generated successfully:', {
        quizId: data.quizId,
        questionCount: data.questions.length,
        duration: data.duration_ms,
      });

      // Return the result in the expected format
      const result: QuizGenerationResult = {
        quizId: data.quizId,
        questionCount: data.questions.length,
        medicalSystem: data.medicalSystem,
        topic: data.topic,
        duration_ms: data.duration_ms,
        questions: data.questions,
      };

      return result;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to generate quiz';
      console.error('[useQuiz] Error generating quiz:', errorMsg, err);
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
