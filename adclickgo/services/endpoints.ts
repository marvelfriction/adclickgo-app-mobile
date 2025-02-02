import axiosInstance from "./axiosInstance";
import { removeToken, storeToken } from "./serviceUtils";

// API Functions
const endpoints = {
  call: async (
    endpointUrl: string,
    method: "get" | "post" | "put" | "delete",
    params?: any
  ) => {
    try {
      const response = await axiosInstance[method](endpointUrl, params);
      return response.data;
    } catch (error: string | any) {
      console.error("API Call Error:", error);
      throw error;    }
  },
};

// ALL ENDPOINTS

// Login

export const login = async (
  values: { username: string; password: string },
) => {
  const response = await endpoints.call("/api/auth/login", "post", values);
  storeToken(response.data.token);
  return response;
};

// Register 
export const signup = async (values: {
  username: string;
  first_name: string;
  last_name: string;
  gender: string;
  sponsor: string;
  phone: string;
  country: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const response = await endpoints.call("/api/auth/register", "post", values);
    return response;
  } catch (error) {
    throw error;
  }
};

// Logout
export const logout = async () => {
  try {
    // Call logout API FIRST (while token is still available)
    const response = await endpoints.call("/api/logout", "post");
    // THEN remove the token from client
    removeToken();
    return response;
  } catch (error) {
    // Handle errors, but still remove the token locally
    removeToken();
    throw error;
  }
};

//Send Email Verification OTP
export const sendEmailVerificationOtp = async (values: { email: string }) => {
  try {
    const response = await endpoints.call("/api/auth/send-email-verification", "post", values);
    return response;
  } catch (error) {
    throw error;
  }
};

//Verify Email
export const verifyEmail = async (values: { code: string; email: string }) => {
  try {
    const response = await endpoints.call("/api/auth/verify-email", "post", values);
    return response;
  } catch (error) {
    throw error;
  }
};

// User details
export const userDetails = async () => {
  try {
    const response = await endpoints.call("/api/user/details", "get");
    return response;
  } catch (error) {
    throw error;
  }
};

// User Dashboard
export const userDashboard = async () => {
  try {
    const response = await endpoints.call("/api/user-dashboard", "get");
    return response;
  } catch (error) {
    throw error;
  }
};