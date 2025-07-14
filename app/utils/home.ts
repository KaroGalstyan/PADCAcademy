import { ContactItem } from "@/app/interfaces";

export const contactUs: ContactItem[] = [
  {
    id: "1",
    type: "support",
    icon: require("../../assets/images/support.png"),
    title: "Chat to support",
    description: "We are here to help.",
    email: "support@untitledui.com",
  },
  {
    id: "2",
    type: "location",
    icon: require("../../assets/images/visit-us.png"),
    title: "Visit us",
    description: "Visit our office.",
    email: "View on Google Maps",
    location: "40.7989655,43.8431837",
  },
  {
    id: "3",
    type: "phone",
    icon: require("../../assets/images/call-us.png"),
    title: "Call us",
    description: "Mon-Fri from 10:30am to 6:30pm.",
    email: "+(374)94-019-941",
  },
];

export const coursesData = [
  {
    id: "1",
    title: "Software Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    image: require("../../assets/images/soft-eng.png"),
  },
  {
    id: "2",
    title: "Front-End Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    image: require("../../assets/images/front-end.png"),
  },
  {
    id: "3",
    title: "Back-End Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    image: require("../../assets/images/back-end.png"),
  },
  {
    id: "4",
    title: "Automated Quality Assurance (AQA)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    image: require("../../assets/images/aqa.png"),
  },
  {
    id: "5",
    title: "DevOps Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    image: require("../../assets/images/devops.png"),
  },
];

export const priceList = [
  {
    title: "Basic Plan",
    price: "50",
    time: "/1mo",
    features: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
    bg: "rgba(161, 159, 219, 0.1)",
    border: "transparent",
  },
  {
    title: "Pro Plan",
    price: "99",
    time: "/1year",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    bg: "#FFFFFF",
    border: "#A19FDB",
  },
  {
    title: "Enterprise Plan",
    price: "199",
    time: "/week",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    bg: "rgba(161, 159, 219, 0.1)",
    border: "transparent",
  },
];

export const people = [
  {
    id: 1,
    photo: require("../../assets/images/y.png"),
  },
  {
    id: 2,
    photo: require("../../assets/images/y.png"),
  },
  {
    id: 3,
    photo: require("../../assets/images/y.png"),
  },
];
