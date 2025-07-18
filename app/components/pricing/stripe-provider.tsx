import * as Linking from "expo-linking";

import { StripeProvider } from "@stripe/stripe-react-native";

export default function ExpoStripeProvider(
  props: Omit<React.ComponentProps<typeof StripeProvider>, "publishableKey" | "merchantIdentifier">
) {
  return (
    <StripeProvider
      publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
      urlScheme={Linking.createURL("/").split(":")[0]}
      {...props}
    />
  );
}
