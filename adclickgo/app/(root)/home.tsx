import {
    Text,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { router } from "expo-router"

const Home = () => {
    // const router = useRouter();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                padding: 20
            }}
        >
            <Text
                style={{
                    fontSize: 34,
                    fontWeight: "900",
                    color: "#38889D",
                    textAlign: "center",
                    marginBottom: 20,
                }}
            >
                Home
            </Text>
            <Text
                style={{
                    fontSize: 18,
                    color: "#38889D",
                    textAlign: "center",
                    marginBottom: 30,
                }}
            >
                Welcome Home
            </Text>

            {/* Confirm Button */}
            <TouchableOpacity
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

export default Home;