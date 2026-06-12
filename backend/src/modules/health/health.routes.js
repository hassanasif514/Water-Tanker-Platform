const express = require("express");

const {
  checkHealth,
  checkDatabaseHealth
} = require("./health.controller");

const router = express.Router();

router.get("/", checkHealth);
router.get("/database", checkDatabaseHealth);

module.exports = router;