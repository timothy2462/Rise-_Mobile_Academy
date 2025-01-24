import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from "react-native";
import { Paginator } from "@/src/components/Paginator";
import { OnboardingItem } from "./OnboardingItem";
import { SLIDES } from "./slides";

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;


const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    setCurrentSlide(viewableItems[0].index || 0);
  }).current;

  const slideRef = useRef<FlatList | null>(null);

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollToNextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      slideRef.current?.scrollToIndex({ index: currentSlide + 1 });
    } else {
      console.log("Last slide reached");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={SLIDES}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.paginatorContainer}>
          <Paginator
            currentSlide={currentSlide}
            data={SLIDES}
            scrollX={scrollX}
            containerStyle={styles.paginator}
          />
        </View>
        <TouchableOpacity onPress={scrollToNextSlide} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>
            {currentSlide === SLIDES.length - 1 ? "Sign up" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",   
    justifyContent: "center",
    height: "100%",
  },
  bottomContainer: {
    marginBottom: 52, 
  },
  paginatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16, 
  },
  paginator: {
    marginTop: 32, 
  },
  nextButton: {
    backgroundColor: "#1D4ED8", 
    paddingVertical: 12, 
    paddingHorizontal: 32, 
    borderRadius: 22, 
    alignItems: "center",
    width: 300,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16, 
    fontWeight: "600", 
  },
});
