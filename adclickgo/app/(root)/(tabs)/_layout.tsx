import { Tabs } from "expo-router";
import { View, Image, ImageSourcePropType } from "react-native"
import { icons } from "@/constants"

const TabIcon = ({
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

const Layout = () => {
    return (
        <Tabs
            initialRouteName="home"
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                // tabBarLabelStyle: {
                //     fontSize: 12,
                //     color: "#69C52F"
                // },
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 50,
                    paddingBottom: 10,
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom:20,
                    height:78,
                    position: "absolute",
                    borderColor: "gray"
                }
            }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.tabHomeIcon} />
                    // tabBarLabel: ({ color, focused }) => {
                }}
            />
            <Tabs.Screen
                name="wallet"
                options={{
                    title: "Wallet",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.tabWalletIcon} />
                }}
            />
            <Tabs.Screen
                name="prizes"
                options={{
                    title: "Prizes",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.tabPrizesIcon} />
                }}
            />
            <Tabs.Screen
                name="team"
                options={{
                    title: "Team",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.tabTeamIcon} />
                }}
            />
        </Tabs>
    );
};
export default Layout;
