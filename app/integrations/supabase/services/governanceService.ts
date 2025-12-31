
/**
 * Governance Service
 * Handles guideline sources and reference governance
 */

import { supabase } from '../client';
import type { Tables } from '../types';

export type GuidelineSource = Tables<'guideline_sources'>;
export type TopicSourceMapping = Tables<'topic_source_mappings'>;

export const governanceService = {
  /**
   * Get all approved guideline sources
   */
  async getApprovedSources(medicalSystem?: string): Promise<GuidelineSource[]> {
    let query = supabase
      .from('guideline_sources')
      .select('*')
      .eq('is_approved', true);

    if (medicalSystem) {
      query = query.eq('medical_system', medicalSystem);
    }

    const { data, error } = await query.order('organization_name');

    if (error) {
      console.error('Get approved sources error:', error);
      return [];
    }

    return data;
  },

  /**
   * Get sources for a specific topic
   */
  async getSourcesForTopic(topic: string, system?: string) {
    const { data, error } = await supabase.rpc('get_sources_for_topic', {
      topic,
      system,
    });

    if (error) {
      console.error('Get sources for topic error:', error);
      return [];
    }

    return data;
  },

  /**
   * Get guideline source by ID
   */
  async getSourceById(sourceId: string): Promise<GuidelineSource | null> {
    const { data, error } = await supabase
      .from('guideline_sources')
      .select('*')
      .eq('id', sourceId)
      .single();

    if (error) {
      console.error('Get source by ID error:', error);
      return null;
    }

    return data;
  },

  /**
   * Get all medical systems with approved sources
   */
  async getMedicalSystems(): Promise<string[]> {
    const { data, error } = await supabase
      .from('guideline_sources')
      .select('medical_system')
      .eq('is_approved', true);

    if (error) {
      console.error('Get medical systems error:', error);
      return [];
    }

    // Get unique systems
    const systems = [...new Set(data.map((item) => item.medical_system))];
    return systems.sort();
  },

  /**
   * Format sources for display in chatbot response
   */
  formatSourcesForDisplay(sources: GuidelineSource[]): string {
    if (sources.length === 0) {
      return '';
    }

    const sourceList = sources
      .map((source) => `${source.organization_acronym} (${source.organization_name})`)
      .join(', ');

    return `\n\n📚 Sources consulted: ${sourceList}`;
  },

  /**
   * Get source metadata for audit logging
   */
  getSourceMetadata(sources: GuidelineSource[]) {
    return sources.map((source) => ({
      organization_name: source.organization_name,
      organization_acronym: source.organization_acronym,
      website_url: source.website_url,
      medical_system: source.medical_system,
    }));
  },
};
