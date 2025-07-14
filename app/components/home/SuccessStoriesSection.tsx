import { people } from "@/app/utils/home";
import React, { useRef } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = screenWidth * 0.61;
const CARD_MARGIN = 10;
const VISIBLE_NEXT_CARD = screenWidth * 0.33;

const SuccessStoriesSection = () => {
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View className="py-[50px] px-5 bg-[#F8F8FA]">
      <Text className="text-2xl font-poppinsBold text-black mb-6 text-center">
        OUR SUCCESS STORIES
      </Text>
      <Text className="text-sm font-normal text-black mb-6 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Pellentesque efficitur eu ex non blandit.
      </Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + CARD_MARGIN * 2 - VISIBLE_NEXT_CARD}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingLeft: (screenWidth - CARD_WIDTH) / 2,
          paddingRight: (screenWidth - CARD_WIDTH) / 2 - VISIBLE_NEXT_CARD,
        }}
      >
        {people.map((person, index) => (
          <View
            key={person.id}
            style={{
              width: CARD_WIDTH,
              marginRight: CARD_MARGIN,
              marginLeft: index === 0 ? 0 : CARD_MARGIN,
            }}
            className="items-center"
          >
            <Image
              source={person.photo}
              style={{
                width: CARD_WIDTH,
                height: CARD_WIDTH * 1.2,
                borderRadius: 12,
              }}
              resizeMode="cover"
              className="bg-gray-200"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SuccessStoriesSection;
