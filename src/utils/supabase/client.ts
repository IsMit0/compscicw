import { createBrowserClient } from "@supabase/ssr";

// Validate environment variables at runtime
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error(
        "Missing Supabase environment variables. " +
        "Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
    );
}

/**
 * Creates a Supabase browser client.
 * This should only be used in client components or browser code.
 */
export const createClient = () =>
    createBrowserClient(supabaseUrl, supabaseKey);