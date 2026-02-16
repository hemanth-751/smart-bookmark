import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gvpgjlflsyobklfgexmz.supabase.co";
const supabaseAnonKey = "sb_publishable_GKnTH3F30w2-iV4Zt8kLfA_-BZ0ecdC";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
