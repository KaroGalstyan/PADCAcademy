import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import useAuthStore from "@/app/store/authStore";

const leftMenuItems = [
  {
    label: "Home",
    icon: require("../../assets/images/drawer-home.png"),
    route: "Students",
  },
];

export default function CustomDrawerLeft(props: any) {
  const { navigation } = props;
  const { accessToken, clearTokens } = useAuthStore();

  const handleLogout = async () => {
    await clearTokens();
    navigation.closeDrawer();
    navigation.navigate("Login");
  };

  const handleLogin = () => {
    navigation.closeDrawer();
    navigation.navigate("Pricing");
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View className="flex-row justify-start items-center p-4">
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Image
            source={require("../../assets/images/open-menu.png")}
            className="w-6 h-4"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-2">
        {leftMenuItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            onPress={() => navigation.navigate(item.route)}
            className="flex-row items-center px-4 py-4 relative"
          >
            <Image source={item.icon} className="w-6 h-6 mr-4" resizeMode="contain" />
            <Text className="text-black text-base">{item.label}</Text>
            <View className="absolute bottom-0 left-4 right-0 h-px bg-gray-300" />
          </TouchableOpacity>
        ))}
      </View>

      <View className="px-4 py-4 border-t border-gray-300">
        {accessToken ? (
          <TouchableOpacity onPress={handleLogout} className="flex-row items-center">
            <Image
              source={require("../../assets/images/drawer-home.png")}
              className="w-6 h-6 mr-4"
              resizeMode="contain"
            />
            <Text className="text-black text-base font-bold">Logout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLogin} className="flex-row items-center">
            <Image
              source={require("../../assets/images/drawer-courses.png")}
              className="w-6 h-6 mr-4"
              resizeMode="contain"
            />
            <Text className="text-black text-base font-bold">Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </DrawerContentScrollView>
  );
}
