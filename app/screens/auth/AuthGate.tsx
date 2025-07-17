import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import useAuthStore from "@/app/store/authStore";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AuthGate = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const tryLogin = async () => {
      const success = await useAuthStore.getState().restoreSession();
      navigation.reset({
        index: 0,
        routes: [{ name: success ? "Pricing" : "Login" }],
      });
    };

    tryLogin();
  }, [navigation]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#A19FDB" />
    </View>
  );
};

export default AuthGate;
