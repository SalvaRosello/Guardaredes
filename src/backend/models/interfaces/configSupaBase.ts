import { createClient } from "@supabase/supabase-js";

export function createUser() {
    const SUPABASE_URL = process.env.SUPABASE_URL || '';
    const SUPABASE_KEY = process.env.SUPABASE_KEY || '';
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
}