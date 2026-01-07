
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/app/integrations/supabase/client';
import { QuizResult, FlashcardView, ProgressStats } from '@/types/progress';

export function useProgressReport(userId: string | null) {
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [flashcardViews, setFlashcardViews] = useState<FlashcardView[]>([]);
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const calculateStats = useCallback((quizzes: QuizResult[], flashcards: FlashcardView[]) => {
    const totalQuizzes = quizzes.length;
    const averageScore = totalQuizzes > 0
      ? quizzes.reduce((sum, q) => sum + (q.score / q.total_questions) * 100, 0) / totalQuizzes
      : 0;

    // Topic breakdown
    const topicMap = new Map<string, { quizCount: number; totalScore: number; flashcardViews: number }>();

    quizzes.forEach(quiz => {
      const existing = topicMap.get(quiz.medical_topic) || { quizCount: 0, totalScore: 0, flashcardViews: 0 };
      topicMap.set(quiz.medical_topic, {
        quizCount: existing.quizCount + 1,
        totalScore: existing.totalScore + (quiz.score / quiz.total_questions) * 100,
        flashcardViews: existing.flashcardViews,
      });
    });

    flashcards.forEach(view => {
      const existing = topicMap.get(view.medical_topic) || { quizCount: 0, totalScore: 0, flashcardViews: 0 };
      topicMap.set(view.medical_topic, {
        ...existing,
        flashcardViews: existing.flashcardViews + 1,
      });
    });

    const topicBreakdown = Array.from(topicMap.entries()).map(([topic, data]) => ({
      topic,
      quizCount: data.quizCount,
      averageScore: data.quizCount > 0 ? data.totalScore / data.quizCount : 0,
      flashcardViews: data.flashcardViews,
    }));

    setStats({
      totalQuizzesTaken: totalQuizzes,
      averageScore,
      totalFlashcardsViewed: flashcards.length,
      topicBreakdown,
      recentActivity: [...quizzes, ...flashcards]
        .sort((a, b) => {
          const dateA = 'completed_at' in a ? a.completed_at : a.viewed_at;
          const dateB = 'completed_at' in b ? b.completed_at : b.viewed_at;
          return new Date(dateB).getTime() - new Date(dateA).getTime();
        })
        .slice(0, 10),
    });
  }, []);

  const fetchProgressData = useCallback(async () => {
    if (!userId) {
      console.log('[ProgressReport] No user ID provided, skipping fetch');
      setLoading(false);
      setStats({
        totalQuizzesTaken: 0,
        averageScore: 0,
        totalFlashcardsViewed: 0,
        topicBreakdown: [],
        recentActivity: [],
      });
      return;
    }

    try {
      setLoading(true);
      setError(null);

      console.log('[ProgressReport] 📊 Fetching progress data for user:', userId);

      // Fetch quiz results from Supabase
      const { data: quizData, error: quizError } = await supabase
        .from('quiz_results')
        .select('*')
        .eq('user_id', userId)
        .order('completed_at', { ascending: false });

      if (quizError) {
        console.error('[ProgressReport] ❌ Error fetching quiz results:', quizError);
        throw quizError;
      }

      // Fetch flashcard views from Supabase
      const { data: flashcardData, error: flashcardError } = await supabase
        .from('flashcard_views')
        .select('*')
        .eq('user_id', userId)
        .order('viewed_at', { ascending: false });

      if (flashcardError) {
        console.error('[ProgressReport] ❌ Error fetching flashcard views:', flashcardError);
        throw flashcardError;
      }

      console.log('[ProgressReport] ✅ Successfully fetched data:');
      console.log('  - Quiz results:', quizData?.length || 0);
      console.log('  - Flashcard views:', flashcardData?.length || 0);

      setQuizResults(quizData || []);
      setFlashcardViews(flashcardData || []);

      // Calculate stats
      calculateStats(quizData || [], flashcardData || []);
    } catch (err: any) {
      setError(err.message);
      console.error('[ProgressReport] ❌ Error fetching progress data:', err);
    } finally {
      setLoading(false);
    }
  }, [userId, calculateStats]);

  useEffect(() => {
    fetchProgressData();
  }, [fetchProgressData]);

  const saveQuizResult = async (result: Omit<QuizResult, 'id' | 'user_id' | 'completed_at' | 'created_at'>) => {
    if (!userId) {
      console.log('[ProgressReport] ⚠️ No user ID - cannot save quiz result to Supabase');
      return { success: false, error: 'No user ID' };
    }

    try {
      console.log('[ProgressReport] 💾 Saving quiz result to Supabase...');
      console.log('  - User ID:', userId);
      console.log('  - Quiz Type:', result.quiz_type);
      console.log('  - Score:', result.score, '/', result.total_questions);
      console.log('  - Topic:', result.medical_topic);
      console.log('  - System:', result.medical_system);
      
      const dataToInsert = {
        user_id: userId,
        quiz_type: result.quiz_type,
        score: result.score,
        total_questions: result.total_questions,
        medical_topic: result.medical_topic,
        medical_system: result.medical_system,
        completed_at: new Date().toISOString(),
        time_spent_seconds: result.time_spent_seconds || null,
      };

      console.log('[ProgressReport] 📤 Inserting data:', dataToInsert);

      const { data, error } = await supabase
        .from('quiz_results')
        .insert(dataToInsert)
        .select();

      if (error) {
        console.error('[ProgressReport] ❌ Supabase error saving quiz result:', error);
        throw error;
      }
      
      console.log('[ProgressReport] ✅ Quiz result saved successfully to Supabase!');
      console.log('[ProgressReport] 📋 Saved data:', data);
      
      // Refresh progress data to show the new result
      await fetchProgressData();
      
      return { success: true, data };
    } catch (err: any) {
      console.error('[ProgressReport] ❌ Exception saving quiz result:', err);
      return { success: false, error: err.message };
    }
  };

  const saveFlashcardView = async (view: Omit<FlashcardView, 'id' | 'user_id' | 'viewed_at' | 'created_at'>) => {
    if (!userId) {
      console.log('[ProgressReport] ⚠️ No user ID - cannot save flashcard view to Supabase');
      return { success: false, error: 'No user ID' };
    }

    try {
      console.log('[ProgressReport] 💾 Saving flashcard view to Supabase...');
      console.log('  - User ID:', userId);
      console.log('  - Flashcard ID:', view.flashcard_id);
      console.log('  - Topic:', view.medical_topic);
      console.log('  - System:', view.medical_system);
      
      const dataToInsert = {
        user_id: userId,
        flashcard_id: view.flashcard_id,
        medical_topic: view.medical_topic,
        medical_system: view.medical_system,
        viewed_at: new Date().toISOString(),
      };

      console.log('[ProgressReport] 📤 Inserting data:', dataToInsert);

      const { data, error } = await supabase
        .from('flashcard_views')
        .insert(dataToInsert)
        .select();

      if (error) {
        console.error('[ProgressReport] ❌ Supabase error saving flashcard view:', error);
        throw error;
      }
      
      console.log('[ProgressReport] ✅ Flashcard view saved successfully to Supabase!');
      console.log('[ProgressReport] 📋 Saved data:', data);
      
      // Don't refetch immediately for flashcard views to avoid performance issues
      // The data will be refreshed on next page load or manual refresh
      
      return { success: true, data };
    } catch (err: any) {
      console.error('[ProgressReport] ❌ Exception saving flashcard view:', err);
      // Don't throw - flashcard tracking is non-critical
      return { success: false, error: err.message };
    }
  };

  return {
    quizResults,
    flashcardViews,
    stats,
    loading,
    error,
    saveQuizResult,
    saveFlashcardView,
    refresh: fetchProgressData,
  };
}
