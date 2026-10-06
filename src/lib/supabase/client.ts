import { createBrowserClient } from "@supabase/ssr";
import { useSession } from '@clerk/nextjs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function useSupabaseClient() {
    const { session } = useSession()
    const supabaseClient = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            accessToken: async () => session?.getToken() ?? null,
        }
    )
    return supabaseClient
}