require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

console.log("Checking environment variables...");

console.log("SUPABASE_URL exists:", !!process.env.SUPABASE_URL);
console.log("SUPABASE_ANON_KEY exists:", !!process.env.SUPABASE_ANON_KEY);
console.log("SUPABASE_SERVICE_ROLE_KEY exists:", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log(
  "SERVICE ROLE KEY START:",
  process.env.SUPABASE_SERVICE_ROLE_KEY
    ? process.env.SUPABASE_SERVICE_ROLE_KEY.slice(0, 15)
    : "missing"
);

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  }
);

const testConnection = async () => {
  console.log("Testing Supabase profiles table...");

  const { data, error, status, statusText } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .limit(1);

  console.log("STATUS:", status);
  console.log("STATUS TEXT:", statusText);
  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    console.log("Supabase connection failed.");
    return;
  }

  console.log("Supabase connection successful.");
};

testConnection();