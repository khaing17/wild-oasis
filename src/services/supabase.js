import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://chjqlevfpvtbmhgbjxxr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoanFsZXZmcHZ0Ym1oZ2JqeHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1NjY3ODcsImV4cCI6MjAxMjE0Mjc4N30.JUiPPd2Iju3nj2G_O322PaZUkTfexk7w8i0Jk8jfHuY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
