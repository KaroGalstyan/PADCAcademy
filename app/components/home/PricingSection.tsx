import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { priceList } from "@/app/utils/home";

const PricingSection = () => {
  return (
    <>
      <View className="px-8">
        <View className="items-center mt-[50px]">
          <Text className="font-poppinsBold text-2xl text-black mb-5">Pricing</Text>
        </View>

        <View className="mb-[50px]">
          <Text className="text-[14px] text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Text>
        </View>
      </View>
      <View className="bg-white px-5 py-8">
        <View className="space-y-6">
          {priceList.map((item, index) => (
            <View
              key={index}
              className="h-[324px] rounded-[20px] px-[76px] pt-[30px] pb-[94px] self-center mb-8 items-center"
              style={{
                backgroundColor: item.bg,
                borderColor: item.border,
                borderWidth: item.border !== "transparent" ? 1 : 0,
              }}
            >
              <Text className="text-[20px] font-bold text-black mb-[30px]">{item.title}</Text>
              <View className="flex-row items-baseline mb-[50px]">
                <Text className="text-base font-bold align-top">$</Text>
                <Text className="text-4xl font-bold">{item.price}</Text>
                <Text className="text-xl text-gray-500">{item.time}</Text>
              </View>
              <View>
                {item.features.map((feature, idx) => (
                  <View key={idx} className="self-start flex-row items-start mb-[15px]">
                    <Ionicons
                      name="checkmark-outline"
                      size={18}
                      color="#000000"
                      style={{ marginTop: 2, marginRight: 8 }}
                    />
                    <Text className="text-base text-gray-700">{feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default PricingSection;
