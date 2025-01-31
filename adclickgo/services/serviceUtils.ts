import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token: string) => {
  await AsyncStorage.setItem("authToken", token);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("authToken");
};

export const getToken = async () => {
  const authToken = await AsyncStorage.getItem("authToken");
  // const authToken = token ? JSON.parse(token) : null;
  return authToken
  // return token;
};


// import * as SecureStore from "expo-secure-store";

// export const storeToken = async (token: string) => {
//   await SecureStore.setItemAsync("token", token); // Must be a string
// };

// export const removeToken = async () => {
//   await SecureStore.deleteItemAsync("token");
// };

// export const getToken = async () => {
//   const token = await SecureStore.getItemAsync("token");
//   const authToken = token ? JSON.parse(token) : null;
//   return authToken
// };