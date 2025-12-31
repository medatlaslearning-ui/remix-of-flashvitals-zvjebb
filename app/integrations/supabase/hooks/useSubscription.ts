
/**
 * useSubscription Hook
 * Provides subscription state and methods
 */

import { useState, useEffect } from 'react';
import { subscriptionService, type Subscription } from '../services/subscriptionService';
import { useAuth } from './useAuth';

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [hasPremiumAccess, setHasPremiumAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setHasPremiumAccess(false);
      setLoading(false);
      return;
    }

    // Load subscription data
    const loadSubscription = async () => {
      setLoading(true);
      const sub = await subscriptionService.getSubscription(user.id);
      setSubscription(sub);

      const hasAccess = await subscriptionService.hasPremiumAccess(user.id);
      setHasPremiumAccess(hasAccess);

      setLoading(false);
    };

    loadSubscription();
  }, [user]);

  const refreshSubscription = async () => {
    if (!user) {
      return;
    }
    const sub = await subscriptionService.getSubscription(user.id);
    setSubscription(sub);

    const hasAccess = await subscriptionService.hasPremiumAccess(user.id);
    setHasPremiumAccess(hasAccess);
  };

  return {
    subscription,
    hasPremiumAccess,
    loading,
    isTrialActive: subscription ? subscriptionService.isTrialActive(subscription) : false,
    trialDaysRemaining: subscription
      ? subscriptionService.getTrialDaysRemaining(subscription)
      : 0,
    refreshSubscription,
    activateSubscription: (planName: string, expiresAt?: string) =>
      user
        ? subscriptionService.activateSubscription(user.id, planName, expiresAt)
        : Promise.reject('No user'),
    cancelSubscription: () =>
      user
        ? subscriptionService.cancelSubscription(user.id)
        : Promise.reject('No user'),
  };
}
