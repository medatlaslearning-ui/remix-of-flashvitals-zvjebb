
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
      const errorMsg = 'Medical content must be at least 10 characters.';
      console.log('[useOpenAI] Validation error:', errorMsg);
      setState({ status: 'error', data: null, error: errorMsg });
      return null;
    }
    
    if (userQuery.length < 3) {
      const errorMsg = 'User query must be at least 3 characters.';
      console.log('[useOpenAI] Validation error:', errorMsg);
      setState({ status: 'error', data: null, error: errorMsg });
      return null;
    }
    
    setState({ status: 'loading', data: null, error: null });
    
    try {
      console.log('[useOpenAI] Calling generate-conversational-response edge function');
      console.log('[useOpenAI] Medical content length:', medicalContent.length);
      console.log('[useOpenAI] User query:', userQuery);
      
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
        console.error('[useOpenAI] Edge function error:', JSON.stringify(error, null, 2));
        const errorMsg = error.message || error.details || JSON.stringify(error);
        throw new Error(errorMsg);
      }

      if (!data) {
        console.error('[useOpenAI] No data returned from Edge Function');
        throw new Error('No data returned from Edge Function');
      }

      const result = data as OpenAIResult;
      
      if (!result.conversationalText) {
        console.error('[useOpenAI] No conversational text in response');
        throw new Error('No conversational text in response');
      }
      
      console.log('[useOpenAI] Success:', {
        model: result.model,
        duration: result.duration_ms,
        tokens: result.tokens?.total,
        textLength: result.conversationalText.length,
      });
      
      setState({ status: 'success', data: result, error: null });
      return result;
    } catch (e: any) {
      console.error('[useOpenAI] Error:', e);
      console.error('[useOpenAI] Error details:', JSON.stringify(e, null, 2));
      const errorMessage = e?.message ?? String(e) ?? 'Unknown error';
      setState({ status: 'error', data: null, error: errorMessage });
      return null;
    }
  }, []);

  const loading = state.status === 'loading';
  const error = state.status === 'error' ? state.error : null;
  const data = state.status === 'success' ? state.data : null;

  return { generateConversationalResponse, loading, error, data, reset };
}
