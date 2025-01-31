import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard, TouchableOpacity,
} from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const ResetPassword = () => {
    const router = useRouter()

    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ alignItems: "center", justifyContent:"center", padding: "3%" }}
                >
                    <View
                        style={{
                            width: "100%",
                            position: "relative",
                        }}>
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

                        <Text
                            style={{
                                color: "#38889D",
                                fontSize: 23,
                                lineHeight: 30,
                                textAlign: "center",
                            }}>
                            Kindly enter your new password below.
                        </Text>
                    </View>
                    <View style={{ marginTop: 50, width: "100%", alignItems:"center", paddingHorizontal:"4%" }}>
                        <Text style={{ alignSelf:"flex-start", fontSize: 20, color: "#01796F", marginBottom: 4 }}>
                            Enter New Password
                        </Text>
                        <TextInput
                            placeholder="Enter password"
                            placeholderTextColor="#aaa"
                            style={{
                                width: "100%",
                                
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
                    <View style={{ marginTop:20, marginBottom: 50, width: "100%", alignItems:"center", paddingHorizontal:"4%" }}>
                        <Text style={{ alignSelf:"flex-start", fontSize: 20, color: "#01796F", marginBottom: 4 }}>
                            Confirm New Password
                        </Text>
                        <TextInput
                            placeholder="Confirm password"
                            placeholderTextColor="#aaa"
                            style={{
                                width: "100%",
                                padding: 18,
                                borderWidth: 1,
                                borderColor: "#ddd",
                                borderRadius: 10,
                                backgroundColor: "#F8F8F8",
                                fontSize: 16,
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                elevation: 3,
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        style={{
                            marginTop: 40,
                            width: "93%",
                            paddingVertical: 15,
                            backgroundColor: "#69C52F",
                            borderRadius: 10,
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
                            Reset Password
                        </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );
};
export default ResetPassword;
