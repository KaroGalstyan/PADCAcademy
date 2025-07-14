import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Modal,
  Image,
  StatusBar,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import useSignUpStore from "@/app/store/useSignUpStore";
import useCountryById from "@/app/hooks/useCountryByID";
import { ScrollView } from "react-native-gesture-handler";
import api from "@/app/services/apiPublic";
import { AxiosError } from "axios";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";

type FinishSignUpSelectScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "FinishSignUp"
>;

const getUTCOffset = () => {
  const offsetMinutes = new Date().getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
  const offsetMins = Math.abs(offsetMinutes) % 60;
  const sign = offsetMinutes <= 0 ? "+" : "-";
  const formattedMins = offsetMins < 10 ? `0${offsetMins}` : offsetMins;
  return `UTC${sign}${offsetHours}:${formattedMins}`;
};

const FinishSignUp = () => {
  const navigation = useNavigation<FinishSignUpSelectScreenNavigationProp>();
  const [showModal, setShowModal] = useState(false);
  const { data } = useSignUpStore();

  const fullName = data?.fullName || "";
  const initials = fullName
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const city = data?.city || "";
  const countryId = data?.countryId ?? null;
  const { country } = useCountryById(countryId);

  const location = country ? `${city}, ${country.name}` : city;
  const timeZone = getUTCOffset();
  const dateTime = data?.test?.date ? new Date(data.test.date) : new Date();

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const courseType = data?.test?.courseType || "N/A";
  const handleFinish = async () => {
    try {
      await api.post("/auth/registration", data);

      setShowModal(true);
    } catch (error) {
      console.error("Registration error:", (error as AxiosError).response?.data);
      Alert.alert("Error", "Something went wrong during registration.");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white pt-[10px]">
      <View className="bg-[#F8F8F8] px-[20px] pt-[30px] pb-[14px]">
        <View
          className="flex-row items-center mb-5 p-4 bg-[#FFFFFF]"
          style={{
            borderLeftWidth: 5,
            borderLeftColor: "#A19FDB",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 15,

            elevation: 15,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 28,
              backgroundColor: "#F9F9F9",
              justifyContent: "center",
              alignItems: "center",

              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 4,

              elevation: 4,
            }}
            className="rounded-full bg-[#A09DD9] justify-center items-center mr-4"
          >
            <Text className="text-[#002531] text-[20px] font-poppinsBold">{initials}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-[16px] text-black font-poppinsSemiBold">{fullName}</Text>
            <View className="flex-row items-center mt-1">
              <Ionicons name="location-outline" size={15} color="gray" />
              <Text className="text-gray-500 text-[13px] ml-1">{location}</Text>
            </View>
          </View>
        </View>

        <View
          className=" p-4 mb-6 bg-[#FFFFFF]"
          style={{
            borderLeftWidth: 5,
            borderLeftColor: "#A19FDB",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 15,

            elevation: 15,
          }}
        >
          <Text className="text-black text-[20px] font-inter mb-[5px]">
            {formattedDate}, {formattedTime}{" "}
            <Text className="text-gray-500 text-[12px]">{timeZone}</Text>
          </Text>
          <Text className="text-gray-500 text-[14px] leading-[24px]">
            Course Type :{" "}
            <Text className="text-black text-[20px] leading-[24px]">
              {" "}
              {courseType.charAt(0).toUpperCase() + courseType.slice(1)}
            </Text>
          </Text>
        </View>
      </View>
      <View className="px-[20px] pt-[30px]">
        <Text className="text-[20px] font-bold mb-[20px] leading-[35px]">ABOUT OUR PRODUCT</Text>
        <Text className="text-[14px] text-[#000] mb-6 leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Pellentesque efficitur eu ex non
          blandit. Sed at lorem efficitur, pellentesque urna sed, sodales nunc. Pellentesque
          efficitur eu ex non blandit. Sed at lorem efficitur, pellentesque urna sed, sodales nunc.
        </Text>

        <Text className="text-[20px] font-bold mb-[20px] leading-[35px]">ABOUT OUR PRODUCT</Text>
        <Text className="text-[14px] text-[#000] mb-[30px] leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Pellentesque efficitur eu ex non
          blandit. Sed at lorem efficitur, pellentesque urna sed, sodales nunc. Pellentesque
          efficitur eu ex non blandit. Sed at lorem efficitur, pellentesque urna sed, sodales nunc.
        </Text>

        <TouchableOpacity
          onPress={handleFinish}
          className="rounded-xl overflow-hidden h-[50px] mb-[30px]"
        >
          <LinearGradient
            colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full h-full items-center justify-center"
          >
            <Text className="text-white font-poppinsBold text-[16px]">Finish</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showModal}
        transparent
        animationType="slide"
        onShow={() => StatusBar.setHidden(true)}
        onRequestClose={() => StatusBar.setHidden(false)}
      >
        <View
          style={StyleSheet.absoluteFill}
          className="bg-black/50 justify-center items-center px-5"
        >
          <View className="bg-white p-6 items-center w-full max-w-[300px] h-full max-h-[300px] relative">
            <TouchableOpacity
              className="absolute top-3 right-3 z-10"
              onPress={() => setShowModal(false)}
            >
              <Ionicons name="close" size={24} color="gray" />
            </TouchableOpacity>

            <Text className="text-[14px] font-bold text-center mb-[5px]">
              We’ve Sent Your Email
            </Text>
            <Text className="text-[12px] text-black text-center mb-[21px]">
              Time To Check Your Email.
            </Text>

            <Image
              source={require("../../../assets/images/email-sent.png")}
              style={{ width: 79, height: 56 }}
              resizeMode="contain"
              className="mb-[41px]"
            />

            <TouchableOpacity
              className="rounded-xl overflow-hidden h-[50px] w-full"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }
            >
              <LinearGradient
                colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="w-full h-full items-center justify-center"
              >
                <Text className="text-white font-bold text-[16px]">OK</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default FinishSignUp;
