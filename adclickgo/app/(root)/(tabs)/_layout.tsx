import React, { useState } from "react";
import { Tabs } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context"
import { View, Image, ImageSourcePropType, TouchableOpacity, Text, StatusBar } from "react-native"
import { icons } from "@/constants";
// import { ButtonProps } from "@/types/type";
import Sidebar from "@/components/Sidebar";

interface TabIconProps {
    source: ImageSourcePropType;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({
    source,
    focused,
}) => (
    <View style={{ display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", borderRadius:14 }}>
        <View style={{ width:40, height:40, alignItems:"center", justifyContent:"center" }}>
            <Image
                source={source}
                tintColor={ focused ? "#69C52F" : ""}
                resizeMode="contain"
                style={{ width:35, height:35 }}
            />
        </View>
    </View>
)

interface HeaderTabProps {
    toggleSidebar: () => void;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ toggleSidebar }) => {
    return (
      <View
        style={{
          position: "relative",
          top: 20,
          height: 15,
          // flex: 1,
          zIndex: 100,
          paddingHorizontal:15,
          marginTop: 19,
          marginBottom: 30,
        }}>
        <StatusBar barStyle="dark-content" translucent={true} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width:"100%",
            backgroundColor: "white",

          }}>
          <TouchableOpacity onPress={toggleSidebar} style={{ flex:1, flexDirection:"row", gap:6, backgroundColor:"#E1E9E7", padding:8, marginRight:170, borderRadius:10, alignItems:"center" }}>
            <Image source={icons.menuIcon} style={{ width: 24, height: 24 }} />
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#69C52F" }}>
              Dashboard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor:"#E1E9E7", padding:8, borderRadius:10 }}>
            <Image
              source={icons.settingsIcon}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setSidebarOpen((prev) => !prev);
    };

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* Fixed Header */}
        <HeaderTab toggleSidebar={toggleSidebar} />

        {/* Sidebar */}
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

        {/* Tab Navigation */}
        <Tabs
          initialRouteName="home"
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "white",
            tabBarShowLabel: true,
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#01796F",
            },
            tabBarStyle: {
              backgroundColor: "white",
              paddingBottom: 10,
              height: 78,
              borderColor: "gray",
            },
          }}>
          <Tabs.Screen
            name="home"
            options={{
              title: "Home",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} source={icons.tabHomeIcon} />
              ),
              // tabBarLabel: ({ color, focused }) => {
            }}
          />
          <Tabs.Screen
            name="wallet"
            options={{
              title: "Wallet",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} source={icons.tabWalletIcon} />
              ),
            }}
          />
          <Tabs.Screen
            name="prizes"
            options={{
              title: "Prizes",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} source={icons.tabPrizesIcon} />
              ),
            }}
          />
          <Tabs.Screen
            name="team"
            options={{
              title: "Team",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} source={icons.tabTeamIcon} />
              ),
            }}
          />
        </Tabs>
      </View>
    );
};
export default Layout;
