import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import { sendEmailVerificationOtp, verifyEmail } from "@/services/endpoints";

const EmailVerification = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const { email } = useLocalSearchParams();
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  // Handle OTP Change
  const handleOtpChange = (text: string) => {
    setOtp(text);
  };

  // When OTP is completely filled
  const handleOtpFilled = (text: string) => {
    console.log(`OTP is ${text}`);
  };

  const handleSendEmailOtp = async () => {
    try {
      const response = await sendEmailVerificationOtp({ email: `${email}` });
      console.log(response);
      setTimeRemaining(30); // Reset the timer
      setIsResendDisabled(true); // Disable the Resend button again
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handleConfirm = async () => {
    if (otp.length === 6) {
      try {
        const response = await verifyEmail({ code: otp, email: `${email}` });
        if (response.success === true) {
          router.replace("/(auth)/success");
          console.log(response.message);
        }
      } catch (error) {
        console.error("Verify Email Error:", error);
        alert(error);
      }
    } else {
      // console.warn("Please complete the OTP input!");
      alert("Please complete the OTP input!");
    }
  };

  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval); // Stop the timer when it reaches 0
          setIsResendDisabled(false); // Enable the Resend button
          return 0;
        }
        return prevTime - 1; // Decrement the timer by 1 second
      });
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format the time into MM:SS
  const formatTime = (timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

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
                    width: 10,
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
                    marginLeft: 20,
                    fontWeight: "bold",
                  }}>
                  Email Verification
                </Text>
              </View>

              {/* Main Content */}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "500",
                  color: "#38889D",
                  textAlign: "center",
                  marginBottom: 10,
                }}>
                Please enter the code
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#38889D",
                  textAlign: "center",
                  marginBottom: 30,
                }}>
                We sent an email to {email}
              </Text>

              <Image
                source={icons.mail}
                style={{ width: 60, height: 60, marginBottom: 40 }}
                resizeMode="contain"
              />

              {/* Code Input Fields */}
              <OtpInput
                numberOfDigits={6}
                focusColor="green"
                focusStickBlinkingDuration={500}
                onTextChange={handleOtpChange}
                onFilled={handleOtpFilled}
                textInputProps={{
                  accessibilityLabel: "One-Time Password",
                }}
                theme={{
                  pinCodeTextStyle: { color: "#69C52F" },
                }}
              />

              {/* Resend Code */}
              <View style={{ marginTop: 20, flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "#38889D",
                    textAlign: "center",
                  }}>
                  Didn't get a mail?{" "}
                </Text>

                <TouchableOpacity
                  onPress={() => handleSendEmailOtp}
                  disabled={isResendDisabled} // Disable the button when the timer is active
                  style={{ opacity: isResendDisabled ? 0.5 : 1 }}>
                  <Text
                    style={{
                      color: "#69C52F",
                      fontSize: 18,
                    }}>
                    Resend
                  </Text>
                </TouchableOpacity>
              </View>
              
              {/* Display the countdown timer */}
              <View>
                {isResendDisabled && (
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#38889D",
                      marginLeft: 10,
                    }}>
                    ({formatTime(timeRemaining)})
                  </Text>
                )}
              </View>

              {/* Confirm Button */}
              <TouchableOpacity
                onPress={handleConfirm}
                style={{
                  marginTop: 40,
                  width: "100%",
                  paddingVertical: 15,
                  backgroundColor: "#69C52F",
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EmailVerification;
