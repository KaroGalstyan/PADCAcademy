import React from "react";
import { View } from "react-native";
import PricingCard from "./PricingCard";
import { IPricingListProps } from "@/app/interfaces";

const PricingList: React.FC<IPricingListProps> = ({ priceList, onGetStarted, loading }) => {
  return (
    <View className="space-y-6 pb-[130px]">
      {priceList.map((item, index) => (
        <PricingCard
          key={item.title}
          item={item}
          onPress={() => onGetStarted(item.price)}
          loading={loading}
        />
      ))}
    </View>
  );
};

export default PricingList;
