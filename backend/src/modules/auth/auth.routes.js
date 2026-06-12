const express = require("express");

const {
  signupCustomer,
  loginCustomer,
  getMe,
  updateCustomerProfile,
  logoutCustomer
} = require("./auth.controller");

const { protect } = require("./auth.middleware");

const router = express.Router();

router.post("/customer/signup", signupCustomer);

router.post("/customer/login", loginCustomer);

router.get("/customer/me", protect, getMe);

router.put("/customer/profile", protect, updateCustomerProfile);

router.post("/customer/logout", protect, logoutCustomer);

module.exports = router;