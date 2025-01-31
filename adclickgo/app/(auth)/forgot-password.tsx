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
  ScrollView,
} from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ padding: 20, alignItems: "center" }}>
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                  marginBottom: 60,
                }}>
                {/* Back Button */}
                <TouchableOpacity
                  onPress={() => {
                    router.back();
                  }}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                  }}>
                  <Image
                    source={icons.backArrow}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                {/* Header Text */}
                <Text
                  style={{
                    fontSize: 18,
                    color: "#38889D",
                    // marginLeft: 0,
                    fontWeight: "bold",
                  }}>
                  Forgot Password
                </Text>
              </View>

              {/* Description Text */}
              <Text
                style={{
                  color: "#38889D",
                  fontSize: 20,
                  lineHeight: 30,
                  textAlign: "center",
                  marginBottom: 40,
                }}>
                It happens... Please enter your email to reset the password.
              </Text>

              {/* Email/Phone Input */}
              <View style={{ width: "100%", marginBottom: 30 }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#01796F",
                    marginBottom: 10,
                  }}>
                  Email Address/Phone No.
                </Text>
                <TextInput
                  placeholder="Enter your email address"
                  placeholderTextColor="#aaa"
                  style={{
                    width: "100%",
                    height: 60,
                    paddingHorizontal: 15,
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

              {/* Reset Password Button */}
              <TouchableOpacity
                onPress={() => {
                  router.push("/(auth)/reset-password");
                }}
                style={{
                  width: "100%",
                  height: 60,
                  backgroundColor: "#69C52F",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                  }}>
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
