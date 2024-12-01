import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
            >
                {/* Head Banner */}
                <View>
                    <Image
                        source={images.dashboardImage0}
                        resizeMode="contain"
                        style={{ height: 140, width: 380, marginTop: 10 }}
                    />
                </View>

                {/* Event Details */}
                <View
                    style={{
                        backgroundColor: "white",
                        padding: 15,
                        borderRadius: 10,
                        width: "90%",
                        marginTop: 20,
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFA117" }}>
                        Presentatie Myimpulse
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#666",
                            marginTop: 5,
                            textAlign: "center",
                        }}
                    >
                        Zaterdag 26/10/2024 om 14u {"\n"}Adres: Fritruru Banneux
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "#FFA117",
                            marginTop: 5,
                        }}
                    >
                        https://friturenbxburgers.be/
                    </Text>
                </View>

                {/* Stats Section */}
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "90%",
                        marginTop: 20,
                        justifyContent: "space-between",
                    }}
                >
                    {[
                        { label: "Active Adpack", value: "183" },
                        { label: "Closed Adpack", value: "114" },
                        { label: "Deposit Amount", value: "$590" },
                        { label: "Total Income Balance", value: "$38,373.00", highlight: true },
                        { label: "Adpack Bonus", value: "$9" },
                        { label: "Raffle Tickets", value: "11" },
                        { label: "Fast Cash Bonus", value: "$0" },
                        { label: "Promotion Running", value: "Spin and Win", highlight: true },
                    ].map((item, index) => (
                        <View
                            key={index}
                            style={{
                                backgroundColor: item.highlight ? "#E9F9EE" : "white",
                                padding: 15,
                                borderRadius: 10,
                                width: "47%",
                                marginBottom: 10,
                                alignItems: "center",
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 4,
                                elevation: 2,
                                borderWidth: 1,
                                borderColor: "#01796F",
                            }}
                        >
                            <Text style={{ fontSize: 16, color: "#01796F", textAlign: "center" }}>
                                {item.label}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: item.highlight ? "#01796F" : "#444",
                                    marginTop: 5,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                {item.value}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* Surf Section */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "white",
                        padding: 15,
                        borderRadius: 12,
                        width: "90%",
                        marginTop: 10,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                        elevation: 2,
                    }}
                >
                    <View style={{ alignItems: "flex-start" }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: "red",
                                fontWeight: "bold",
                                marginBottom: 5,
                            }}
                        >
                            Surf Now
                        </Text>
                        <Text style={{ fontSize: 14, color: "#444" }}>00 h 00 m 00 s</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#69C52F",
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 10,
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
                            Transfer Clicks
                        </Text>
                        <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>260</Text>
                    </TouchableOpacity>
                </View>

                {/* Footer Banner */}
                <View>
                    <Image
                        source={images.dashboardImage1}
                        resizeMode="contain"
                        style={{ height: 140, width: 380, marginTop: 10 }}
                    />
                </View>

                {/* Recent Transactions */}
                <View
                    style={{
                        backgroundColor: "white",
                        padding: 15,
                        borderRadius: 10,
                        width: "90%",
                        marginTop: 20,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 10,
                        }}
                    >
                        <Text style={{ fontSize: 16, color: "#01796F", fontWeight: "bold" }}>
                            Recent Transactions
                        </Text>
                        <Text
                            style={{
                                color: "#FFA117",
                                textDecorationLine: "underline",
                            }}
                        >
                            See all
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 5,
                        }}
                    >
                        <Text style={{ fontSize: 16, color: "#69C52F", fontWeight: "bold" }}>
                            ID
                        </Text>
                        <Text
                            style={{
                                color: "#69C52F",
                            }}
                        >
                            Amount
                        </Text>
                    </View>
                    {[
                        { id: "RTR7384397", amount: "$297,380" },
                        { id: "RTR7384397", amount: "$297,380" },
                        { id: "RTR7384397", amount: "$297,380" },
                    ].map((item, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 5,
                            }}
                        >
                            <Text style={{ fontSize: 14, color: "#FFA117" }}>{item.id}</Text>
                            <Text style={{ fontSize: 14, color: "#01796F", fontWeight:"bold" }}>{item.amount}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
