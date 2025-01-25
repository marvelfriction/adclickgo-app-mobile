import {View, Text, Image, TouchableOpacity} from "react-native";
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
      <Text style={{ color: "#FFFFFF", fontFamily: "Jakarta-ExtraBold", fontSize:30 }}>
        Supercharge Your Ad Campaigns with Precision and Insight
      </Text>
      <Text style={{ fontSize:18, marginTop:20, color:"white", }}>
        Unlock the power of data-driven marketing with Adclickgo, the ultimate
        platform for optimizing ad performance across channels.
      </Text>
    </View>

    <Image style={{ height:800, zIndex:-1, position:"absolute", bottom:-80 }} source={images.womanSmile} resizeMode="contain" />

      <TouchableOpacity
          onPress={() => router.replace("/(auth)/sign-in")}
          style={{ justifyContent:"center", alignContent:"center", width:"86%", marginTop:410, padding:"4%", backgroundColor:"#01796F", borderRadius:15 }}>
          <Text style={{ textAlign:"center", fontFamily:"Jakarta-ExtraBold", fontSize:20, color: "white" }}>Get Started</Text>
      </TouchableOpacity>

    <Link href="/sign-in" style={{ fontSize:20, paddingBottom:30 }}>
      <Text style={{ color:"white" }}>Have an account? </Text>
      <Text style={{ color:"green", textDecorationLine:"underline" }}>Log In</Text>
    </Link>
  </SafeAreaView>
);

export default Onboarding;