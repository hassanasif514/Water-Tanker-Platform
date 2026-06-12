const { supabaseAdmin } = require("../../integrations/supabase/supabaseClient");

const checkDatabaseConnection = async () => {
  const { data, count, error } = await supabaseAdmin
    .from("profiles")
    .select("id", {
      count: "exact",
      head: true
    });

  if (error) {
    console.log("SUPABASE DATABASE ERROR:", error);

    const dbError = new Error(error.message || "Supabase query failed");
    dbError.statusCode = 500;
    dbError.details = error;
    throw dbError;
  }

  return {
    connected: true,
    table: "profiles",
    profileCount: count
  };
};

module.exports = {
  checkDatabaseConnection
};