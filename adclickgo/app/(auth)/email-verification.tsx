import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard,
} from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"
import { OtpInput } from "react-native-otp-entry";

const EmailVerification = () => {
    const router = useRouter();
    const [otp, setOtp] = useState("");

    // Handle OTP Change
    const handleOtpChange = (text: string) => {
        setOtp(text);
    };

    // When OTP is completely filled
    const handleOtpFilled = (text: string) => {
        console.log(`OTP is ${text}`);
    };

    const handleConfirm = () => {
        if (otp.length === 6) {
            console.log(`Final OTP Submitted: ${otp}`);
            router.push("/(auth)/success");
        } else {
            console.warn("Please complete the OTP input!");
            alert("Please complete the OTP input!");
        }
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
            }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1, width: "100%", alignItems:"center", padding:20, position:"relative" }}>
                    {/* Header */}
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            width: "100%",
                            marginBottom: 60,
                        }}
                    >
                        {/* Back Button */}
                        <TouchableOpacity
                            onPress={() => {router.back()}}
                            style={{
                                width: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: 10,
                            }}
                        >
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
                                fontWeight: "bold"
                            }}
                        >
                            Email Verification
                        </Text>
                    </View>

                    {/* Main Content */}
                    <Text
                        style={{
                            fontSize: 34,
                            fontWeight: "500",
                            color: "#38889D",
                            textAlign: "center",
                            marginBottom: 10,
                        }}
                    >
                        Please enter the code
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            color: "#38889D",
                            textAlign: "center",
                            marginBottom: 30,
                        }}
                    >
                        We sent an email to tomashuk.dima.1992@gmail.com
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
                            pinCodeTextStyle:{ color: "#69C52F", },
                        }}
                    />
                    {/* Resend Code */}
                    <Text style={{ fontSize: 16, color: "#38889D", textAlign: "center", marginTop: 15 }}>
                        Didn't get a mail?{" "}
                        <Text
                            style={{
                                color: "#69C52F",
                            }}
                        >
                            Send again
                        </Text>
                    </Text>

                    {/* Confirm Button */}
                    <TouchableOpacity
                        onPress={handleConfirm}
                        style={{
                            marginTop: 40,
                            width: "100%",
                            paddingVertical: 15,
                            backgroundColor: "#69C52F",
                            borderRadius: 10,
                            position:"absolute",
                            bottom: "5%"
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                color: "white",
                                textAlign: "center",
                                fontWeight: "bold",
                            }}
                        >
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default EmailVerification;