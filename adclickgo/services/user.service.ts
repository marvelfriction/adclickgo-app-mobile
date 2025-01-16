// // src/services/api.ts
// export const API_BASE_URL = "https://adclickgo.org/api/mobile";

// export const register = async (email: string, password: string) => {
//   const response = await fetch(`${API_BASE_URL}/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message || "Registration failed");
//   }

//   return response.json();
// };

// export const login = async (email: string, password: string) => {
//   const response = await fetch(`${API_BASE_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message || "Login failed");
//   }

//   return response.json();
// };
