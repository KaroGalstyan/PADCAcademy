import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

type ContactItem =
  | {
      id: string;
      type: "support";
      icon: any;
      title: string;
      description: string;
      email: string;
    }
  | {
      id: string;
      type: "location";
      icon: any;
      title: string;
      description: string;
      email: string;
      location: string;
    }
  | {
      id: string;
      type: "phone";
      icon: any;
      title: string;
      description: string;
      email: string;
    };

const contactUs: ContactItem[] = [
  {
    id: "1",
    type: "support",
    icon: require("../../../assets/images/support.png"),
    title: "Chat to support",
    description: "We are here to help.",
    email: "support@untitledui.com",
  },
  {
    id: "2",
    type: "location",
    icon: require("../../../assets/images/visit-us.png"),
    title: "Visit us",
    description: "Visit our office.",
    email: "View on Google Maps",
    location: "40.7989655,43.8431837",
  },
  {
    id: "3",
    type: "phone",
    icon: require("../../../assets/images/call-us.png"),
    title: "Call us",
    description: "Mon-Fri from 10:30am to 6:30pm.",
    email: "+(374)94-019-941",
  },
];

const ContactUsSection = () => {
  const handlePress = (item: ContactItem) => {
    switch (item.type) {
      case "location":
        const url = `https://www.google.com/maps?q=${encodeURIComponent(item.location)}`;
        Linking.openURL(url);
        break;
      case "phone":
        const cleanedPhone = item.email.replace(/[^\d+]/g, "");
        Linking.openURL(`tel:${cleanedPhone}`);
        break;
      case "support":
        Linking.openURL(`mailto:${item.email}`);
        break;
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
            <Text className="text-poppins text-black">{item.email}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ContactUsSection;
