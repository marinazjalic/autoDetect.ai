import { useEffect, useRef } from "react";
import { Animated, Text } from "react-native";
import { imagePreviewStyles } from "./styles";

interface PredictionBoxProps {
  prediction: string | null;
  backgroundColor: string;
}

export default function PredictionBox({
  prediction,
  backgroundColor,
}: PredictionBoxProps) {
  const flashAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (prediction === "damaged") {
      Animated.loop(
        Animated.sequence([
          Animated.timing(flashAnim, {
            toValue: 0.3,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(flashAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      flashAnim.setValue(1);
    }
  }, [prediction]);

  const getPredictionBoxText = () => {
    if (prediction == "damaged") {
      return "Damage Detected.";
    } else {
      return "No damage detected.";
    }
  };

  return (
    <Animated.View
      style={[
        imagePreviewStyles.predictionBox,
        { backgroundColor },
        prediction === "damaged" && { opacity: flashAnim },
      ]}
    >
      <Text style={imagePreviewStyles.predictionText}>
        {getPredictionBoxText()}
      </Text>
    </Animated.View>
  );
}
