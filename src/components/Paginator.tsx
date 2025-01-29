import { Animated, StyleSheet, View, ViewStyle } from "react-native";

export interface PaginatorProps<T> {
  data: T[];
  scrollX: Animated.Value;
  currentSlide: number;
  containerStyle?: ViewStyle;
}

export function Paginator<T>({
  currentSlide,
  data,
  containerStyle,
}: PaginatorProps<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      {data.map((_, i) => {
        return (
          <Animated.View
            key={i.toString()}
            style={[
              styles.dot,
              currentSlide === i && styles.activeDot,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 20, 
    marginBottom: 32, 
  },
  dot: {
    width: 28, 
    height: 8, 
    marginLeft: 8, 
    borderRadius: 6, 
    backgroundColor: "#D1D5DB", 
    alignItems: "center",
    justifyContent: "center",
  },
  activeDot: {
    backgroundColor: "#1D4ED8", 
    height: 8, 
    width: 15, 
  },
});
