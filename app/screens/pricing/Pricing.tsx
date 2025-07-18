import React, { useCallback, useState } from "react";
import { ScrollView, View, Image, Alert } from "react-native";
import * as Linking from "expo-linking";
import HeaderSection from "@/app/components/pricing/HeaderSection";
import PricingList from "@/app/components/pricing/PricingList";
import { priceList } from "@/app/utils/pricing";
import { useStripe } from "@stripe/stripe-react-native";

async function fetchPaymentSheetParams(amount: number): Promise<{
  paymentIntent: string;
  ephemeralKey: string;
  customer: string;
}> {
  return fetch(`/api/payment-sheet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  }).then((res) => res.json());
}

const Pricing = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  // const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  const initializePaymentSheet = useCallback(
    async (amount: number) => {
      const { paymentIntent, ephemeralKey, customer } = await fetchPaymentSheetParams(amount);

      const { error } = await initPaymentSheet({
        merchantDisplayName: "Expo, Inc.",

        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: "Jane Doe",
          email: "jenny.rosen@example.com",
          phone: "888-888-8888",
        },
        returnURL: Linking.createURL("stripe-redirect"),

        applePay: {
          merchantCountryCode: "US",
        },
      });

      if (!error) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    },
    [initPaymentSheet]
  );

  const onGetStarted = async (priceString: string) => {
    const price = parseFloat(priceString);
    // setCurrentPrice(price);
    setLoading(false);
    await initializePaymentSheet(price * 100);
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Ошибка: ${error.code}`, error.message);
    } else {
      Alert.alert("Успех", "Оплата прошла успешно!");
      setLoading(false);
      // setCurrentPrice(null);
    }
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

        <PricingList priceList={priceList} onGetStarted={onGetStarted} loading={loading} />
      </ScrollView>
    </>
  );
};

export default Pricing;
