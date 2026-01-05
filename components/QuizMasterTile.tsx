
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { IconSymbol } from './IconSymbol';
import { useQuiz } from '@/hooks/useQuiz';
import { useAuth } from '@/app/integrations/supabase/hooks/useAuth';
import { colors } from '@/styles/commonStyles';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

export default function QuizMasterTile() {
  const { user } = useAuth();
  const { getQuizStats } = useQuiz();
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadStats = useCallback(async () => {
    if (!user) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    const data = await getQuizStats(user.id);
    setStats(data);
    setLoading(false);
    console.log('[QuizMasterTile] Loaded stats:', data);
  }, [user, getQuizStats]);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    // TODO: Navigate to quiz history page when implemented
    console.log('[QuizMasterTile] Pressed - Quiz history page not yet implemented');
  };

  return (
    <Pressable style={styles.tile} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <IconSymbol 
          ios_icon_name="trophy.fill" 
          android_material_icon_name="emoji-events" 
          size={32} 
          color={colors.warning} 
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title}>Quiz Master</Text>
        {loading ? (
          <ActivityIndicator size="small" color={colors.primary} style={styles.loader} />
        ) : stats ? (
          <>
            <Text style={styles.stat}>
              {stats.total_quizzes || 0} {stats.total_quizzes === 1 ? 'Quiz' : 'Quizzes'} Completed
            </Text>
            <Text style={styles.stat}>
              {stats.average_score?.toFixed(1) || 0}% Average Score
            </Text>
            {stats.best_system && (
              <Text style={styles.bestSystem}>
                Best: {stats.best_system}
              </Text>
            )}
          </>
        ) : (
          <Text style={styles.noData}>Complete your first quiz!</Text>
        )}
      </View>
      
      <IconSymbol 
        ios_icon_name="chevron.right" 
        android_material_icon_name="chevron-right" 
        size={20} 
        color={colors.textSecondary} 
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: { 
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 16, 
    backgroundColor: colors.card, 
    borderRadius: 12, 
    marginBottom: 12,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  iconContainer: { 
    marginRight: 16, 
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.highlight,
    alignItems: 'center',
  },
  content: { flex: 1 },
  title: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: colors.text, 
    marginBottom: 6,
  },
  stat: { 
    fontSize: 14, 
    color: colors.textSecondary, 
    marginTop: 2,
    lineHeight: 20,
  },
  bestSystem: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 4,
  },
  noData: {
    fontSize: 14,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  loader: {
    marginTop: 8,
  },
});
