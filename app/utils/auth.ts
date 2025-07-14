import { Options } from "../interfaces";

export const options: Options[] = [
  {
    key: "online",
    title: "Online",
    icon: require("../../assets/images/online-icon.png"),
    points: [
      "Traditional Method",
      "Requires lots of efforts",
      "Strict Rules and Guidelines",
      "Need to be Physically Present",
      "Requires more Time and Money",
    ],
  },
  {
    key: "offline",
    title: "Offline",
    icon: require("../../assets/images/online-icon.png"),
    points: [
      "Convenient",
      "Health issues",
      "Self-Paced Learning",
      "Intence Requirement for Self-discipline",
      "Must Fulfill Basic Requirements",
    ],
  },
];

export const occupations = ["student", "employee", "other"];

export const levels = [
  "A1 (Elementary)",
  "A2 (Pre Intermediate)",
  "B1 (Intermediate)",
  "B2 (Upper Intermediate)",
  "C1 (Advanced)",
  "C2 (Proficient)",
];
