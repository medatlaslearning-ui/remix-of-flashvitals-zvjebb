
/**
 * Preferences Service
 * Handles user preferences and personalization
 */

import { supabase } from '../client';
import type { Tables, Enums } from '../types';

export type UserPreferences = Tables<'user_preferences'>;
export type ResponseDepth = Enums<'response_depth'>;
export type VerbosityLevel = Enums<'verbosity_level'>;
export type LearningStyle = Enums<'learning_style'>;

export const preferencesService = {
  /**
   * Get user preferences
   */
  async getPreferences(userId: string): Promise<UserPreferences | null> {
    const { data, error } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Get preferences error:', error);
      return null;
    }

    return data;
  },

  /**
   * Update user preferences
   */
  async updatePreferences(
    userId: string,
    updates: {
      response_depth?: ResponseDepth;
      verbosity?: VerbosityLevel;
      learning_style?: LearningStyle;
      show_clinical_pearls?: boolean;
      show_guidelines?: boolean;
      show_follow_up_prompts?: boolean;
      preferred_systems?: string[];
    }
  ) {
    console.log('Updating preferences for user:', userId);
    const { data, error } = await supabase
      .from('user_preferences')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      console.error('Update preferences error:', error);
      throw error;
    }

    console.log('Preferences updated successfully');
    return data;
  },

  /**
   * Get default preferences
   */
  getDefaultPreferences(): Partial<UserPreferences> {
    return {
      response_depth: 'standard',
      verbosity: 'moderate',
      learning_style: 'mixed',
      show_clinical_pearls: true,
      show_guidelines: true,
      show_follow_up_prompts: true,
      preferred_systems: [],
    };
  },

  /**
   * Apply preferences to response formatting
   * This is used by the synthesizer to personalize output
   */
  applyPreferencesToResponse(
    response: string,
    preferences: UserPreferences | null
  ): string {
    // If no preferences or Supabase unavailable, return original response
    if (!preferences) {
      return response;
    }

    // This is a placeholder for response personalization logic
    // The actual implementation would be in the synthesizer engine
    // This service just provides the preferences data
    console.log('Applying preferences to response:', {
      depth: preferences.response_depth,
      verbosity: preferences.verbosity,
      style: preferences.learning_style,
    });

    return response;
  },
};
