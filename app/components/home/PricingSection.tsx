import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const priceList = [
  {
    title: "Basic Plan",
    price: "50",
    time: "/1mo",
    features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    bg: "rgba(161, 159, 219, 0.1)",
    border: "transparent",
  },
  {
    title: "Pro Plan",
    price: "99",
    time: "/1year",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    bg: "#FFFFFF",
    border: "#A19FDB",
  },
  {
    title: "Enterprise Plan",
    price: "199",
    time: "/week",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    bg: "rgba(161, 159, 219, 0.1)",
    border: "transparent",
  },
];

const PricingSection = () => {
  return (
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
  );
};

export default PricingSection;
