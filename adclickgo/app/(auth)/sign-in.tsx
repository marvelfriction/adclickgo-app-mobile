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
// import CustomButton from "@/components/CustomButton";
// import InputField from "@/components/InputField";
import { Link } from "expo-router";

const SignIn = () => {
    const [form, setForm] = useState({
        email:"",
        password:"",
    })
    return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ alignItems: "center", justifyContent:"center", padding: "4%" }}>

                    <View
                        style={{ width: "100%", marginBottom:25 }}>
                        <Image
                            style={{ width: "70%", margin: "auto" }}
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
                    <View style={{ marginVertical: 20, width: "auto" }}>
                        <Text style={{ fontSize: 20, color: "#01796F", marginBottom: 6 }}>
                            Username
                        </Text>
                        <TextInput
                            placeholder="Enter Username/Email"
                            placeholderTextColor="#aaa"
                            value={form.email}
                            onChangeText={(value) => setForm({ ...form, email: value })}
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
                    <View style={{ marginBottom: 20, width: "auto" }}>
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
                    <Link href={"/(auth)/forgot-password"}>
                        <View style={{ width:360, alignSelf:"flex-start", paddingLeft:7 }}>
                            <Text
                                style={{
                                    color: "#69C52F",
                                    textDecorationLine: "underline",
                                    fontSize: 20,
                                }}>
                                Forgot Password?
                            </Text>
                        </View>
                    </Link>

                    <TouchableOpacity
                        style={{ marginTop:80, marginBottom:50, width:"95%", padding:"3%", backgroundColor:"#69C52F", borderRadius:15 }}>
                        <Text style={{ textAlign:"center", fontFamily:"Jakarta-ExtraBold", fontSize:20, color: "white" }}>Login</Text>
                    </TouchableOpacity>

                    <Link href="/sign-up" style={{ fontSize: 20 }}>
                        <Text style={{ color: "#38889D" }}>Don't have an account? </Text>
                        <Text style={{ color: "#69C52F", textDecorationLine: "underline" }}>
                            Create Account
                        </Text>
                    </Link>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default SignIn;
