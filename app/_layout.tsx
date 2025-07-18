import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StripeProvider from "./components/pricing/stripe-provider";

export default function RootLayout() {
  return (
    <StripeProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </StripeProvider>
  );
}
