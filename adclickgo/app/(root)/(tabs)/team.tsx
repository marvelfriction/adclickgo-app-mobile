import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

const Team = () => {
    const items = [
        { id: 1, title: "Your Team", icon: icons.peopleIcon },
        { id: 2, title: "Ranks", icon: icons.arrowsMoveIcon },
        { id: 3, title: "Referral Income", icon: icons.coinIcon },
        { id: 4, title: "WorldWide views", icon: icons.hurricaneIcon },
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
            {/* Header */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <TouchableOpacity>
                    <Image source={icons.menuIcon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#69C52F" }}>Team</Text>
                <TouchableOpacity>
                    <Image source={icons.settingsIcon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>

            {/* Grid Section */}
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                {items.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={{
                            width: "47%",
                            backgroundColor: "#F5FBF8",
                            paddingVertical: 20,
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

export default Team;
