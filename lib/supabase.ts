import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type WaitlistEntry = {
  name: string;
  email: string;
  phone?: string;
  location: string;
  description: string;
  affiliation?: string;
  source: string;
  platforms: string[];
  event_interest: string;
  event_availability: string;
  early_access: string;
  inspiration?: string;
  link?: string;
};

