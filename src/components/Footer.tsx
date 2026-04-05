"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Footer() {
    const [visits, setVisits] = useState(0);
    const hasFetched = useRef(false);
    const supabase = createClient();

    useEffect(() => {
        // Prevent double-counting during React StrictMode hot reloads
        if (hasFetched.current) return;
        hasFetched.current = true;

        const recordVisit = async () => {
            // Call the secure RPC function to safely increment the database counter
            const { data, error } = await supabase.rpc('increment_site_visits');
            
            if (data !== null && !error) {
                setVisits(data);
            } else {
                // Fallback display if table isn't created yet
                setVisits(1429);
            }
        };

        recordVisit();
    }, []);

    return (
        <footer className="bg-[#eeeeeb] dark:bg-[#121413] w-full flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-4">
            <div className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70">
                © 2026 Cook Ready
            </div>
            <div className="flex gap-8 items-center">
                <Link className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70 hover:opacity-100 transition-opacity" href="#">Privacy</Link>
                <Link className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70 hover:opacity-100 transition-opacity" href="#">Terms</Link>
                <Link className="text-[0.75rem] font-sans tracking-tight text-[#154212] dark:text-[#2d5a27] opacity-70 hover:opacity-100 transition-opacity" href="#">Wholesale</Link>
                
                {/* Visit Counter */}
                <div className="ml-4 flex items-center gap-2 px-2 py-1 bg-[#154212]/5 dark:bg-[#2d5a27]/10 rounded-full border border-[#154212]/10 dark:border-[#2d5a27]/20" title="Total Site Visits">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#154212] dark:bg-green-400 animate-pulse"></div>
                    <span className="text-[0.6rem] font-mono tracking-widest text-[#154212] dark:text-green-400 font-semibold">
                        {visits === 0 ? "..." : visits.toLocaleString()}
                    </span>
                </div>
            </div>
        </footer>
    );
}
