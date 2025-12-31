
/**
 * usePreferences Hook
 * Provides user preferences state and methods
 */

import { useState, useEffect } from 'react';
import {
  preferencesService,
  type UserPreferences,
  type ResponseDepth,
  type VerbosityLevel,
  type LearningStyle,
} from '../services/preferencesService';
import { useAuth } from './useAuth';

export function usePreferences() {
  const { user } = useAuth();
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setPreferences(null);
      setLoading(false);
      return;
    }

    // Load preferences
    const loadPreferences = async () => {
      setLoading(true);
      const prefs = await preferencesService.getPreferences(user.id);
      setPreferences(prefs);
      setLoading(false);
    };

    loadPreferences();
  }, [user]);

  const updatePreferences = async (updates: {
    response_depth?: ResponseDepth;
    verbosity?: VerbosityLevel;
    learning_style?: LearningStyle;
    show_clinical_pearls?: boolean;
    show_guidelines?: boolean;
    show_follow_up_prompts?: boolean;
    preferred_systems?: string[];
  }) => {
    if (!user) {
      throw new Error('No user');
    }

    const updated = await preferencesService.updatePreferences(user.id, updates);
    setPreferences(updated);
    return updated;
  };

  return {
    preferences,
    loading,
    updatePreferences,
    defaultPreferences: preferencesService.getDefaultPreferences(),
  };
}
