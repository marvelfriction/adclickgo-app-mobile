import { View, TouchableOpacity, Text, Image } from "react-native";
import { icons } from "@/constants";
import { router } from "expo-router";

const BackButton = () => {
  return (
    <View>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10,
        }}>
        <Image
          source={icons.backArrow}
          style={{ width: 24, height: 24 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
export default BackButton;