import axiosInstance from "./axiosInstance";

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

// Endpoint usages
export const login = async (
  value: { username: string; password: string },
  loginContext: (token: string) => void
) => {
  const response = await endpoints.call("/auth/login", "post", value);
  loginContext(response.data.token); // Call login from context
  return response;
};

export const signup = (value: {
  email: string;
  password: string;
  name: string;
}) => endpoints.call("/auth/signup", "post", value);

export const logout = async (logoutContext: () => void) => {
  await endpoints.call("/auth/logout", "post");
  logoutContext(); // Call logout from context
};
