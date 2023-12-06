import { CookieOptions, createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { cache } from 'react';

import { Database } from '~/database.types';
import getSupabaseClientKeys from './get-supabase-client-keys';

/**
 * @name getSupabaseRouteHandlerClient
 * @description Get a Supabase client for use in the Route Handler Routes
 * @param params
 */
const getSupabaseRouteHandlerClient = cache(
  (
    params = {
      admin: false,
    },
  ) => {
    const keys = getSupabaseClientKeys();

    if (params.admin) {
      const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (!serviceRoleKey) {
        throw new Error('Supabase Service Role Key not provided');
      }

      return createServerClient<Database>(keys.url, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1c25taXp3a25kam92cXdwc2hqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTc3NDE3NiwiZXhwIjoyMDE3MzUwMTc2fQ.Ya7c0FSG_hrk3LLjG4se6RJGipWScVU98gJD-Ryw240', {
        auth: {
          persistSession: false,
        },
        cookies: {},
      });
    }

    return createServerClient<Database>(keys.url, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1c25taXp3a25kam92cXdwc2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzQxNzYsImV4cCI6MjAxNzM1MDE3Nn0.dP8AVlOJG5vqUQc4PDB8rRl14qOWxVOKmmMRudOyJqw', {
      cookies: getCookiesStrategy(),
    });
  },
);

export default getSupabaseRouteHandlerClient;

function getCookiesStrategy() {
  const cookieStore = cookies();

  return {
    set: (name: string, value: string, options: CookieOptions) => {
      cookieStore.set({ name, value, ...options });
    },
    get: (name: string) => {
      return cookieStore.get(name)?.value;
    },
    remove: (name: string, options: CookieOptions) => {
      cookieStore.set({ name, value: '', ...options });
    },
  };
}
