// import React, { useState } from "react";
// import { Alert } from "react-native";
// import { IPaymentModalProps } from "@/app/interfaces";
// import { CardFieldInput, useStripe } from "@stripe/stripe-react-native";
// import axios from "axios";
// import CheckoutScreen from "./checkout-form";

// const PaymentModal: React.FC<IPaymentModalProps> = ({ visible, onClose, loading, error }) => {
//   const { confirmPayment } = useStripe();
//   // const [cardDetails, setCardDetails] = useState<CardFieldInput.Details | null>(null);
//   const [processing, setProcessing] = useState(false);

//   const handlePayPress = async () => {
//     try {
//       setProcessing(true);

//       const { data } = await axios.post("https://your-backend.com/create-payment-intent", {
//         amount: 1999, // в центах
//       });

//       const clientSecret = data.clientSecret;

//       const { paymentIntent, error } = await confirmPayment(clientSecret, {
//         paymentMethodType: "Card",
//         paymentMethodData: {
//           billingDetails: {
//             email: "user@example.com", // можешь подставить email из профиля пользователя
//           },
//         },
//       });

//       if (error) {
//         Alert.alert("Ошибка", error.message);
//       } else if (paymentIntent) {
//         Alert.alert("Успешно!", `Оплата прошла: ${paymentIntent.id}`);
//         onClose(); // закрыть модалку после успешной оплаты
//       }
//     } catch (err) {
//       console.error(err);
//       Alert.alert("Ошибка", "Что-то пошло не так при оплате");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   return <CheckoutScreen amount={125} />;
// };

// export default PaymentModal;
