import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const AboutSection = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="items-center mb-[50px] px-5">
      <Text className="font-poppinsBold text-2xl text-black mb-5">ABOUT</Text>
      <Text className="text-sm/[30px] text-black mb-[30px] text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim...
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("About")}
        className="rounded-lg overflow-hidden w-full h-[50px]"
      >
        <LinearGradient
          colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="w-full h-full flex-row items-center justify-center space-x-2"
        >
          <Text className="text-white font-poppinsBold text-base leading-none">Read More</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default AboutSection;
