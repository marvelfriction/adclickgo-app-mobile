import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "@/types/type";

const CustomButton = ({ title, backgroundColor, ...props }: ButtonProps) => (
  <TouchableOpacity
    {...props}
    style={{ display:"flex", marginTop:240, flexDirection:"row", justifyContent:"center", alignContent:"center", width:"86%", padding:"3%", backgroundColor:`${backgroundColor}`, borderRadius:15 }}>
    <Text style={{ textAlign:"center", fontFamily:"Jakarta-ExtraBold", fontSize:20, color: "white" }}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;