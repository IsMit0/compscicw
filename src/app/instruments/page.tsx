import { createClient } from "@/utils/supabase/client";
import { Suspense } from "react";

// Async server component to fetch instruments
async function InstrumentsData() {
    const supabase = createClient(); // ✅ no await needed

    const { data: instruments, error } = await supabase
        .from("instruments")
        .select();

    if (error) {
        return <div>Error loading instruments: {error.message}</div>;
    }

    return (
        <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(instruments, null, 2)}
        </pre>
    );
}

// Page component with Suspense fallback
export default function Instruments() {
    return (
        <Suspense fallback={<div>Loading instruments...</div>}>
            <InstrumentsData />
        </Suspense>
    );
}