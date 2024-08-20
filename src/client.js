import { createClient } from '@supabase/supabase-js';

const URL = "https://wlidofbwkncgqcdqieec.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsaWRvZmJ3a25jZ3FjZHFpZWVjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMzY5OTAyMiwiZXhwIjoyMDM5Mjc1MDIyfQ.t6fBiBD2Cc5syW0op7fwb2h4Ykg2bDfVpkMRCPm6Ebw"
const supabase = createClient(URL, API_KEY);
export default supabase;