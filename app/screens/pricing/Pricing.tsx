import HeaderSection from "@/app/components/pricing/HeaderSection";
import PricingList from "@/app/components/pricing/PricingList";
import { RootStackParamList } from "@/app/navigation";
import { priceList } from "@/app/utils/pricing";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useStripe } from "@stripe/stripe-react-native";
import * as Linking from "expo-linking";
import React, { useCallback, useState } from "react";
import { Alert, ScrollView } from "react-native";

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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
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
      navigation.reset({
        index: 0,
        routes: [{ name: "Students" }],
      });
    }
  };

  return (
    <>
      <ScrollView className="bg-white px-5 py-[32px]">
        <HeaderSection />

        <PricingList priceList={priceList} onGetStarted={onGetStarted} loading={loading} />
        <PricingList priceList={priceList} onGetStarted={onGetStarted} loading={loading} />
      </ScrollView>
    </>
  );
};

export default Pricing;
