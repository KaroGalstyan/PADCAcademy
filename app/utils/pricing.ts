export const priceList: {
  title: string;
  price: string;
  time: string;
  features: string[];
  bg: string;
  border: string;
  type: "outlined" | "gradient";
}[] = [
  {
    title: "Basic Plan",
    price: "50",
    time: " / 1 mo",
    features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    bg: "rgba(161, 159, 219, 0.1)",
    border: "transparent",
    type: "outlined",
  },
  {
    title: "Pro Plan",
    price: "99",
    time: " / 1 year",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    bg: "#FFFFFF",
    border: "#A19FDB",
    type: "gradient",
  },
  {
    title: "Enterprise Plan",
    price: "199",
    time: " / 1 mo",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    bg: "rgba(161, 159, 219, 0.1)",
    border: "transparent",
    type: "outlined",
  },
];
