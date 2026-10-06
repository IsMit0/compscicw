import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";


async function getSupabaseClient() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    return supabase;
}

export default async function Install() {
    const supabase = await getSupabaseClient()
    const { data, error } = await supabase.from('tblcustomer').insert({ username: 4 });
    return (
        <div>
            <h1>Insert Attempt Successful</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );

}