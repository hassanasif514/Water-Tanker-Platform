const { CUSTOMER_TYPES } = require("./auth.constants");

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateCustomerSignup = (body = {}) => {
  const { fullName, email, phoneNumber, password, customerType } = body;

  if (!fullName || !email || !phoneNumber || !password || !customerType) {
    return "Full name, email, phone number, password, and customer type are required";
  }

  if (!isValidEmail(email)) {
    return "Invalid email format";
  }

  if (!Object.values(CUSTOMER_TYPES).includes(customerType)) {
    return "Customer type must be either resident or society_manager";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }

  return null;
};

const validateLogin = (body = {}) => {
  const { email, password } = body;

  if (!email || !password) {
    return "Email and password are required";
  }

  if (!isValidEmail(email)) {
    return "Invalid email format";
  }

  return null;
};

const validateCustomerProfileUpdate = (body = {}) => {
  const { fullName, phoneNumber, customerType } = body;

  if (!fullName || !phoneNumber || !customerType) {
    return "Full name, phone number, and customer type are required";
  }

  if (!Object.values(CUSTOMER_TYPES).includes(customerType)) {
    return "Customer type must be either resident or society_manager";
  }

  return null;
};

module.exports = {
  validateCustomerSignup,
  validateLogin,
  validateCustomerProfileUpdate
};