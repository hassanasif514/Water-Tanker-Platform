const healthRoutes = require("./health/health.routes");
const authRoutes = require("./auth/auth.routes");


const registerModules = (app) => {
  app.use("/api/v1/health", healthRoutes);
   app.use("/api/v1/auth", authRoutes);
};

module.exports = registerModules;