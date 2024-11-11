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
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { Link, router } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    password:"",
  })
  return (
    <SafeAreaView
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
      <View
        style={{ width: "100%", marginTop: "10%", paddingHorizontal: "8%" }}>
        <Image
          style={{ width: "70%", margin: "auto" }}
          source={icons.welcomeBack}
          resizeMode="contain"
        />
        <Text
          style={{
            color: "#38889D",
            fontSize: 20,
            lineHeight: 30,
            textAlign: "center",
          }}>
          Please enter Username and Password to login your account.
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ marginVertical: 20, width: "100%" }}>
            <Text style={{ fontSize: 20, color: "#01796F", marginBottom: 6 }}>
              Username
            </Text>
            <TextInput
              placeholder="Enter Username"
              placeholderTextColor="#aaa"
              style={{
                width: 360,
                height: 60,
                padding: 18,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 10,
                backgroundColor: "#F8F8F8",
                textAlign: "left",
                fontSize: 16,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                elevation: 3, // Shadow effect for Android
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ marginVertical: 20, width: "100%" }}>
            <Text style={{ fontSize: 20, color: "#01796F", marginBottom: 6 }}>
              Password
            </Text>
            <TextInput
              placeholder="Enter Username"
              secureTextEntry={true}
              placeholderTextColor="#aaa"
              style={{
                width: 360,
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      {/* <InputField
        label="Password"
        placeholder="Enter password"
        secureTextEntry={true}
        value={form.password}
        // onChangeText={(value) => setForm({ ...form, password:value})}
      /> */}

      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/forgot-password");
        }}>
        <Text
          style={{
            color: "#69C52F",
            textDecorationLine: "underline",
            fontSize: 20,
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <CustomButton title="Login" backgroundColor="#69C52F" />

      <Link href="/sign-up" style={{ fontSize: 20 }}>
        <Text style={{ color: "#38889D" }}>Don't have an account? </Text>
        <Text style={{ color: "#69C52F", textDecorationLine: "underline" }}>
          Create Account
        </Text>
      </Link>
    </SafeAreaView>
  );
};

export default SignIn;
