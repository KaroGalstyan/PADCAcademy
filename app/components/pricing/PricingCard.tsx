import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { PricingCardProps } from "@/app/interfaces";

const PricingCard: React.FC<PricingCardProps> = ({ item, onPress }) => {
  return (
    <View
      className="h-[380px] rounded-[20px] px-[40px] pt-[30px] pb-[30px] self-center mb-8 w-full"
      style={{
        backgroundColor: item.bg,
        borderColor: item.border,
        borderWidth: item.border !== "transparent" ? 1 : 0,
      }}
    >
      <View className="flex-1 justify-between">
        <View className="items-center">
          <Text className="text-[20px] font-bold text-black mb-[20px]">{item.title}</Text>

          <View className="flex-row items-baseline mb-[40px]">
            <Text className="text-base font-bold align-top">$</Text>
            <Text className="text-[40px] font-bold">{item.price}</Text>
            <Text className="text-[20px] leading-[35px] font-semibold text-gray-500">
              {item.time}
            </Text>
          </View>

          <View className="w-full">
            {item.features.map((feature, idx) => (
              <View key={idx} className="flex-row items-start mb-[10px]">
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

        <View style={{ marginTop: 20, marginBottom: 30 }}>
          {item.type === "gradient" ? (
            <LinearGradient
              colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="w-full rounded-[5px]"
              style={{ overflow: "hidden" }}
            >
              <TouchableOpacity onPress={onPress} className="py-3 items-center">
                <Text className="text-white font-semibold">Get Started</Text>
              </TouchableOpacity>
            </LinearGradient>
          ) : (
            <TouchableOpacity
              onPress={onPress}
              className="w-full py-3 items-center rounded-[5px]"
              style={{
                borderWidth: 1,
                borderColor: "#A19FDB",
                backgroundColor: "transparent",
              }}
            >
              <Text className="text-[#A19FDB] font-semibold">Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default PricingCard;
