import React, { useState } from "react";
import { ScrollView, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/navigation";
import useCountries from "@/app/hooks/useCountries";

import HeaderSection from "@/app/components/pricing/HeaderSection";
import PricingList from "@/app/components/pricing/PricingList";
import PaymentModal from "@/app/components/pricing/PaymentModal";
import { priceList } from "@/app/utils/pricing";

type PricingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Pricing">;
const Pricing = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { countries, loading, error } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvc, setCvc] = useState("");
  const navigation = useNavigation<PricingScreenNavigationProp>();

  const formatCardNumber = (text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, 16);
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(" ") : "";
  };

  const formatExpiration = (text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  };

  return (
    <>
      <ScrollView className="bg-white px-5 py-[32px]">
        <View className="flex-row items-center justify-between px-5 py-4 bg-white">
          <Image
            source={require("../../../assets/images/logo.png")}
            style={{ width: 95, height: 36, resizeMode: "contain" }}
          />
        </View>

        <HeaderSection />

        <PricingList priceList={priceList} onGetStarted={() => setModalVisible(true)} />
      </ScrollView>

      <PaymentModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        countries={countries}
        loading={loading}
        error={error}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expiration={expiration}
        setExpiration={setExpiration}
        cvc={cvc}
        setCvc={setCvc}
        formatCardNumber={formatCardNumber}
        formatExpiration={formatExpiration}
        onConfirm={() => {
          setModalVisible(false);
          navigation.navigate("Students");
        }}
      />
    </>
  );
};

export default Pricing;
