import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"

const SuccessPage = () => {
    const router = useRouter();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                padding: 20
            }}
        >
            {/* Main Content */}
            <Image
                source={icons.congratsSuccess}
                style={{ width: 360, height: 360, marginBottom: 40 }}
                resizeMode="contain"
            />
            <Text
                style={{
                    fontSize: 34,
                    fontWeight: "900",
                    color: "#38889D",
                    textAlign: "center",
                    marginBottom: 20,
                }}
            >
                Congratulations
            </Text>
            <Text
                style={{
                    fontSize: 18,
                    color: "#38889D",
                    textAlign: "center",
                    marginBottom: 30,
                }}
            >
                Your Account setup has been completed
            </Text>

            {/* Confirm Button */}
            <TouchableOpacity
                onPress={() => router.push("/(root)/home")}
                style={{
                    width: "100%",
                    paddingVertical: 15,
                    backgroundColor: "#69C52F",
                    borderRadius: 10,
                    position:"absolute",
                    bottom: "9%"
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
        </SafeAreaView>
    );
};

export default SuccessPage;