import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { cache } from 'react';

import getSupabaseClientKeys from '~/core/supabase/get-supabase-client-keys';
import { Database } from '~/database.types';

/**
 * @name getSupabaseServerComponentClient
 * @description Get a Supabase client for use in the Server Components
 * @param params
 */
const getSupabaseServerComponentClient = cache(
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

    return createServerClient<Database>(keys.url, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1c25taXp3a25kam92cXdwc2hqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTc3NDE3NiwiZXhwIjoyMDE3MzUwMTc2fQ.Ya7c0FSG_hrk3LLjG4se6RJGipWScVU98gJD-Ryw240', {
      cookies: getCookiesStrategy(),
    });
  },
);

export default getSupabaseServerComponentClient;

function getCookiesStrategy() {
  const cookieStore = cookies();

  return {
    get: (name: string) => {
      return cookieStore.get(name)?.value;
    },
  };
}
