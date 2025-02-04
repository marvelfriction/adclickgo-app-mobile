import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { images } from "@/constants";
import Modal from "react-native-modal";
import { userDashboardData } from "@/services/endpoints";

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(true);
  const [dashboardInfo, setDashboardInfo] = useState([])
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60); // 24 hours in seconds

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // User Dashboard data
  useEffect(() => {
    const getUserDashboardData = async () => {
      try {
        const response = await userDashboardData();
        if (response.success === true){
          setDashboardInfo(response.data)
          console.log(response.data)
        }
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
    getUserDashboardData();
  }, [])
  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval); // Stop the timer when it reaches 0
          return 0;
        }
        return prevTime - 1; // Decrement the timer by 1 second
      });
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format the time into HH:MM:SS
  const formatTime = (timeInSeconds: any) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, "0")} h ${String(minutes).padStart(
      2,
      "0"
    )} m ${String(seconds).padStart(2, "0")} s`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 10 }}>
        <Modal
          isVisible={isModalVisible}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              width: "95%",
              height: 350,
              alignItems: "center",
              padding: 18,
              borderRadius: 10,
            }}>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 12,
                padding: 20,
                alignItems: "center",
                width: "90%",
                position: "relative",
              }}>
              {/* Close Button */}
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1,
                }}
                onPress={toggleModal}>
                <Text
                  style={{
                    fontSize: 24,
                    color: "black",
                    fontWeight: "bold",
                  }}>
                  ×
                </Text>
              </TouchableOpacity>

              {/* Image */}
              <Image
                source={images.kycVerifiedBro}
                style={{
                  width: 120,
                  height: 120,
                  marginBottom: 20,
                }}
                resizeMode="contain"
              />

              {/* Title */}
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#01796F",
                  textAlign: "center",
                  marginBottom: 10,
                }}>
                Verify Your Identity
              </Text>

              {/* Description */}
              <Text
                style={{
                  fontSize: 14,
                  color: "gray",
                  textAlign: "center",
                  marginBottom: 20,
                  lineHeight: 20,
                }}>
                Enhance your account security and gain full access to features
                by completing your KYC process. It’s quick and easy!
              </Text>

              {/* Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#69C52F",
                  paddingVertical: 12,
                  paddingHorizontal: 40,
                  borderRadius: 8,
                }}
                onPress={() =>
                  WebBrowser.openBrowserAsync(
                    process.env.EXPO_PUBLIC_API_BASE_URL + "/settings/kyc"
                  )
                }>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "white",
                  }}>
                  Complete KYC
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Head Banner */}
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={images.dashboardImage0}
            resizeMode="contain"
            style={{ height: 120, width: 360, borderRadius: 10 }}
          />
        </TouchableOpacity>

        {/* Event Details */}
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            width: "90%",
            marginTop: 20,
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFA117" }}>
            Presentatie Myimpulse
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#666",
              marginTop: 5,
              textAlign: "center",
            }}>
            Zaterdag 26/10/2024 om 14u {"\n"}Adres: Fritruru Banneux
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#FFA117",
              marginTop: 5,
            }}>
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
          }}>
          {[
            { label: "Active Adpack", value: "183" },
            { label: "Closed Adpack", value: "114" },
            { label: "Deposit Amount", value: "$590" },
            {
              label: "Total Income Balance",
              value: "$38,373.00",
              highlight: true,
            },
            { label: "Adpack Bonus", value: "$9" },
            { label: "Raffle Tickets", value: "11" },
            { label: "Fast Cash Bonus", value: "$0" },
            {
              label: "Promotion Running",
              value: "Spin and Win",
              highlight: true,
            },
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
                // borderWidth: 1,
                borderColor: "#01796F",
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#01796F",
                  textAlign: "center",
                }}>
                {item.label}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#01796F",
                  marginTop: 5,
                  fontWeight: "bold",
                  textAlign: "center",
                }}>
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
          }}>
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 16,
                color: "#01796F",
                fontWeight: "bold",
                marginBottom: 5,
              }}>
              Surf Now
            </Text>
            <View
              style={{
                backgroundColor: "#DF1313",
                paddingHorizontal: 8,
                paddingVertical:5,
                borderRadius: 5,
              }}>
              <Text
                style={{ fontSize: 17, color: "white", fontWeight: "bold" }}>
                {formatTime(timeRemaining)} {/* Display the formatted time */}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#69C52F",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              alignItems: "center",
            }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
              Transfer Clicks
            </Text>
            <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
              260
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer Banner */}
        <View>
          <Image
            source={images.dashboardImage1}
            resizeMode="contain"
            style={{ height: 140, width: 360, marginTop: 10 }}
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
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}>
            <Text
              style={{ fontSize: 16, color: "#01796F", fontWeight: "bold" }}>
              Recent Transactions
            </Text>
            <Text
              style={{
                color: "#FFA117",
                textDecorationLine: "underline",
              }}>
              See all
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}>
            <Text
              style={{ fontSize: 16, color: "#69C52F", fontWeight: "bold" }}>
              ID
            </Text>
            <Text
              style={{
                color: "#69C52F",
              }}>
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
              }}>
              <Text style={{ fontSize: 14, color: "#FFA117" }}>{item.id}</Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#01796F",
                  fontWeight: "bold",
                }}>
                {item.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
