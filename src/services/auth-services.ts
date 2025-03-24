import axios from "axios";
import { createAccountType } from "../types/auth";
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
