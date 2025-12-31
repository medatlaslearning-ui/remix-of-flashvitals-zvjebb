
/**
 * Feedback Service
 * Handles user feedback and learning signals
 */

import { supabase } from '../client';
import type { Tables, Enums } from '../types';

export type ResponseFeedback = Tables<'response_feedback'>;
export type FollowUpSelection = Tables<'follow_up_selections'>;
export type FeedbackType = Enums<'feedback_type'>;

export const feedbackService = {
  /**
   * Submit feedback for a response
   */
  async submitFeedback(
    userId: string,
    responseId: string,
    feedbackType: FeedbackType,
    options?: {
      topic?: string;
      system?: string;
      comment?: string;
    }
  ) {
    console.log('Submitting feedback:', { userId, responseId, feedbackType });

    // Check if feedback already exists
    const { data: existing } = await supabase
      .from('response_feedback')
      .select('id')
      .eq('user_id', userId)
      .eq('response_id', responseId)
      .single();

    if (existing) {
      // Update existing feedback
      const { data, error } = await supabase
        .from('response_feedback')
        .update({
          feedback_type: feedbackType,
          response_topic: options?.topic,
          response_system: options?.system,
          comment: options?.comment,
        })
        .eq('id', existing.id)
        .select()
        .single();

      if (error) {
        console.error('Update feedback error:', error);
        throw error;
      }

      return data;
    } else {
      // Insert new feedback
      const { data, error } = await supabase
        .from('response_feedback')
        .insert({
          user_id: userId,
          response_id: responseId,
          feedback_type: feedbackType,
          response_topic: options?.topic,
          response_system: options?.system,
          comment: options?.comment,
        })
        .select()
        .single();

      if (error) {
        console.error('Insert feedback error:', error);
        throw error;
      }

      return data;
    }
  },

  /**
   * Record a follow-up prompt selection
   */
  async recordFollowUpSelection(
    userId: string,
    responseId: string,
    selectedPrompt: string,
    promptCategory?: string
  ) {
    console.log('Recording follow-up selection:', { userId, responseId, selectedPrompt });

    const { data, error } = await supabase
      .from('follow_up_selections')
      .insert({
        user_id: userId,
        response_id: responseId,
        selected_prompt: selectedPrompt,
        prompt_category: promptCategory,
      })
      .select()
      .single();

    if (error) {
      console.error('Record follow-up selection error:', error);
      throw error;
    }

    return data;
  },

  /**
   * Get user's feedback statistics
   */
  async getFeedbackStats(userId: string) {
    const { data, error } = await supabase.rpc('get_user_feedback_stats', {
      check_user_id: userId,
    });

    if (error) {
      console.error('Get feedback stats error:', error);
      return null;
    }

    return data;
  },

  /**
   * Get user's recent feedback
   */
  async getRecentFeedback(userId: string, limit: number = 20) {
    const { data, error } = await supabase
      .from('response_feedback')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Get recent feedback error:', error);
      return [];
    }

    return data;
  },

  /**
   * Get feedback for a specific response
   */
  async getFeedbackForResponse(userId: string, responseId: string) {
    const { data, error } = await supabase
      .from('response_feedback')
      .select('*')
      .eq('user_id', userId)
      .eq('response_id', responseId)
      .single();

    if (error) {
      console.error('Get feedback for response error:', error);
      return null;
    }

    return data;
  },
};
