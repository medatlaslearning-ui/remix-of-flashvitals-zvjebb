
/**
 * Audit Service
 * Handles audit logging and traceability
 */

import { supabase } from '../client';
import type { Tables } from '../types';

export type ResponseAuditLog = Tables<'response_audit_log'>;

export interface SourceConsulted {
  organization_name: string;
  organization_acronym: string;
  website_url: string;
  medical_system: string;
}

export const auditService = {
  /**
   * Log a chatbot response with sources consulted
   */
  async logResponse(
    userId: string,
    responseId: string,
    userQuery: string,
    options?: {
      medicalSystem?: string;
      topic?: string;
      sourcesConsulted?: SourceConsulted[];
      responseMetadata?: Record<string, any>;
    }
  ) {
    console.log('Logging response:', { userId, responseId, userQuery });

    const { data, error } = await supabase
      .from('response_audit_log')
      .insert({
        user_id: userId,
        response_id: responseId,
        user_query: userQuery,
        medical_system: options?.medicalSystem,
        topic: options?.topic,
        sources_consulted: options?.sourcesConsulted as any,
        response_metadata: options?.responseMetadata as any,
      })
      .select()
      .single();

    if (error) {
      console.error('Log response error:', error);
      throw error;
    }

    return data;
  },

  /**
   * Get user's query history
   */
  async getQueryHistory(userId: string, limit: number = 50) {
    const { data, error } = await supabase.rpc('get_user_query_history', {
      check_user_id: userId,
      limit_count: limit,
    });

    if (error) {
      console.error('Get query history error:', error);
      return [];
    }

    return data;
  },

  /**
   * Get most consulted sources for a user
   */
  async getMostConsultedSources(userId: string) {
    const { data, error } = await supabase.rpc('get_most_consulted_sources', {
      check_user_id: userId,
    });

    if (error) {
      console.error('Get most consulted sources error:', error);
      return [];
    }

    return data;
  },

  /**
   * Get audit log for a specific response
   */
  async getAuditLogForResponse(
    userId: string,
    responseId: string
  ): Promise<ResponseAuditLog | null> {
    const { data, error } = await supabase
      .from('response_audit_log')
      .select('*')
      .eq('user_id', userId)
      .eq('response_id', responseId)
      .single();

    if (error) {
      console.error('Get audit log for response error:', error);
      return null;
    }

    return data;
  },

  /**
   * Get audit logs by medical system
   */
  async getAuditLogsBySystem(userId: string, medicalSystem: string, limit: number = 20) {
    const { data, error } = await supabase
      .from('response_audit_log')
      .select('*')
      .eq('user_id', userId)
      .eq('medical_system', medicalSystem)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Get audit logs by system error:', error);
      return [];
    }

    return data;
  },

  /**
   * Get audit logs by topic
   */
  async getAuditLogsByTopic(userId: string, topic: string, limit: number = 20) {
    const { data, error } = await supabase
      .from('response_audit_log')
      .select('*')
      .eq('user_id', userId)
      .eq('topic', topic)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Get audit logs by topic error:', error);
      return [];
    }

    return data;
  },
};
