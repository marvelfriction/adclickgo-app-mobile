import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="sign-up" options={{ headerShown: false }} />
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
            <Stack.Screen name="reset-password" options={{ headerShown: false }} />
            <Stack.Screen name="email-verification" options={{ headerShown: false }} />
            <Stack.Screen name="success" options={{ headerShown: false }} />
        </Stack>
    );
};
export default Layout;
