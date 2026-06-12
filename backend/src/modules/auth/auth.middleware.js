const { supabase } = require("../../integrations/supabase/supabaseClient");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Access denied. No token provided."
      });
    }

    const token = authHeader.split(" ")[1];

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Invalid or expired token"
      });
    }

    req.user = {
      id: data.user.id,
      email: data.user.email
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      statusCode: 401,
      message: "Authentication failed"
    });
  }
};

module.exports = {
  protect
};