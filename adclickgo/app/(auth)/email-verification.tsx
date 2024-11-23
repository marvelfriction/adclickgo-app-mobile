import {
    View,
    Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPassword = () => {

    return (
        <SafeAreaView
            style={{
                display: "flex",
                height: "100%",
                // backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <View>
                <Text>Email Verification</Text>
            </View>
        </SafeAreaView>
    );
};

export default emailVerification;
