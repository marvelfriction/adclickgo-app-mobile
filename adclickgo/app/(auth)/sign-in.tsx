import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { Link, router } from "expo-router";
import { login } from "@/services/endpoints";
import { useAuth } from "@/services/useAuth";
import { removeToken } from "@/services/serviceUtils";

const SignIn = () => {
  type loginForm = {
    username: string;
    password: string;
  };

  const [form, setForm] = useState<loginForm>({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    // removeToken();
    try {
      const response = await login(form);
      console.log("Login Successful:", response);
      console.log("Token:", response.data.token);
      if (response.success === true) {
        router.replace("/(root)/(tabs)/home");
      }
    } catch (error: string | any) {
      console.error("Login Error:", error);
      alert(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
            <View style={{ alignItems: "center", marginBottom: 35 }}>
              <Image
                style={{ width: 260, height: 150, marginBottom: -30 }}
                source={icons.welcomeBack}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: "#38889D",
                  fontSize: 18,
                  lineHeight: 30,
                  textAlign: "center",
                }}>
                Please enter Username and Password to login your account.
              </Text>
            </View>

            {/* Username Input */}
            <View style={{ marginBottom: 20, width: "100%" }}>
              <Text style={{ fontSize: 20, color: "#01796F", marginBottom: 6 }}>
                Username
              </Text>
              <TextInput
                placeholder="Enter Username/Email"
                placeholderTextColor="#aaa"
                value={form.username}
                onChangeText={(value) => setForm({ ...form, username: value })}
                style={{
                  width: "100%",
                  height: 60,
                  padding: 18,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderRadius: 10,
                  backgroundColor: "#F8F8F8",
                  // textAlign: "left",
                  fontSize: 16,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  elevation: 3, // Shadow effect for Android
                }}
              />
            </View>

            {/* Password Input */}
            <View style={{ marginBottom: 20, width: "100%" }}>
              <Text style={{ fontSize: 20, color: "#01796F", marginBottom: 6 }}>
                Password
              </Text>
              <TextInput
                placeholder="Enter Password"
                secureTextEntry={true}
                placeholderTextColor="#aaa"
                value={form.password}
                onChangeText={(value) => setForm({ ...form, password: value })}
                style={{
                  width: "100%",
                  height: 60,
                  padding: 18,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderRadius: 10,
                  backgroundColor: "#F8F8F8",
                  fontSize: 16,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  elevation: 3, // Shadow effect for Android
                }}
              />
            </View>

            {/* Forgot Password Link */}
            <Link href={"/(auth)/forgot-password"}>
              <View
                style={{
                  width: "100%",
                  alignSelf: "flex-start",
                  marginBottom: 20,
                }}>
                <Text
                  style={{
                    color: "#69C52F",
                    textDecorationLine: "underline",
                    fontSize: 18,
                    paddingBottom: 10,
                    alignSelf: "flex-start",
                  }}>
                  Forgot Password?
                </Text>
              </View>
            </Link>

            {/* Login Button */}
            <TouchableOpacity
              onPress={handleLogin}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "#69C52F",
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Jakarta-ExtraBold",
                  fontSize: 20,
                  color: "white",
                }}>
                Login
              </Text>
            </TouchableOpacity>

            {/* Create Account Link */}
            <Link href="/sign-up" style={{ fontSize: 18 }}>
              <Text style={{ color: "#38889D" }}>Don't have an account? </Text>
              <Text
                style={{ color: "#69C52F", textDecorationLine: "underline" }}>
                Create Account
              </Text>
            </Link>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
