import { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import Modal from "react-native-modal";
import kycVerifiedBro from "../assets/images/Verified-bro.png";

const [isModalVisible, setModalVisible] = useState(true);
const toggleModal = () => {
  setModalVisible(!isModalVisible);
};
const CustomModalPop = () => (
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
                  onPress={toggleModal}
                >
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
                  source={kycVerifiedBro}
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
                  //onPress={toggleModal}
                >
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

);

export default CustomModalPop;