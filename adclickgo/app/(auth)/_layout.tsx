import { Stack, Redirect } from "expo-router";
import { View, ActivityIndicator, StatusBar } from "react-native";
import { useAuth } from "@/services/useAuth";

const Layout = () => {
  const { isAuthenticated } = useAuth();

  // if (isAppLoading) {
  //   return (
  //     <View
  //       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  if (isAuthenticated) {
    return <Redirect href="/(root)/(tabs)/home" />;
  } else {<Redirect href="/(auth)/sign-in" />}

  return (
      <AuthLayoutNavigator />
  );
};
export default Layout;

function AuthLayoutNavigator() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="reset-password" />
      <Stack.Screen name="email-verification" />
      <Stack.Screen name="success" />
    </Stack>
  );
}
