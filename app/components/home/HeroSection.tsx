// HeroSection.tsx
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HeroSection() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <>
      <View className="px-5 pt-5">
        <View className="mb-5">
          <Text className="font-poppinsBold text-3xl text-black">
            Find your <Text className="text-customPurple">Course</Text> & make sure goal.
          </Text>
        </View>

        <View>
          <Text className="font-poppinsBold text-base text-black">
            Your dream Courses is waiting for you.
          </Text>
        </View>
      </View>

      <View className="w-full h-[346px] rounded-xl overflow-hidden mb-[30px] relative">
        <Image
          source={require("../../../assets/images/bg-img1.png")}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="px-5 pb-[50px]">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("SignUp")}
          className="rounded-lg overflow-hidden w-full h-[50px]"
        >
          <LinearGradient
            colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-full h-full flex-row items-center justify-center space-x-2"
          >
            <Text className="text-white font-poppinsBold text-base leading-none">Get Started</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
}
