import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { imagePreviewStyles } from './styles';

interface ImagePreviewProps {
    imageUri: string,
    onReset: () => void
}

export function ImagePreview({imageUri, onReset}: ImagePreviewProps) {
  return (
    <View style={imagePreviewStyles.fullScreenContainer}>
      <Image 
        source={{ uri: imageUri }} 
        style={imagePreviewStyles.fullScreenImage} 
        resizeMode="cover"
      />
      <View style={imagePreviewStyles.overlayButtonContainer}>
        <TouchableOpacity 
          style={imagePreviewStyles.takeAnotherButton} 
          onPress={onReset}
        >
          <Text style={imagePreviewStyles.buttonText}>Take Another</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}
