import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Database } from './types';
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://ewcjofekvogreoorsesf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3Y2pvZmVrdm9ncmVvb3JzZXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwNTA0MjAsImV4cCI6MjA4MjYyNjQyMH0.UDT-B6Ef3CiheOs3qb1uOjF1U6Tuc0LqN-E3_x37guY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
