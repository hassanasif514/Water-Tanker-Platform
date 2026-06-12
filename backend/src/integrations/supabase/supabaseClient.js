const { createClient } = require("@supabase/supabase-js");
const env = require("../../config/env");

const supabase = createClient(
  env.supabase.url,
  env.supabase.anonKey
);

const supabaseAdmin = createClient(
  env.supabase.url,
  env.supabase.serviceRoleKey
);

module.exports = {
  supabase,
  supabaseAdmin
};