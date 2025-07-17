import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, Image, ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import useSignUpStore from "@/app/store/useSignUpStore";
import useCountries from "@/app/hooks/useCountries";
import api from "@/app/services/apiPublic";
import { AxiosError } from "axios";
import { levels, occupations } from "@/app/utils/auth";
import { ISignUpPayload } from "@/app/interfaces";
import RNPickerSelect from "react-native-picker-select";

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignUp">;

const SignUp = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpPayload>();
  const [isEnglishDropdownOpen, setIsEnglishDropdownOpen] = useState(false);
  const [isOccupationDropdownOpen, setIsOccupationDropdownOpen] = useState(false);
  const { countries, loading } = useCountries();
  // const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const { setSignUpData } = useSignUpStore();

  const onSubmit = async (formData: ISignUpPayload) => {
    try {
      const emailRes = await api.post("/auth/check/email", {
        email: formData.email,
      });
      if (emailRes.data?.isExists) {
        alert("Email already exists.");
        return;
      }
      const phoneRes = await api.post("/auth/check/phone", {
        phone: formData.phone,
      });
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
    <ScrollView className="flex-1 bg-[#F8F8FA] px-5 pt-10">
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
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black text-[16px]"
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
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black text-[16px]"
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
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black text-[16px]"
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
            >
              <Text className={`text-[16px] text-${value ? "black" : "[rgba(0,0,0,0.7)]"}`}>
                {value || "Occupation"}
              </Text>
              <Ionicons
                name={isOccupationDropdownOpen ? "chevron-up" : "chevron-down"}
                size={20}
                color="#000"
              />
            </TouchableOpacity>

            {isOccupationDropdownOpen && (
              <View className="border border-gray-300 rounded-xl mt-2 bg-white ">
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
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black text-[16px]"
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
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-black text-[16px]"
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
            <RNPickerSelect
              onValueChange={(val) => onChange(val)}
              items={countries.map((c) => ({
                label: c.name,
                value: c.id,
              }))}
              value={value}
              placeholder={{ label: "Select a country", value: null }}
              useNativeAndroidPickerStyle={false}
              style={{
                inputIOS: {
                  fontSize: 16,
                  paddingVertical: 12,
                  paddingHorizontal: 13,
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 8,
                  color: "black",
                  paddingRight: 30,
                },
                inputAndroid: {
                  fontSize: 16,
                  paddingHorizontal: 13,
                  paddingVertical: 8,
                  borderWidth: 1,
                  borderColor: "#d1d5db",
                  borderRadius: 8,
                  color: "black",
                  paddingRight: 30,
                },
                placeholder: {
                  color: "[rgba(0,0,0,0.7)]",
                },
                iconContainer: {
                  top: 10,
                  right: 15,
                  pointerEvents: "none",
                },
              }}
              Icon={() => (
                <Ionicons
                  name={isEnglishDropdownOpen ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#000"
                />
              )}
            />
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
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-[16px] text-black"
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
              className="border border-gray-300 rounded-xl px-4 py-3 flex-row justify-between items-center "
              onPress={() => setIsEnglishDropdownOpen(!isEnglishDropdownOpen)}
            >
              <Text className={`text-[16px] text-${value ? "black" : "[rgba(0,0,0,0.7)]"}`}>
                {value || "English Level"}
              </Text>
              <Ionicons
                name={isEnglishDropdownOpen ? "chevron-up" : "chevron-down"}
                size={20}
                color="#000"
              />
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

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        className="rounded-xl overflow-hidden h-[50px] mb-[50px]"
      >
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
