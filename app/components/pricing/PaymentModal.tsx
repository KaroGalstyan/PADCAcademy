import React from "react";
import { View, Text, Modal, TextInput, ActivityIndicator, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { IPaymentModalProps } from "@/app/interfaces";

const PaymentModal: React.FC<IPaymentModalProps> = ({
  visible,
  onClose,
  countries,
  loading,
  error,
  selectedCountry,
  setSelectedCountry,
  cardNumber,
  setCardNumber,
  expiration,
  setExpiration,
  cvc,
  setCvc,
  formatCardNumber,
  formatExpiration,
  onConfirm,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 items-center justify-center bg-black/60 px-6">
        <View className="bg-white w-full p-6 rounded-[20px]">
          <View className="mb-[25px]">
            <Text className="text-base font-semibold text-gray-800 mb-[20px]">Card Number</Text>
            <TextInput
              placeholder="1234 5678 9012 3456"
              keyboardType="numeric"
              className="border border-gray-300 rounded-md px-4 py-3"
              maxLength={19}
              value={cardNumber}
              onChangeText={(text) => setCardNumber(formatCardNumber(text))}
            />
          </View>
          <View className="mb-[25px]">
            <Text className="text-base font-semibold text-gray-800 mb-[20px]">Expiration</Text>
            <TextInput
              placeholder="MM/YY"
              keyboardType="numeric"
              className="border border-gray-300 rounded-md px-4 py-3"
              maxLength={5}
              value={expiration}
              onChangeText={(text) => setExpiration(formatExpiration(text))}
            />
          </View>
          <View className="mb-[25px]">
            <Text className="text-base font-semibold text-gray-800 mb-[20px]">CVC</Text>
            <TextInput
              placeholder="123"
              keyboardType="numeric"
              className="border border-gray-300 rounded-md px-4 py-3"
              maxLength={3}
              value={cvc}
              onChangeText={(text) => setCvc(text.replace(/\D/g, "").slice(0, 3))}
            />
          </View>
          <View className="mb-[25px]">
            <Text className="text-base font-semibold text-gray-800 mb-[20px]">Country</Text>
            {loading ? (
              <ActivityIndicator size="small" color="#7596CF" />
            ) : error ? (
              <Text className="text-red-500">{error}</Text>
            ) : (
              <View className="border border-gray-300 rounded-md">
                <Picker
                  selectedValue={selectedCountry}
                  onValueChange={(itemValue: string) => setSelectedCountry(itemValue)}
                  mode="dropdown"
                  style={{ height: 55 }}
                >
                  <Picker.Item label="Select country" value="" />
                  {countries.map((country) => (
                    <Picker.Item key={country.id} label={country.name} value={country.name} />
                  ))}
                </Picker>
              </View>
            )}
          </View>
          <Text className="text-sm text-[#7E7E7E] mb-[50px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Text>
          <LinearGradient
            colors={["#7596CF", "#8198D1", "#929AD6", "#A09DD9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="rounded-md"
            style={{ overflow: "hidden" }}
          >
            <Pressable onPress={onConfirm} className="py-3 items-center">
              <Text className="text-white font-semibold">Confirm</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;
