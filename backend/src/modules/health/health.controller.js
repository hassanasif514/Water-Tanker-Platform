const healthService = require("./health.service");

const checkHealth = (req, res) => {
  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Backend is running"
  });
};

const checkDatabaseHealth = async (req, res) => {
  try {
    const database = await healthService.checkDatabaseConnection();

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Supabase database connected successfully",
      database
    });
  } catch (error) {
    console.log("DATABASE HEALTH CHECK ERROR:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      statusCode: error.statusCode || 500,
      message: "Supabase database connection failed",
      error: error.message,
      details: error.details || null
    });
  }
};

module.exports = {
  checkHealth,
  checkDatabaseHealth
};