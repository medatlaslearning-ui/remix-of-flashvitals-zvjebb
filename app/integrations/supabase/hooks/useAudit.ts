
/**
 * useAudit Hook
 * Provides audit logging methods
 */

import { useState } from 'react';
import { auditService, type SourceConsulted } from '../services/auditService';
import { useAuth } from './useAuth';

export function useAudit() {
  const { user } = useAuth();
  const [logging, setLogging] = useState(false);

  const logResponse = async (
    responseId: string,
    userQuery: string,
    options?: {
      medicalSystem?: string;
      topic?: string;
      sourcesConsulted?: SourceConsulted[];
      responseMetadata?: Record<string, any>;
    }
  ) => {
    if (!user) {
      console.log('No user, skipping audit log');
      return null;
    }

    setLogging(true);
    try {
      const log = await auditService.logResponse(user.id, responseId, userQuery, options);
      return log;
    } catch (error) {
      console.error('Failed to log response:', error);
      return null;
    } finally {
      setLogging(false);
    }
  };

  const getQueryHistory = async (limit?: number) => {
    if (!user) {
      return [];
    }

    return auditService.getQueryHistory(user.id, limit);
  };

  const getMostConsultedSources = async () => {
    if (!user) {
      return [];
    }

    return auditService.getMostConsultedSources(user.id);
  };

  return {
    logResponse,
    getQueryHistory,
    getMostConsultedSources,
    logging,
  };
}
