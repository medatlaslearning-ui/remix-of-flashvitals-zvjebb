
/**
 * useFeedback Hook
 * Provides feedback submission methods
 */

import { useState } from 'react';
import { feedbackService, type FeedbackType } from '../services/feedbackService';
import { useAuth } from './useAuth';

export function useFeedback() {
  const { user } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const submitFeedback = async (
    responseId: string,
    feedbackType: FeedbackType,
    options?: {
      topic?: string;
      system?: string;
      comment?: string;
    }
  ) => {
    if (!user) {
      throw new Error('No user');
    }

    setSubmitting(true);
    try {
      const feedback = await feedbackService.submitFeedback(
        user.id,
        responseId,
        feedbackType,
        options
      );
      return feedback;
    } finally {
      setSubmitting(false);
    }
  };

  const recordFollowUpSelection = async (
    responseId: string,
    selectedPrompt: string,
    promptCategory?: string
  ) => {
    if (!user) {
      throw new Error('No user');
    }

    return feedbackService.recordFollowUpSelection(
      user.id,
      responseId,
      selectedPrompt,
      promptCategory
    );
  };

  const getFeedbackStats = async () => {
    if (!user) {
      return null;
    }

    return feedbackService.getFeedbackStats(user.id);
  };

  return {
    submitFeedback,
    recordFollowUpSelection,
    getFeedbackStats,
    submitting,
  };
}
