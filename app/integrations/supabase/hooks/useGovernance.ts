
/**
 * useGovernance Hook
 * Provides guideline sources and governance data
 */

import { useState, useEffect } from 'react';
import { governanceService, type GuidelineSource } from '../services/governanceService';

export function useGovernance(medicalSystem?: string) {
  const [sources, setSources] = useState<GuidelineSource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSources = async () => {
      setLoading(true);
      const data = await governanceService.getApprovedSources(medicalSystem);
      setSources(data);
      setLoading(false);
    };

    loadSources();
  }, [medicalSystem]);

  const getSourcesForTopic = async (topic: string, system?: string) => {
    return governanceService.getSourcesForTopic(topic, system);
  };

  const getMedicalSystems = async () => {
    return governanceService.getMedicalSystems();
  };

  return {
    sources,
    loading,
    getSourcesForTopic,
    getMedicalSystems,
    formatSourcesForDisplay: governanceService.formatSourcesForDisplay,
    getSourceMetadata: governanceService.getSourceMetadata,
  };
}
