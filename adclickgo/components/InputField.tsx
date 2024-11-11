import { KeyboardAvoidingView, Text, TouchableWithoutFeedback, View, Image, TextInput, Platform, Keyboard } from "react-native"
import { InputFieldProps } from "@/types/type";

const InputField = ({ label, secureTextEntry=false, ...props}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={{ marginVertical: "2%", width: "100%" }}>
        <Text style={{ fontSize: 20, marginBottom:"3%" }}>
            {label}
        </Text>
        <TextInput
            placeholderTextColor="#aaa"
          // style={{ width:"100%", borderBlockColor:"black", borderRadius: 9, padding:4, flex:1, textAlign:"left", backgroundColor:"ash" }}
          {...props}
        />
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;