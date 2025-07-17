import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { contactUs } from "@/app/utils/home";
import { ContactItem } from "@/app/interfaces";

const ContactUsSection = () => {
  const handlePress = (item: ContactItem) => {
    switch (item.type) {
      case "location": {
        const url = `https://www.google.com/maps?q=${encodeURIComponent(item.location)}`;
        Linking.openURL(url);
        break;
      }
      case "phone": {
        const cleanedPhone = item.phone.replace(/[^\d+]/g, "");
        Linking.openURL(`tel:${cleanedPhone}`);
        break;
      }
      case "support": {
        Linking.openURL(`mailto:${item.email}`);
        break;
      }
    }
  };

  return (
    <View className="px-5 mb-[50px]">
      {contactUs.map((item) => (
        <View
          key={item.id}
          className="w-[287px] bg-white rounded-2xl p-5 mb-5 border border-[#D9D9D9] self-center"
        >
          <Image source={item.icon} className="w-[39px] h-[39px] mb-4" resizeMode="contain" />
          <Text className="text-xl font-poppins text-black mb-2">{item.title}</Text>
          <Text className="text-poppins text-[#A5A5A5] mb-4 leading-6">{item.description}</Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handlePress(item)}
            className="border border-gray-300 rounded-full px-4 py-3 bg-white"
          >
            <Text className="text-poppins text-black">
              {item.type === "support" && item.email}
              {item.type === "phone" && item.phone}
              {item.type === "location" && item.location}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ContactUsSection;
