
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://oxhslfwdqwqugmgk.supabase.co';
const SUPABASE_KEY = 'c3064bfb7ca5862865dcd4de30d375c9';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
