import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const ForgotPassword = () => {

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
        style={{
          width: "100%",
          marginTop: "10%",
          position: "relative",
          paddingHorizontal: "8%",
        }}>
        <View
          style={{
            width: "100%",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom:10,
          }}>
          <Image
            style={{ width: "7%" }}
            source={icons.backArrow}
            resizeMode="contain"
          />
          <Text style={{ color: "#38889D" }}>Forgot Password</Text>
        </View>

        <Text
          style={{
            color: "#38889D",
            fontSize: 25,
            lineHeight: 30,
            textAlign: "center",
          }}>
          It happens... Please enter your email to reset the password.
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ marginVertical: 20, width: "100%" }}>
            <Text style={{ fontSize: 20, color: "#01796F", marginBottom: 16 }}>
              Email Address/Phone No.
            </Text>
            <TextInput
              placeholder="Enter your email address"
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

      <CustomButton title="Reset Password" backgroundColor="#69C52F" />
    </SafeAreaView>
  );
};

export default ForgotPassword;
