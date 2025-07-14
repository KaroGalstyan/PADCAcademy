import React from "react";
import { View } from "react-native";
import PricingCard from "./PricingCard";
import { PricingListProps } from "@/app/interfaces";

const PricingList: React.FC<PricingListProps> = ({ priceList, onGetStarted }) => {
  return (
    <View className="space-y-6 pb-[130px]">
      {priceList.map((item, index) => (
        <PricingCard key={index} item={item} onPress={onGetStarted} />
      ))}
    </View>
  );
};

export default PricingList;
