import { PermissionResponse } from 'expo-camera';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from "./styles";

interface CameraPermissionProps {
  requestPermission: () => Promise<PermissionResponse>;
}

export const CameraPermissions: React.FC<CameraPermissionProps> = ({ requestPermission }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
}