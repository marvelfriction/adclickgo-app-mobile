import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = () => (
  <TouchableOpacity
    style={{ display:"flex", marginTop:240, flexDirection:"row", justifyContent:"center", alignContent:"center", width:"86%", padding:"3%", borderRadius:15 }}>
    <Text style={{ textAlign:"center", fontFamily:"Jakarta-ExtraBold", fontSize:20 }}>jkgbubkjnlkllj</Text>
  </TouchableOpacity>
);

export default CustomButton;