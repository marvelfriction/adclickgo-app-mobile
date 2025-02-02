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
  ScrollView,
} from "react-native";
// import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CountryData from "./country_dial.json";
import { signup } from "@/services/endpoints";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    first_name: "",
    last_name: "",
    gender: "",
    sponsor: "",
    phone: "",
    country: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (name: string, value: string) => {
    // If the username is being updated, it will also update the sponsor field
    if (name === "username") {
      setForm({ ...form, username: value, sponsor: value });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async () => {
    // // Pass the email as a parameter
    // router.push({
    //   pathname: "/(auth)/email-verification",
    //   params: { email: form.email },
    // });
    try {
        const requestData = {
        ...form,
        };
        console.log(requestData)

        const response = await signup(requestData);
        if (response.success === true) {
          console.log("Signup Response:", response);
          // Pass the email as a parameter while navigating to the email-verification screen
          router.push({
            pathname: "/(auth)/email-verification",
            params: { email: form.email },
          });
        } else {
            alert(response.message)
            console.log("Signup Response:", response);
        }

    } catch (error: string | any) {
        console.error("Signup Error:", error);
        // alert(error.errors[0].message);
        // alert("An error occurred during signup. Please try again.");
        alert(error.error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                paddingHorizontal: "6%",
                width: "100%",
                alignItems: "center",
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#01796F",
                  marginVertical: 10,
                }}>
                Create An Account
              </Text>
              <Text
                style={{ fontSize: 16, color: "#01796F", marginBottom: 15 }}>
                Be sure to provide correct details.
              </Text>

              {/* Username */}
              <View style={{ width: "100%", marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
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
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
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
                  value={form.first_name}
                  onChangeText={(value) =>
                    handleInputChange("first_name", value)
                  }
                />
              </View>

              {/* Last Name */}
              <View style={{ width: "100%", marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
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
                  value={form.last_name}
                  onChangeText={(value) =>
                    handleInputChange("last_name", value)
                  }
                />
              </View>

              {/* Gender */}
              <View style={{ width: "100%", marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                  Gender
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#ddd",
                    borderRadius: 8,
                    backgroundColor: "#F8F8F8",
                    height: 50,
                  }}>
                  <RNPickerSelect
                    onValueChange={(value) =>
                      handleInputChange("gender", value)
                    }
                    items={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                  />
                </View>
              </View>

              {/* Country */}
              <View style={{ width: "100%", marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                  Select Country
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#ddd",
                    borderRadius: 8,
                    backgroundColor: "#F8F8F8",
                    height: 50,
                  }}>
                  <RNPickerSelect
                    onValueChange={(value) =>
                      handleInputChange("country", value)
                    }
                    items={CountryData.map((country, index) =>
                      country.dial_code
                        ? {
                            label: `${country.name} (${country.dial_code})`,
                            value: country.dial_code,
                            id: index
                          }
                        : { label: country.name, value: country.dial_code }
                    )}
                  />
                </View>
              </View>

              {/* Email */}
              <View style={{ width: "100%", marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
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
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
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
                  value={form.phone}
                  onChangeText={(value) => handleInputChange("phone", value)}
                  keyboardType="phone-pad"
                />
              </View>

              {/* Password */}
              <View style={{ width: "100%", marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
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

              {/*Confirm Password */}
              <View style={{ width: "100%", marginBottom: 15 }}>
                <Text
                  style={{ fontSize: 16, color: "#01796F", marginBottom: 5 }}>
                  Confirm Password
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
                  placeholder="Confirm password"
                  placeholderTextColor="#aaa"
                  value={form.password_confirmation}
                  onChangeText={(value) =>
                    handleInputChange("password_confirmation", value)
                  }
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
                onPress={handleSubmit}>
                <Text
                  style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                  Create Account
                </Text>
              </TouchableOpacity>

              {/* Login Link */}
              <Link href="/sign-in" style={{ marginVertical: 20 }}>
                <Text style={{ fontSize: 16, color: "#01796F" }}>
                  Have an account?{" "}
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      color: "#69C52F",
                    //   marginBottom: 10,
                    }}>
                    Login Now
                  </Text>
                </Text>
              </Link>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
