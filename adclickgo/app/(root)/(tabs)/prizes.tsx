import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

const Prizes = () => {
    const items = [
        { id: 1, title: "Spin & Win", icon: icons.bullsEyeIcon },
        { id: 2, title: "Raffle Tickets", icon: icons.arrowsMoveIcon },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
            {/* Header */}
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#69C52F" }}>Prizes</Text>
            </View>

            {/* Grid Section */}
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {items.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            width: "100%",
                            backgroundColor: "#F5FBF8",
                            padding: 30,
                            borderRadius: 10,
                            marginBottom: 15,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image source={item.icon} style={{ width: 40, height: 40, marginBottom: 10 }} />
                        <Text style={{ fontSize: 14, color: "#01796F", textAlign: "center" }}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Prizes;
