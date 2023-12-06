import invariant from 'tiny-invariant';

/**
 * Returns the Supabase client keys.
 *
 * @returns {Object} An object containing the Supabase URL and anonymous key.
 *
 * @throws {Error} Throws an error if the Supabase URL or anonymous key is not provided in the environment variables.
 */
export default function getSupabaseClientKeys() {
  const env = process.env;

  invariant(env.NEXT_PUBLIC_SUPABASE_URL, `Supabase URL not provided`);

  invariant(
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    `Supabase Anon Key not provided`,
  );

  return {
    url: env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1c25taXp3a25kam92cXdwc2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzQxNzYsImV4cCI6MjAxNzM1MDE3Nn0.dP8AVlOJG5vqUQc4PDB8rRl14qOWxVOKmmMRudOyJqw',
  };
}
