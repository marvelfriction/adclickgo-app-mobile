import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
// import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

const Team = () => {
    const items = [
      {
        id: 1,
        title: "Your Team",
        icon: icons.peopleIcon,
        url: "/team",
      },
      {
        id: 2,
        title: "Ranks",
        icon: icons.arrowsMoveIcon,
        url: "/team/ranks",
      },
      {
        id: 3,
        title: "Referral Income",
        icon: icons.coinIcon,
        url: "/team/income",
      },
      {
        id: 4,
        title: "WorldWide views",
        icon: icons.hurricaneIcon,
        url: "/team/view",
      },
      {
        id: 5,
        title: "Event",
        icon: icons.eventIcon,
        url: "/events",
      },
    ];

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
        {/* Grid Section */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}>
          {items.map((item) => (
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  process.env.EXPO_PUBLIC_API_BASE_URL + item.url
                )
              }
              key={item.id}
              style={{
                width: "47%",
                backgroundColor: "#F5FBF8",
                paddingVertical: 20,
                borderRadius: 10,
                marginBottom: 15,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Image
                source={item.icon}
                style={{ width: 40, height: 40, marginBottom: 10, backgroundColor:"01796F" }}
              />
              <Text
                style={{ fontSize: 14, color: "#01796F", textAlign: "center" }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
};

export default Team;
