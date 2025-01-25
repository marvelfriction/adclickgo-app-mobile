import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

const Wallet = () => {
const transactions = [
    { id: "1", name: "Janet Doe", date: "13-11-2024", amount: "$4,500.00", status: "Success", type: "sent" },
    { id: "2", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "3", name: "Janet Doe", date: "13-11-2024", amount: "$4,500.00", status: "Success", type: "sent" },
    { id: "4", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "5", name: "Janet Doe", date: "13-11-2024", amount: "$4,500.00", status: "Success", type: "sent" },
    { id: "6", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "7", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "8", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "9", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "10", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "11", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
    { id: "12", name: "Janet Doe", date: "12-06-2024", amount: "$2,500.00", status: "Success", type: "received" },
];

    return (
        <SafeAreaView style={{ paddingHorizontal: 15, flex: 1, backgroundColor: "white" }}>
            {/* Balance Section */}
            <View
                style={{
                    backgroundColor: "#69C52F",
                    borderRadius: 10,
                    padding: 20,
                    marginBottom: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "white", fontSize: 16, marginBottom: 10, marginRight:10 }}>Total Balance</Text>
                        <TouchableOpacity style={{ marginRight: 10 }}>
                            <Image source={icons.eyeFillIcon} style={{ width: 24, height: 24, tintColor: "white" }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>$20,000.00</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            paddingVertical: 5,
                            paddingHorizontal: 15,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ color: "#69C52F", fontWeight: "bold" }}>Deposit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Action Buttons */}
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 20 }}>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <View style={{ backgroundColor:"#CBEABD", padding:12, borderRadius: 12 }}>
                        <Image source={icons.bankIcon} style={{ width: 30, height: 30 }} />
                    </View>
                    <Text style={{ color: "#01796F", marginTop: 10, fontSize: 15 }}>To Balance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <View style={{ backgroundColor:"#CBEABD", padding:12, borderRadius: 12 }}>
                        <Image source={icons.memberIcon} style={{ width: 30, height: 30 }} />
                    </View>
                    <Text style={{ color: "#01796F", marginTop: 10, fontSize: 15 }}>To Other Member</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: "center" }}>
                    <View style={{ backgroundColor:"#CBEABD", padding:12, borderRadius: 12 }}>
                        <Image source={icons.withdrawIcon} style={{ width: 30, height: 30 }} />
                    </View>
                    <Text style={{ color: "#01796F", marginTop: 10, fontSize: 15 }}>Withdraw</Text>
                </TouchableOpacity>
            </View>

            {/* Recent Transactions */}
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#01796F", marginBottom: 10 }}>Recent Transactions</Text>
            <ScrollView>
                {transactions.map((transaction) => (
                    <View
                        key={transaction.id}
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "white",
                            padding: 15,
                            borderRadius: 10,
                            marginBottom: 10,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.2,
                            shadowRadius: 1,
                            elevation: 2,
                        }}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image
                                source={transaction.type === "sent" ? icons.debitIcon : icons.creditIcon}
                                style={{
                                    width: 40,
                                    height: 40,
                                    marginRight: 10,
                                    tintColor: transaction.type === "sent" ? "red" : "#69C52F",
                                }}
                            />
                            <View style={{ gap:5 }}>
                                <Text style={{ fontSize: 16, color: "#01796F" }}>{transaction.name}</Text>
                                <Text style={{ fontSize: 12, color: "#01796F" }}>{transaction.date}</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "flex-end", gap:5 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#01796F" }}>{transaction.amount}</Text>
                            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#69C52F" }}>{transaction.status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Wallet;
