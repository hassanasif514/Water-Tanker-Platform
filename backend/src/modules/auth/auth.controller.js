const authService = require("./auth.service");

const {
  validateCustomerSignup,
  validateLogin,
  validateCustomerProfileUpdate
} = require("./auth.validation");

const signupCustomer = async (req, res) => {
  try {
    const body = req.body || {};

    const validationError = validateCustomerSignup(body);

    if (validationError) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: validationError
      });
    }

    const result = await authService.signupCustomer(body);

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Customer account created successfully",
      user: {
        id: result.id,
        email: result.email,
        customerType: result.customerType
      },
      session: result.session
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      statusCode: error.statusCode || 500,
      message: error.message
    });
  }
};

const loginCustomer = async (req, res) => {
  try {
    const body = req.body || {};

    const validationError = validateLogin(body);

    if (validationError) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: validationError
      });
    }

    const result = await authService.loginCustomer(body);

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Customer login successful",
      token: result.token,
      refreshToken: result.refreshToken,
      user: result.user
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      statusCode: error.statusCode || 500,
      message: error.message
    });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await authService.getCurrentCustomer(
      req.user.id,
      req.user.email
    );

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Customer profile fetched successfully",
      user
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      statusCode: error.statusCode || 500,
      message: error.message
    });
  }
};

const updateCustomerProfile = async (req, res) => {
  try {
    const body = req.body || {};

    const validationError = validateCustomerProfileUpdate(body);

    if (validationError) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: validationError
      });
    }

    const updatedProfile = await authService.updateCustomerProfile(
      req.user.id,
      body
    );

    return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Customer profile updated successfully",
      user: updatedProfile
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      statusCode: error.statusCode || 500,
      message: error.message
    });
  }
};

const logoutCustomer = async (req, res) => {
  return res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Customer logged out successfully. Remove token from client storage."
  });
};

module.exports = {
  signupCustomer,
  loginCustomer,
  getMe,
  updateCustomerProfile,
  logoutCustomer
};