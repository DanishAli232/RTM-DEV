// import { createBrowserClient } from '@supabase/ssr';

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
import invariant from 'tiny-invariant';
// import type { Database } from '~/database.types';

let client: ReturnType<typeof createClient>;

/**
 * @name getSupabaseBrowserClient
 * @description Get a Supabase client for use in the Browser
 */
function getSupabaseBrowserClient() {
  if (client) {
    return client;
  }

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  invariant(SUPABASE_URL, `Supabase URL was not provided`);
  invariant(SUPABASE_ANON_KEY, `Supabase Anon key was not provided`);

  client = createClient(SUPABASE_URL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1c25taXp3a25kam92cXdwc2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzQxNzYsImV4cCI6MjAxNzM1MDE3Nn0.dP8AVlOJG5vqUQc4PDB8rRl14qOWxVOKmmMRudOyJqw');

  return client;
}

export default getSupabaseBrowserClient;
