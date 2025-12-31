export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      follow_up_selections: {
        Row: {
          created_at: string
          id: string
          prompt_category: string | null
          response_id: string
          selected_prompt: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          prompt_category?: string | null
          response_id: string
          selected_prompt: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          prompt_category?: string | null
          response_id?: string
          selected_prompt?: string
          user_id?: string
        }
        Relationships: []
      }
      guideline_sources: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_approved: boolean | null
          last_reviewed_date: string | null
          medical_system: string
          organization_acronym: string
          organization_name: string
          updated_at: string
          website_url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_approved?: boolean | null
          last_reviewed_date?: string | null
          medical_system: string
          organization_acronym: string
          organization_name: string
          updated_at?: string
          website_url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_approved?: boolean | null
          last_reviewed_date?: string | null
          medical_system?: string
          organization_acronym?: string
          organization_name?: string
          updated_at?: string
          website_url?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      response_audit_log: {
        Row: {
          created_at: string
          id: string
          medical_system: string | null
          response_id: string
          response_metadata: Json | null
          sources_consulted: Json | null
          topic: string | null
          user_id: string
          user_query: string
        }
        Insert: {
          created_at?: string
          id?: string
          medical_system?: string | null
          response_id: string
          response_metadata?: Json | null
          sources_consulted?: Json | null
          topic?: string | null
          user_id: string
          user_query: string
        }
        Update: {
          created_at?: string
          id?: string
          medical_system?: string | null
          response_id?: string
          response_metadata?: Json | null
          sources_consulted?: Json | null
          topic?: string | null
          user_id?: string
          user_query?: string
        }
        Relationships: []
      }
      response_feedback: {
        Row: {
          comment: string | null
          created_at: string
          feedback_type: Database["public"]["Enums"]["feedback_type"]
          id: string
          response_id: string
          response_system: string | null
          response_topic: string | null
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          feedback_type: Database["public"]["Enums"]["feedback_type"]
          id?: string
          response_id: string
          response_system?: string | null
          response_topic?: string | null
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          feedback_type?: Database["public"]["Enums"]["feedback_type"]
          id?: string
          response_id?: string
          response_system?: string | null
          response_topic?: string | null
          user_id?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          plan_name: string | null
          started_at: string
          status: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_name?: string | null
          started_at?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          plan_name?: string | null
          started_at?: string
          status?: Database["public"]["Enums"]["subscription_status"]
          trial_ends_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      topic_source_mappings: {
        Row: {
          created_at: string
          guideline_source_id: string
          id: string
          medical_system: string
          notes: string | null
          priority: number | null
          topic_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          guideline_source_id: string
          id?: string
          medical_system: string
          notes?: string | null
          priority?: number | null
          topic_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          guideline_source_id?: string
          id?: string
          medical_system?: string
          notes?: string | null
          priority?: number | null
          topic_name?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_source_mappings_guideline_source_id_fkey"
            columns: ["guideline_source_id"]
            isOneToOne: false
            referencedRelation: "guideline_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          created_at: string
          id: string
          learning_style: Database["public"]["Enums"]["learning_style"] | null
          preferred_systems: string[] | null
          response_depth: Database["public"]["Enums"]["response_depth"] | null
          show_clinical_pearls: boolean | null
          show_follow_up_prompts: boolean | null
          show_guidelines: boolean | null
          updated_at: string
          user_id: string
          verbosity: Database["public"]["Enums"]["verbosity_level"] | null
        }
        Insert: {
          created_at?: string
          id?: string
          learning_style?: Database["public"]["Enums"]["learning_style"] | null
          preferred_systems?: string[] | null
          response_depth?: Database["public"]["Enums"]["response_depth"] | null
          show_clinical_pearls?: boolean | null
          show_follow_up_prompts?: boolean | null
          show_guidelines?: boolean | null
          updated_at?: string
          user_id: string
          verbosity?: Database["public"]["Enums"]["verbosity_level"] | null
        }
        Update: {
          created_at?: string
          id?: string
          learning_style?: Database["public"]["Enums"]["learning_style"] | null
          preferred_systems?: string[] | null
          response_depth?: Database["public"]["Enums"]["response_depth"] | null
          show_clinical_pearls?: boolean | null
          show_follow_up_prompts?: boolean | null
          show_guidelines?: boolean | null
          updated_at?: string
          user_id?: string
          verbosity?: Database["public"]["Enums"]["verbosity_level"] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_most_consulted_sources: {
        Args: { check_user_id: string }
        Returns: {
          consultation_count: number
          organization_name: string
        }[]
      }
      get_sources_for_topic: {
        Args: { system?: string; topic: string }
        Returns: {
          organization_acronym: string
          organization_name: string
          priority: number
          website_url: string
        }[]
      }
      get_user_feedback_stats: {
        Args: { check_user_id: string }
        Returns: Json
      }
      get_user_query_history: {
        Args: { check_user_id: string; limit_count?: number }
        Returns: {
          created_at: string
          medical_system: string
          response_id: string
          sources_consulted: Json
          topic: string
          user_query: string
        }[]
      }
      has_premium_access: { Args: { check_user_id: string }; Returns: boolean }
    }
    Enums: {
      feedback_type: "thumbs_up" | "thumbs_down"
      learning_style: "visual" | "textual" | "mixed" | "case_based"
      response_depth: "brief" | "standard" | "detailed" | "comprehensive"
      subscription_status: "trial" | "active" | "expired" | "cancelled"
      verbosity_level: "concise" | "moderate" | "verbose"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      feedback_type: ["thumbs_up", "thumbs_down"],
      learning_style: ["visual", "textual", "mixed", "case_based"],
      response_depth: ["brief", "standard", "detailed", "comprehensive"],
      subscription_status: ["trial", "active", "expired", "cancelled"],
      verbosity_level: ["concise", "moderate", "verbose"],
    },
  },
} as const
