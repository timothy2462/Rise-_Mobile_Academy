import {
  Image,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
} from "react-native";
import { SlideItem } from "./slides";

export interface OnboardingItemProps {
  item: SlideItem;
  width: number;
}

export function OnboardingItem({ item }: OnboardingItemProps) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width }]} />
      {/* <Text style={styles.description}>{item.description}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  image: {
    resizeMode: "contain",
    marginTop: 30,
  },
  description: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
    color: "#1A1A1A",
    // marginBottom: ,
    marginTop: 70,

    width: 300,
  },
});
