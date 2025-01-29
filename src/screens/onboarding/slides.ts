import { ImageSourcePropType } from "react-native";

export const SLIDES = [
  {
    id: 1,
    description:
      "Trusted by millions of people, part of one part",
    image: require("../../../assets/images/Trust.png"),
  },
  {
    id: 2,
    title: "See Doctor For Consultation",
    description:
      "Spend money abroad, and track your expense",
    image: require("../../../assets/images/Spend_money.png"),
  },
  {
    id: 3,
    description:
      "Receive Money From Anywhere In The World",
    image: require("../../../assets/images/Receive_money.png"),
  },
];

export interface SlideItem {
  id: number;
  description: string;
  image: ImageSourcePropType;
}
