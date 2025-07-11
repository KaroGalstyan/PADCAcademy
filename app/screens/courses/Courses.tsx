import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Courses = () => {
  const navigation = useNavigation();

  const bulletPoints = [
    "Create test plans for new software.",
    "Identify project risks.",
    "Recommend steps to address issues.",
    "Implement software testing and evaluate results.",
    "Document and report testing results regarding usability and functionality.",
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F8F8FA]">
      <View className="flex-row justify-between items-center px-[20px] pt-[27px] pb-[14px] bg-[#F8F8FA] z-10">
        <Text className="text-[30px] font-poppinsBold text-black">COURSES</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={27} color="#868686" />
        </TouchableOpacity>
      </View>
      <ScrollView className="bg-[#F8F8FA]">
        <View className="flex-row px-5 py-6 items-center space-x-4">
          <Image
            source={require("../../../assets/images/aqa.png")}
            style={{ width: 109, height: 93 }}
            resizeMode="contain"
          />
          <View className="flex-1 w-[224px] ml-[20px]">
            <Text className="text-[20px] font-bold text-black mb-1">
              AUTOMATED QUALITY ASSURANCE (AQA)
            </Text>
          </View>
        </View>

        <View className="px-5 pb-6">
          <Text className="text-[14px] text-black leading-[30px]">
            Quality Assurance strives to deliver consistent results through a set of standardized
            processes and procedures that systematically monitors different aspects of a product or
            a service. {"\n"}
            By regular audits and other forms of assessments, QA detects and fixes the problems or
            variances that fall outside of organized standards or requirements. To release a product
            as a whole for the first time in production or to release an update, QA is mandatory.
            Every piece of code needs to be tested regressively before it is released to the market.{" "}
            {"\n"}
            And in today’s agile world, with frequent build updates QA becomes a challenging and
            time-consuming task. QA automation is the solution to such problems as it replaces
            manual efforts with automated scripts to speed up workflows and improve the quality
            assurance (QA) process’s efficiency. While manual testing will always be vital,
            automation may save time and money.
          </Text>
        </View>

        <View className="px-5">
          <Text className="text-xl font-poppinsBold text-black">
            Is a QA tester job right for me?
          </Text>
        </View>

        <View className="px-5 pb-6">
          <Text className="text-[14px] text-black leading-[35px]">
            QA testing is an analytical role in software development. You’ll be expected to․
          </Text>
        </View>

        <View className="h-[228px] mb-4" style={{ marginHorizontal: 20 }}>
          <Image
            source={require("../../../assets/images/courses-bg-img.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        </View>

        <View className="px-5 mb-6 space-y-4">
          {bulletPoints.map((point, index) => (
            <View key={index} className="flex-row items-start">
              <Text className="text-black text-lg mr-2">•</Text>
              <Text className="text-sm text-black leading-6 flex-1">{point}</Text>
            </View>
          ))}
        </View>

        <View className="px-5 mb-10">
          <Text className="text-xl font-poppinsBold text-black">
            If you are interested in being immersed in the software development process, a QA
            testing job could be the right fit for you.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Courses;
