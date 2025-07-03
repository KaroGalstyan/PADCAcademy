import React, { useState } from "react";
import {
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
	View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import useSignUpStore from "@/app/store/useSignUpStore";
import useCountries from "@/app/hooks/useCountries";
import api from "@/app/services/apiPublic";
import { AxiosError } from "axios";


type SignUpFormValues = {
	fullName: string;
	email: string;
	phone: string;
	university: string;
	faculty: string;
	occupation: string;
	countryId: number;
	city: string;
	englishLevel: string;
};

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUp = () => {
	const navigation = useNavigation<SignUpScreenNavigationProp>();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpFormValues>();
	const [isEnglishDropdownOpen, setIsEnglishDropdownOpen] = useState(false);
	const levels = ["A1 (Elementary)", "A2 (Pre Intermediate)", "B1 (Intermediate)", "B2 (Upper Intermediate)", "C1 (Advanced)", "C2 (Proficient)"];
	const [isOccupationDropdownOpen, setIsOccupationDropdownOpen] = useState(false);
	const occupations = ["student", "employee", "other"];
	const { countries, loading } = useCountries();
	const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
	const { setSignUpData } = useSignUpStore();

	const onSubmit = async (formData: SignUpFormValues) => {
		try {
			const emailRes = await api.post("/auth/check/email", { email: formData.email });
			if (emailRes.data?.isExists) {
				alert("Email already exists.");
				return;
			}
			const phoneRes = await api.post("/auth/check/phone", { phone: formData.phone });
			if (phoneRes.data?.isExists) {
				alert("Phone number already exists.");
				return;
			}
			setSignUpData(formData);
			navigation.navigate("CourseTypeSelect");
		} catch (error) {
			console.error("Validation error:", (error as AxiosError).response?.data);
			alert("Something went wrong. Please try again.");
		}
	};



	return (
		<ScrollView className="flex-1 bg-[#F8F8FA] px-5 pt-10" scrollEnabled={!isCountryDropdownOpen}>
			<Text className="text-[30px] font-poppinsBold text-black mb-4">
				Let’s create <Text className="text-[#A19FDB]">the future</Text> together.
			</Text>

			<Image
				source={require("../../../assets/images/register-img.png")}
				className="w-[353px] h-[460px] self-center mb-6"
				resizeMode="contain"
			/>

			<Controller
				control={control}
				name="fullName"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (

					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="Full Name"
						placeholderTextColor="[rgba(0,0,0,0.7)]"
						onChangeText={onChange}
						value={value}
					/>
				)}
			/>
			{errors.fullName && <Text className="text-red-500 mb-2">This field is required</Text>}

			<Controller
				control={control}
				name="email"
				rules={{
					required: true,
					pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
				}}
				render={({ field: { onChange, value } }) => (
					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="Email"
						placeholderTextColor="[rgba(0,0,0,0.7)]"
						keyboardType="email-address"
						onChangeText={onChange}
						value={value}
					/>
				)}
			/>
			{errors.email && <Text className="text-red-500 mb-2">Enter a valid email</Text>}

			<Controller
				control={control}
				name="phone"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="Phone Number"
						placeholderTextColor="[rgba(0,0,0,0.7)]"
						keyboardType="phone-pad"
						onChangeText={onChange}
						value={value}
					/>
				)}
			/>
			{errors.phone && <Text className="text-red-500 mb-2">Phone is required</Text>}

			<Controller
				control={control}
				name="occupation"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<View className="mb-6">
						<TouchableOpacity
							activeOpacity={0.7}
							className="border border-gray-300 rounded-xl px-4 py-3 flex-row justify-between items-center"
							onPress={() => setIsOccupationDropdownOpen(!isOccupationDropdownOpen)}
						>   <Text className={`text-${value ? "black" : "[rgba(0,0,0,0.7)]"}`}>
								{value || "Occupation"}
							</Text>

							<Ionicons name={isOccupationDropdownOpen ? "chevron-up" : "chevron-down"} size={20} color="#000" />
						</TouchableOpacity>

						{isOccupationDropdownOpen && (
							<View className="border border-gray-300 rounded-xl mt-2 bg-white">
								{occupations.map((occupation) => (
									<TouchableOpacity
										key={occupation}
										onPress={() => {
											onChange(occupation);
											setIsOccupationDropdownOpen(false);
										}}
										className="px-4 py-3 border-b border-gray-200"
									>
										<Text className="text-black">{occupation}</Text>
									</TouchableOpacity>
								))}
							</View>
						)}
					</View>
				)}
			/>
			{errors.occupation && <Text className="text-red-500 mb-2">This field is required</Text>}

			<Controller
				control={control}
				name="university"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="University"
						placeholderTextColor="[rgba(0,0,0,0.7)]"
						onChangeText={onChange}
						value={value}
					/>
				)}
			/>
			{errors.university && <Text className="text-red-500 mb-2">This field is required</Text>}

			<Controller
				control={control}
				name="faculty"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="Faculty"
						placeholderTextColor="[rgba(0,0,0,0.7)]"
						onChangeText={onChange}
						value={value}
					/>
				)}
			/>
			{errors.faculty && <Text className="text-red-500 mb-2">This field is required</Text>}
			{loading && <Text className="text-gray-500">Loading countries...</Text>}
			<Controller
				control={control}
				name="countryId"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<View className="mb-4">
						<TouchableOpacity
							activeOpacity={0.7}
							className="border border-gray-300 rounded-xl px-4 py-3 flex-row justify-between items-center"
							onPress={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
						>
							<Text className={`text-${value ? "black" : "[rgba(0,0,0,0.7)]"}`}>
								{
									countries.find((country) => country.id === value)?.name ||
									"Country"
								}
							</Text>
							<Ionicons name={isCountryDropdownOpen ? "chevron-up" : "chevron-down"} size={20} color="#000" />
						</TouchableOpacity>

						{isCountryDropdownOpen && (
							<View className="border border-gray-300 rounded-xl mt-2 bg-white max-h-60">
								<ScrollView style={{ maxHeight: 200, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: 'white' }}>
									{countries.map((country) => (
										<TouchableOpacity
											key={country.id}
											onPress={() => {
												onChange(country.id);
												setIsCountryDropdownOpen(false);
											}}
											className="px-4 py-3 border-b border-gray-200"
										>
											<Text className="text-black">{country.name}</Text>
										</TouchableOpacity>
									))}
								</ScrollView>
							</View>
						)}
					</View>
				)}
			/>
			{errors.countryId && <Text className="text-red-500 mb-2">This field is required</Text>}

			<Controller
				control={control}
				name="city"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<TextInput
						className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black"
						placeholder="City"
						placeholderTextColor="[rgba(0,0,0,0.7)]"
						onChangeText={onChange}
						value={value}
					/>
				)}
			/>
			{errors.city && <Text className="text-red-500 mb-2">This field is required</Text>}

			<Controller
				control={control}
				name="englishLevel"
				rules={{ required: true }}
				render={({ field: { onChange, value } }) => (
					<View className="mb-6">
						<TouchableOpacity
							activeOpacity={0.7}
							className="border border-gray-300 rounded-xl px-4 py-3 flex-row justify-between items-center"
							onPress={() => setIsEnglishDropdownOpen(!isEnglishDropdownOpen)}
						>   <Text className={`text-${value ? "black" : "[rgba(0,0,0,0.7)]"}`}>
								{value || "English Level"}
							</Text>

							<Ionicons name={isEnglishDropdownOpen ? "chevron-up" : "chevron-down"} size={20} color="#000" />
						</TouchableOpacity>

						{isEnglishDropdownOpen && (
							<View className="border border-gray-300 rounded-xl mt-2 bg-white">
								{levels.map((level) => (
									<TouchableOpacity
										key={level}
										onPress={() => {
											onChange(level);
											setIsEnglishDropdownOpen(false);
										}}
										className="px-4 py-3 border-b border-gray-200"
									>
										<Text className="text-black">{level}</Text>
									</TouchableOpacity>
								))}
							</View>
						)}
					</View>
				)}
			/>
			{errors.englishLevel && <Text className="text-red-500 mb-2">This field is required</Text>}

			<TouchableOpacity onPress={handleSubmit(onSubmit)} className="rounded-xl overflow-hidden h-[50px] mb-[50px]">
				<LinearGradient
					colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
					className="w-full h-full flex-row items-center justify-center"
				>
					<Text className="text-white font-poppinsBold text-[16px]">Next</Text>
				</LinearGradient>
			</TouchableOpacity>

			<Text className="text-center text-[14px] font-inter text-black mb-[65px] mx-[55px]">
				By creating an account, you agree to our{" "}
				<Text className="underline text-[#4D7BC1]">terms of use</Text> and{" "}
				<Text className="underline text-[#4D7BC1]">privacy policy</Text>.
			</Text>
		</ScrollView>
	);
};

export default SignUp;
