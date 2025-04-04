import axios from "axios";
import { directorDetailsType, primaryContactType } from "../types/profile";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const devURL = import.meta.env.VITE_API_BASE_URL;

const token = cookies.get("app-tok");

export const createDirectorDetails = async (body: directorDetailsType) => {
  try {
    const response = await axios.post(`${devURL}/Merchant/director`, body, {
      headers: {
        Accept: "application/vnd.connect.v1+json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
