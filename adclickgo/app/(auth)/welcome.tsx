import CustomButton from "@/components/CustomButton";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { images } from "@/constants";

const Onboarding = () => (
  <SafeAreaView
    style={{
      height: "100%",
      backgroundColor: "#69C52F",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position:"relative"
    }}>
    <View style={{ padding:"6%" }}>
      <Text style={{ color: "#FFFFFF", fontFamily: "Jakarta-ExtraBold", fontSize:40 }}>
        Supercharge Your Ad Campaigns with Precision and Insight
      </Text>
      <Text style={{ fontSize:20, marginTop:20, color:"white", }}>
        Unlock the power of data-driven marketing with Adclickgo, the ultimate
        platform for optimizing ad performance across channels.
      </Text>
    </View>

    <Image style={{ height:"80%", zIndex:-1, position:"absolute", bottom:1 }} source={images.womanSmile} resizeMode="contain" />

    <CustomButton
      title="Get Started"
      onPress={() => router.replace("/(auth)/sign-in")}
      backgroundColor="#01796F"
    />

    <Link href="/sign-in" style={{ fontSize:20 }}>
      <Text style={{ color:"white" }}>Have an account? </Text>
      <Text style={{ color:"green", textDecorationLine:"underline" }}>Log In</Text>
    </Link>
  </SafeAreaView>
);

export default Onboarding;