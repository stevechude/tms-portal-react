import axios from "axios";
import {
  createAccountType,
  forgotPasswordType,
  loginAccountType,
  verifyOtpType,
} from "../types/auth";
const devURL = import.meta.env.VITE_API_BASE_URL;

// CREATE ACCOUNT REQUEST
export const CreateAccount = async (body: createAccountType) => {
  try {
    const response = await axios.post(`${devURL}/Merchant/create`, body, {
      headers: {
        Accept: "application/vnd.connect.v1+json",
        "Content-Type": "application/json",
      },
    });
    const data = response;
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// LOGIN REQUEST
export const LoginService = async (body: loginAccountType) => {
  try {
    const response = await axios.post(`${devURL}/Authentication/login`, body, {
      headers: {
        Accept: "application/vnd.connect.v1+json",
        "Content-Type": "application/json",
      },
    });
    const data = response;
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// FORGOT PASSWORD REQUEST
export const ForgotPasswordService = async (body: forgotPasswordType) => {
  try {
    const response = await axios.post(
      `${devURL}/Authentication/forget-password`,
      body,
      {
        headers: {
          Accept: "application/vnd.connect.v1+json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = response;
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// VERIFY OTP REQUEST
export const VerifyOtpService = async (body: verifyOtpType) => {
  try {
    const response = await axios.post(
      `${devURL}/Authentication/verify-email`,
      body,
      {
        headers: {
          Accept: "application/vnd.connect.v1+json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = response;
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
