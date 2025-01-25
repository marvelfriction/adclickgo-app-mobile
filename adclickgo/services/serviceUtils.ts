import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
  return AsyncStorage.getItem("token");
};

export const storeToken = async (token: string) => {
  await AsyncStorage.setItem("token", token);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("token");
};