import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import PredictionBox from "./PredictionBox";
import { imagePreviewStyles } from "./styles";

interface ImagePreviewProps {
  imageUri: string;
  onReset: () => void;
  isLoading: boolean;
  prediction: string | null;
}

export function ImagePreview({
  imageUri,
  onReset,
  isLoading,
  prediction,
}: ImagePreviewProps) {
  return (
    <View style={imagePreviewStyles.fullScreenContainer}>
      <Image
        source={{ uri: imageUri }}
        style={imagePreviewStyles.fullScreenImage}
        resizeMode="cover"
      />

      {/* Loading overlay */}
      {isLoading && (
        <View style={imagePreviewStyles.loadingOverlay}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}

      {!isLoading && prediction !== null && (
        <PredictionBox
          prediction={prediction}
          backgroundColor={prediction === "damaged" ? "#c0392b" : "#27ae60"}
        />
      )}

      <View style={imagePreviewStyles.overlayButtonContainer}>
        <TouchableOpacity style={imagePreviewStyles.fab} onPress={onReset}>
          <MaterialCommunityIcons name="camera" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
