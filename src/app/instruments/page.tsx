import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import { cookies } from 'next/headers'

async function InstrumentsData() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    const { data: instruments, error } = await supabase.from("instruments").select();

    if (error) {
        return <p>Error loading instruments: {error.message}</p>;
    }

    return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}

export default function Instruments() {
    return (
        <Suspense fallback={<div>Loading instruments...</div>}>
            <InstrumentsData />
        </Suspense>
    );
}
