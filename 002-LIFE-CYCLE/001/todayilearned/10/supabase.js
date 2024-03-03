import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qxosoecsxixvhmkjvokb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF4b3NvZWNzeGl4dmhta2p2b2tiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NTEwMzAsImV4cCI6MjAyNDQyNzAzMH0.7DJ1eHuYO-L5Sz8QOoo2DK9M0QrUgqUL8leGYC90hrs";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
