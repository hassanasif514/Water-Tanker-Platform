const {
  supabase,
  supabaseAdmin
} = require("../../integrations/supabase/supabaseClient");

const { ACCOUNT_STATUS } = require("./auth.constants");

const signupCustomer = async (body = {}) => {
  const {
    fullName,
    email,
    phoneNumber,
    password,
    customerType
  } = body;

  const { data, error } = await supabase.auth.signUp({
    email: email.trim().toLowerCase(),
    password,
    options: {
      data: {
        full_name: fullName.trim(),
        phone_number: phoneNumber.trim(),
        customer_type: customerType
      }
    }
  });

  if (error) {
    const signupError = new Error(error.message);
    signupError.statusCode = 400;
    throw signupError;
  }

  return {
    id: data.user?.id,
    email: data.user?.email,
    session: data.session,
    customerType
  };
};

const loginCustomer = async (body = {}) => {
  const { email, password } = body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password
  });

  if (error) {
    const loginError = new Error(error.message);
    loginError.statusCode = 401;
    throw loginError;
  }

  const { data: profile, error: profileError } = await supabaseAdmin
    .from("profiles")
    .select("id, full_name, phone_number, role, customer_type, account_status")
    .eq("id", data.user.id)
    .single();

  if (profileError || !profile) {
    const errorObj = new Error("User profile not found");
    errorObj.statusCode = 404;
    throw errorObj;
  }

  if (profile.role !== "customer") {
    const errorObj = new Error("This login route is only for customers");
    errorObj.statusCode = 403;
    throw errorObj;
  }

  if (profile.account_status !== ACCOUNT_STATUS.ACTIVE) {
    const errorObj = new Error("Your account is not active");
    errorObj.statusCode = 403;
    throw errorObj;
  }

  return {
    token: data.session.access_token,
    refreshToken: data.session.refresh_token,
    user: {
      id: data.user.id,
      email: data.user.email,
      fullName: profile.full_name,
      phoneNumber: profile.phone_number,
      role: profile.role,
      customerType: profile.customer_type,
      accountStatus: profile.account_status
    }
  };
};

const getCurrentCustomer = async (userId, email) => {
  const { data: profile, error } = await supabaseAdmin
    .from("profiles")
    .select("id, full_name, phone_number, role, customer_type, account_status, created_at")
    .eq("id", userId)
    .single();

  if (error || !profile) {
    const errorObj = new Error("Customer profile not found");
    errorObj.statusCode = 404;
    throw errorObj;
  }

  if (profile.role !== "customer") {
    const errorObj = new Error("This route is only for customers");
    errorObj.statusCode = 403;
    throw errorObj;
  }

  return {
    id: profile.id,
    email,
    fullName: profile.full_name,
    phoneNumber: profile.phone_number,
    role: profile.role,
    customerType: profile.customer_type,
    accountStatus: profile.account_status,
    createdAt: profile.created_at
  };
};

const updateCustomerProfile = async (userId, body = {}) => {
  const { fullName, phoneNumber, customerType } = body;

  const { data: profile, error } = await supabaseAdmin
    .from("profiles")
    .update({
      full_name: fullName.trim(),
      phone_number: phoneNumber.trim(),
      customer_type: customerType,
      updated_at: new Date().toISOString()
    })
    .eq("id", userId)
    .eq("role", "customer")
    .select("id, full_name, phone_number, role, customer_type, account_status, updated_at")
    .single();

  if (error || !profile) {
    const errorObj = new Error(error?.message || "Customer profile update failed");
    errorObj.statusCode = 400;
    throw errorObj;
  }

  return {
    id: profile.id,
    fullName: profile.full_name,
    phoneNumber: profile.phone_number,
    role: profile.role,
    customerType: profile.customer_type,
    accountStatus: profile.account_status,
    updatedAt: profile.updated_at
  };
};

module.exports = {
  signupCustomer,
  loginCustomer,
  getCurrentCustomer,
  updateCustomerProfile
};