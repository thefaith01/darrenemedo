import { createClient, SupabaseClient } from "@supabase/supabase-js";

/*
 * Server-side Supabase client. SUPABASE_SERVICE_KEY is never sent to the
 * browser — this module must only be imported from API routes or server
 * components. Without keys the app runs in demo mode (SureStep pattern):
 * contact messages are logged instead of stored.
 */

let client: SupabaseClient | null = null;

export function hasSupabase(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY);
}

function getClient(): SupabaseClient {
  if (!client) {
    client = createClient(
      process.env.SUPABASE_URL as string,
      process.env.SUPABASE_SERVICE_KEY as string
    );
  }
  return client;
}

export async function saveContactMessage(input: {
  name: string;
  email: string;
  message: string;
}): Promise<{ demo: boolean }> {
  if (!hasSupabase()) {
    console.log("[demo mode] contact message (not stored):", input);
    return { demo: true };
  }
  const { error } = await getClient().from("messages").insert(input);
  if (error) throw new Error(`Supabase insert failed: ${error.message}`);
  return { demo: false };
}
