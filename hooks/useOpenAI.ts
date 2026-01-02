
import { useCallback, useState } from 'react';
import { supabase } from '@/app/integrations/supabase/client';

export type OpenAIParams = {
  medicalContent: string;
  userQuery: string;
  system?: string;
  temperature?: number;
  max_tokens?: number;
};

export type OpenAIResult = {
  conversationalText: string;
  duration_ms: number;
  model: string;
  tokens?: { prompt?: number; completion?: number; total?: number };
};

type State =
  | { status: 'idle'; data: null; error: null }
  | { status: 'loading'; data: null; error: null }
  | { status: 'success'; data: OpenAIResult; error: null }
  | { status: 'error'; data: null; error: string };

export function useOpenAI() {
  const [state, setState] = useState<State>({ status: 'idle', data: null, error: null });

  const reset = useCallback(() => setState({ status: 'idle', data: null, error: null }), []);

  const generateConversationalResponse = useCallback(async (params: OpenAIParams): Promise<OpenAIResult | null> => {
    const medicalContent = (params.medicalContent ?? '').trim();
    const userQuery = (params.userQuery ?? '').trim();
    
    if (medicalContent.length < 10) {
      setState({ status: 'error', data: null, error: 'Medical content must be at least 10 characters.' });
      return null;
    }
    
    if (userQuery.length < 3) {
      setState({ status: 'error', data: null, error: 'User query must be at least 3 characters.' });
      return null;
    }
    
    setState({ status: 'loading', data: null, error: null });
    
    try {
      console.log('[useOpenAI] Calling generate-conversational-response edge function');
      
      const { data, error } = await supabase.functions.invoke('generate-conversational-response', {
        body: {
          medicalContent,
          userQuery,
          system: params.system,
          temperature: params.temperature,
          max_tokens: params.max_tokens,
        },
      });

      if (error) {
        console.error('[useOpenAI] Edge function error:', error);
        throw new Error(error.message || 'Function error');
      }

      const result = data as OpenAIResult;
      
      console.log('[useOpenAI] Success:', {
        model: result.model,
        duration: result.duration_ms,
        tokens: result.tokens?.total,
      });
      
      setState({ status: 'success', data: result, error: null });
      return result;
    } catch (e: any) {
      console.error('[useOpenAI] Error:', e);
      const errorMessage = e?.message ?? 'Unknown error';
      setState({ status: 'error', data: null, error: errorMessage });
      return null;
    }
  }, []);

  const loading = state.status === 'loading';
  const error = state.status === 'error' ? state.error : null;
  const data = state.status === 'success' ? state.data : null;

  return { generateConversationalResponse, loading, error, data, reset };
}
