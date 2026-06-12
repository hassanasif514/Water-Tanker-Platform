const express = require("express");
const cors = require("cors");

const env = require("./config/env");
const registerModules = require("./modules");

const app = express();

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true
  })
);

app.use(express.json());

registerModules(app);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Route not found"
  });
});

module.exports = app;