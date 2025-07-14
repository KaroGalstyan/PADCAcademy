import { coursesData } from "@/app/utils/home";
import React from "react";
import { View, Text, FlatList, Image } from "react-native";

const CoursesSection = () => {
  return (
    <View className="mb-[30px] px-5">
      <View className="items-center mb-5">
        <Text className="font-poppinsBold text-2xl text-black">COURSES</Text>
      </View>

      <View className="mb-[30px]">
        <Text className="font-inter text-sm/[30px] text-black">
          Our education system will give you the perfect solution
        </Text>
      </View>

      <FlatList
        scrollEnabled={false}
        data={coursesData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 20 }}
        renderItem={({ item }) => (
          <View
            className="w-[375px] h-[250px] mb-5"
            style={{
              marginHorizontal: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 10,
              elevation: 6,
              borderRadius: 20,
              backgroundColor: "#fff",
            }}
          >
            <View className="flex-1 rounded-[20px] p-5">
              <Image source={item.image} className="w-[74px] h-[64px] mb-4" resizeMode="cover" />
              <Text className="font-bold text-xl text-black mb-2">{item.title}</Text>
              <Text className="font-inter text-sm text-black">{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CoursesSection;
