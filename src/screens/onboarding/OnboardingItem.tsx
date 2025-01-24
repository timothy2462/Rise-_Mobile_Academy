import { Image, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import { SlideItem } from "./slides";


export interface OnboardingItemProps {
  item: SlideItem;
}

export function OnboardingItem({ item }: OnboardingItemProps) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width }]}
      />
      <View style={styles.content}>
        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  image: {
    resizeMode: "contain",
    marginTop: 90,
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 32, 
    gap: 24,
  },

  description: {
    width: 290, 
    fontSize: 20, 
    fontWeight: "bold", 
    textAlign: "center",
    color: "#1A1A1A", 
    lineHeight: 20, 
    marginTop: 40
  },
});
