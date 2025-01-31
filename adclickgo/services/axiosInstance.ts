import axios from "axios";
// import * as SecureStore from "expo-secure-store";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { getToken } from "./serviceUtils";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem("token");
    const authToken = await getToken();
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage =
      error.response?.data?.message || error.response?.data || error.message;
    return Promise.reject(errorMessage); // Ensure the error is always a string
  }
);

export default axiosInstance;
