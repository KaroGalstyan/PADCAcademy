import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import api from "@/app/services/apiPublic";
import useAuthStore from "@/app/store/authStore";
import { AxiosError } from "axios";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const navigation = useNavigation<LoginScreenNavigationProp>();

	const handleLogin = async () => {
		try {
			const res = await api.post("/auth/login", {
				login: email,
				password: password,
			});

			console.log("Login success:", res.data);
			const { accessToken, refreshToken } = res.data;
			await useAuthStore.getState().setTokens(accessToken, refreshToken, rememberMe);
			navigation.reset({
				index: 0,
				routes: [{ name: "Home" }],
			});
		} catch (err) {
			console.error((err as AxiosError).response?.data || (err as AxiosError).message);
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
			>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, paddingTop: 40 }}
					keyboardShouldPersistTaps="handled"
				>
					<Text className="text-[30px] font-poppinsBold mb-4">
						<Text className="text-[rgba(0,0,0,0.7)]">Let’s create </Text>
						<Text className="text-[#A19FDB]">the future </Text>
						<Text className="text-[rgba(0,0,0,0.7)]">together.</Text>
					</Text>

					<Image
						source={require("../../../assets/images/register-img.png")}
						style={{ width: 353, height: 460, alignSelf: "center" }}
						resizeMode="contain"
					/>

					<Text className="text-[24px] font-poppinsBold text-black mb-6">Login to Account</Text>

					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="Email"
						placeholderTextColor="rgba(0,0,0,0.5)"
						keyboardType="email-address"
						autoCapitalize="none"
						onChangeText={setEmail}
						value={email}
					/>

					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="Password"
						placeholderTextColor="rgba(0,0,0,0.5)"
						secureTextEntry
						onChangeText={setPassword}
						value={password}
					/>

					<View className="flex-row justify-between items-center mb-5">
						<TouchableOpacity
							onPress={() => setRememberMe(!rememberMe)}
							className="flex-row items-center"
							activeOpacity={0.8}
						>
							<View
								className={`w-[18px] h-[18px] border-2 rounded-md mr-2 justify-center items-center
								${rememberMe ? 'bg-[#A19FDB] border-[#A19FDB]' : 'border-[#A19FDB]'}`}
							>
								{rememberMe && <Ionicons name="checkmark" size={14} color="#fff" />}
							</View>
							<Text className="text-black text-[14px]">Remember me</Text>
						</TouchableOpacity>

						<TouchableOpacity>
							<Text className="text-[#4D7BC1] text-[14px]">Forgot your password?</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						className="rounded-xl overflow-hidden h-[50px] mb-6"
						onPress={handleLogin}
					>
						<LinearGradient
							colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
							className="w-full h-full items-center justify-center"
						>
							<Text className="text-white font-poppinsBold text-[16px]">Login</Text>
						</LinearGradient>
					</TouchableOpacity>

					<View className="flex-row justify-center mb-4">
						<Text className="text-black mr-1">Don’t have an account?</Text>
						<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
							<Text className="text-[#4D7BC1]">Sign Up</Text>
						</TouchableOpacity>
					</View>

					<Text className="text-center text-[14px] text-black mb-[30px] mx-[40px]">
						By creating an account, you agree to our{" "}
						<Text className="underline text-[#4D7BC1]">terms of use</Text> and{" "}
						<Text className="underline text-[#4D7BC1]">privacy policy</Text>.
					</Text>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default Login;
