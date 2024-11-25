import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from "react-native";
// import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        firstName: "",
        lastName: "",
        gender: "Male",
        country: "Belgium",
        email: "",
        phoneNumber: "+234",
        password: "",
    });

    const handleInputChange = (name:string, value:string) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = () => {
        // if (
        //     !form.username ||
        //     !form.firstName ||
        //     !form.lastName ||
        //     !form.email ||
        //     !form.phoneNumber ||
        //     !form.password
        // ) {
        //     alert("Please fill in all required fields.");
        //     return;
        // }
        router.replace("/(auth)/email-verification");
        console.log("Account Created:", form);
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
                height:"100%"
            }}
        >
            <ScrollView style={{ width: "100%", height:"100%" }}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1, width: "100%" }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View
                            style={{
                                paddingHorizontal: "6%",
                                width: "100%",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: "bold",
                                    color: "#01796F",
                                    marginVertical: 20,
                                }}
                            >
                                Create An Account
                            </Text>
                            <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 25 }}>
                                Be sure to provide correct details.
                            </Text>

                            {/* Username */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    Username
                                </Text>
                                <TextInput
                                    style={{
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        paddingHorizontal: 15,
                                        fontSize: 16,
                                        color: "#333",
                                    }}
                                    placeholder="Enter your username"
                                    placeholderTextColor="#aaa"
                                    value={form.username}
                                    onChangeText={(value) => handleInputChange("username", value)}
                                />
                            </View>

                            {/* First Name */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    First Name
                                </Text>
                                <TextInput
                                    style={{
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        paddingHorizontal: 15,
                                        fontSize: 16,
                                        color: "#333",
                                    }}
                                    placeholder="Enter your first name"
                                    placeholderTextColor="#aaa"
                                    value={form.firstName}
                                    onChangeText={(value) => handleInputChange("firstName", value)}
                                />
                            </View>

                            {/* Last Name */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    Last Name
                                </Text>
                                <TextInput
                                    style={{
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        paddingHorizontal: 15,
                                        fontSize: 16,
                                        color: "#333",
                                    }}
                                    placeholder="Enter your last name"
                                    placeholderTextColor="#aaa"
                                    value={form.lastName}
                                    onChangeText={(value) => handleInputChange("lastName", value)}
                                />
                            </View>

                            {/* Gender */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    Gender
                                </Text>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        height:50,
                                    }}
                                >
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: 'Male', value: 'Male' },
                                            { label: 'Female', value: 'Male' },
                                        ]}
                                    />
                                </View>
                            </View>

                            {/* Country */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    Select Country
                                </Text>
                                <View
                                    style={{
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        height:50,
                                    }}
                                >
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: 'Nigeria', value: 'nigeria' },
                                            { label: 'Belgium', value: 'belgium' },
                                            { label: 'United Kingdom', value: 'united kingdom' },
                                            { label: 'Ghana', value: 'ghana' },
                                        ]}
                                    />
                                </View>
                            </View>

                            {/* Email */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    Email Address
                                </Text>
                                <TextInput
                                    style={{
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        paddingHorizontal: 15,
                                        fontSize: 16,
                                        color: "#333",
                                    }}
                                    placeholder="Enter your email address"
                                    placeholderTextColor="#aaa"
                                    value={form.email}
                                    onChangeText={(value) => handleInputChange("email", value)}
                                    keyboardType="email-address"
                                />
                            </View>

                            {/* Phone Number */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    Phone Number
                                </Text>
                                <TextInput
                                    style={{
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        paddingHorizontal: 15,
                                        fontSize: 16,
                                        color: "#333",
                                    }}
                                    placeholder="Enter your phone number"
                                    placeholderTextColor="#aaa"
                                    value={form.phoneNumber}
                                    onChangeText={(value) => handleInputChange("phoneNumber", value)}
                                    keyboardType="phone-pad"
                                />
                            </View>

                            {/* Password */}
                            <View style={{ width: "100%", marginBottom: 15 }}>
                                <Text style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                                    Password
                                </Text>
                                <TextInput
                                    style={{
                                        height: 50,
                                        borderWidth: 1,
                                        borderColor: "#ddd",
                                        borderRadius: 8,
                                        backgroundColor: "#F8F8F8",
                                        paddingHorizontal: 15,
                                        fontSize: 16,
                                        color: "#333",
                                    }}
                                    placeholder="Enter password"
                                    placeholderTextColor="#aaa"
                                    value={form.password}
                                    onChangeText={(value) => handleInputChange("password", value)}
                                    secureTextEntry={true}
                                />
                            </View>

                            {/* Create Account Button */}
                            <TouchableOpacity
                                style={{
                                    width: "100%",
                                    height: 50,
                                    backgroundColor: "#69C52F",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 8,
                                    marginTop: 30,
                                }}
                                onPress={handleSubmit}
                            >
                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                                    Create Account
                                </Text>
                            </TouchableOpacity>

                            {/* Login Link */}
                            <Link href="/sign-in" style={{ marginTop: 10, marginBottom: 20 }}>
                                <Text style={{ fontSize: 16, color: "#01796F" }}>
                                    Have an account?{" "}
                                    <Text
                                        style={{
                                            textDecorationLine: "underline",
                                            color:"#69C52F"
                                        }}
                                    >
                                        Login Now
                                    </Text>
                                </Text>
                            </Link>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
