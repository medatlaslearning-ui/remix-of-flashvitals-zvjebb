
/**
 * Subscription Service
 * Handles subscription status and premium access
 */

import { supabase } from '../client';
import type { Tables, Enums } from '../types';

export type Subscription = Tables<'subscriptions'>;
export type SubscriptionStatus = Enums<'subscription_status'>;

export const subscriptionService = {
  /**
   * Get user's subscription
   */
  async getSubscription(userId: string): Promise<Subscription | null> {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Get subscription error:', error);
      return null;
    }

    return data;
  },

  /**
   * Check if user has premium access
   */
  async hasPremiumAccess(userId: string): Promise<boolean> {
    const { data, error } = await supabase.rpc('has_premium_access', {
      check_user_id: userId,
    });

    if (error) {
      console.error('Check premium access error:', error);
      return false;
    }

    return data || false;
  },

  /**
   * Update subscription status
   */
  async updateSubscription(
    userId: string,
    updates: {
      status?: SubscriptionStatus;
      plan_name?: string;
      expires_at?: string;
      trial_ends_at?: string;
    }
  ) {
    console.log('Updating subscription for user:', userId);
    const { data, error } = await supabase
      .from('subscriptions')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single();

    if (error) {
      console.error('Update subscription error:', error);
      throw error;
    }

    console.log('Subscription updated successfully');
    return data;
  },

  /**
   * Activate subscription
   */
  async activateSubscription(userId: string, planName: string, expiresAt?: string) {
    return this.updateSubscription(userId, {
      status: 'active',
      plan_name: planName,
      expires_at: expiresAt,
    });
  },

  /**
   * Cancel subscription
   */
  async cancelSubscription(userId: string) {
    return this.updateSubscription(userId, {
      status: 'cancelled',
    });
  },

  /**
   * Check if trial is active
   */
  isTrialActive(subscription: Subscription): boolean {
    if (subscription.status !== 'trial') {
      return false;
    }

    if (!subscription.trial_ends_at) {
      return false;
    }

    const trialEnd = new Date(subscription.trial_ends_at);
    return trialEnd > new Date();
  },

  /**
   * Get days remaining in trial
   */
  getTrialDaysRemaining(subscription: Subscription): number {
    if (!subscription.trial_ends_at) {
      return 0;
    }

    const trialEnd = new Date(subscription.trial_ends_at);
    const now = new Date();
    const diffTime = trialEnd.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return Math.max(0, diffDays);
  },
};
