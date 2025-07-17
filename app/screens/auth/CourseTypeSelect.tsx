import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useSignUpStore from "@/app/store/useSignUpStore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import type { CourseType } from "@/app/interfaces/";
import { options } from "@/app/utils/auth";

type CourseTypeSelectScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "CourseTypeSelect"
>;

const CourseTypeSelect = () => {
  const { setSignUpData } = useSignUpStore();
  const navigation = useNavigation<CourseTypeSelectScreenNavigationProp>();

  const handleSelect = (type: CourseType) => {
    setSignUpData({
      test: {
        courseType: type,
      },
    });
    navigation.navigate("ExamScheduleSelect");
  };

  return (
    <ScrollView className="flex-1 bg-[#F6F6F8] px-[37px] pt-10">
      <Text className="text-[30px] font-poppinsBold text-black mb-2 text-center">
        Online or Offline Courses
      </Text>
      <Text className="text-[14px] text-[#000] mb-[30px] text-center leading-[30px]">
        Learn Free or improve your skills online or offline today. Choose from a wide range of Free
        courses offered from top industry leaders.
      </Text>
      <View className="mb-[77px]">
        {options.map((option) => (
          <View
            key={option.key}
            className="border border-gray-300 bg-white rounded-2xl mb-[30px] px-[20px]"
          >
            <View className="flex-row items-center p-4 pb-2">
              <Image source={option.icon} style={{ width: 38, height: 38, marginRight: 12 }} />
              <Text className="text-[18px] font-bold">{option.title}</Text>
            </View>

            <View className="h-[1px] bg-gray-300 mx-4 mb-3" />

            {option.points.map((point, index) => (
              <View key={index} className="flex-row items-start px-4 pb-2">
                <Text className="text-[#888] mr-2 text-[18px]">•</Text>
                <Text className="text-[#000] text-[14px]">{point}</Text>
              </View>
            ))}

            <TouchableOpacity
              onPress={() => handleSelect(option.key as CourseType)}
              className="rounded-xl overflow-hidden h-[45px] mt-4 mx-4 mb-[20px]"
            >
              <LinearGradient
                colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="w-full h-full items-center justify-center rounded-xl"
              >
                <Text className="text-white font-poppinsBold text-[16px]">Select</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CourseTypeSelect;
