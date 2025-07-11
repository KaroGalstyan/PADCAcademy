import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const About = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between items-center px-[20px] pt-[27px] pb-[14px] bg-[#F8F8FA] z-10">
        <Text className="text-[30px] font-poppinsBold text-black">ABOUT</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={27} color="#868686" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="w-full h-[427px] overflow-hidden relative">
          <Image
            source={require("../../../assets/images/about-bg-img.png")}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        <LinearGradient
          colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="w-full px-6 pt-[39px] pb-[50px]"
        >
          <View className="mb-10">
            <Text className="text-white text-[22px] font-poppinsBold mb-4">ABOUT OUR PRODUCT</Text>
            <Text className="text-white text-base leading-[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque efficitur
              eu ex non blandit. Sed at lorem efficitur, pellentesque urna sed, sodales nunc.
              Pellentesque efficitur eu ex non blandit. Sed at lorem efficitur, pellentesque urna
              sed, sodales nunc.
            </Text>
          </View>

          <View>
            <Text className="text-white text-[22px] font-poppinsBold mb-[38px]">
              ABOUT OUR PRODUCT
            </Text>
            <Text className="text-white text-base leading-[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque efficitur
              eu ex non blandit. Sed at lorem efficitur, pellentesque urna sed, sodales nunc.
              Pellentesque efficitur eu ex non blandit. Sed at lorem efficitur, pellentesque urna
              sed, sodales nunc.
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
