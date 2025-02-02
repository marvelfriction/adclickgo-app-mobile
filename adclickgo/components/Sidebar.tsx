import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { Link, router } from "expo-router";
import { icons } from "@/constants";
import { logout } from "@/services/endpoints";
import { useAuth } from "@/services/useAuth";
import { removeToken } from "@/services/serviceUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height } = Dimensions.get("window");

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar }) => {
  const { user } = useAuth();
  // console.log(user)

    const handleLogout = async () => {
      // console.log(AsyncStorage.getItem("token"))
      try {
        const response = await logout();
        console.log("Logout Info:", response);
        if (response.success === true) {
          removeToken();        
          router.replace("/(auth)/sign-in");
        }
      } catch (error: string | any) {
        console.error("Logout Error:", error);
        alert(error);
      }
    };

  return (
    <View
      style={{
        width: 280,
        // flex: 1,
        height: height,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#69C52F",
        padding: 16,
        zIndex: 1000,
      }}>
      {/* Header */}
      <View
        style={{
          alignItems: "center",
          marginBottom: 20,
          //   flexDirection: "row",
        }}>
        {/* Close Button */}
        <TouchableOpacity
          onPress={toggleSidebar}
          style={{ position: "absolute", right: 0, top: -16, padding: 10 }}>
          <Text
            style={{
              fontSize: 35,
              color: "white",
              fontWeight: "bold",
            }}>
            ×
          </Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Example avatar
          }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom:25
          }}>
          Welcome {user?.first_name || "User"}
        </Text>
        {/*<Text style={{ color: "white", marginTop: 5 }}>User Level: 0</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Text
              key={index}
              style={{
                fontSize: 20,
                color: index === 0 ? "yellow" : "white",
                marginHorizontal: 2,
              }}>
              ★
            </Text>
          ))}
        </View> */}
      </View>

      {/* Menu Items */}
      <View>
        <SidebarItem
          icon={icons.tabHomeIcon}
          label="Dashboard"
          href="/(root)/(tabs)/home"
        />
        <SidebarItem icon={icons.tabWalletIcon} label="Wallet" href="/(root)/(tabs)/wallet" />
        <SidebarItem icon={icons.tabPrizesIcon} label="Prizes" href="/(root)/(tabs)/prizes" />
        <SidebarItem
          icon={icons.tabPrizesIcon}
          label="Banner + Adpack"
          href="/(root)/(tabs)/home"
        />
        <SidebarItem icon={icons.tabTeamIcon} label="Team" href="/(root)/(tabs)/team" />
      </View>
      {/* Footer */}
      <TouchableOpacity
        onPress={handleLogout}
        style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Text style={{ color: "pink", marginLeft: 10, fontSize: 18 }}>
            Log Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SidebarItem = ({
  icon,
  label,
  href,
}: {
  icon: any;
  label: string;
  href: any;
//   style: any
}) => {
  return (
    <Link href={href}>
      <TouchableOpacity
        onPress={() => router.push(href)}
        style={{
          flexDirection: "row",
          flex: 1,
          width: "100%",
          alignItems: "center",
          paddingBottom: 30,
        }}>
        <Image
          source={icon}
          style={{ width: 30, height: 30, tintColor: "white", marginRight: 10 }}
          resizeMode="contain"
          alt="sidebar-icons"
        />
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginLeft: 10,
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Sidebar;
