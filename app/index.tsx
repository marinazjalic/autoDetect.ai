import { useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { View } from "react-native";
import { Camera } from "../components/Camera/Camera";
import { CameraPermissions } from "../components/Camera/CameraPermissions";
import { ImagePreview } from "../components/ImagePreview/ImagePreview";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return <CameraPermissions requestPermission={() => requestPermission()} />;
  }

  if (capturedImage) {
    return (
      <ImagePreview
        imageUri={capturedImage}
        onReset={() => setCapturedImage(null)}
        isLoading={isLoading}
        prediction={prediction}
      />
    );
  }

  return (
    <Camera
      setCapturedImage={setCapturedImage}
      setPrediction={setPrediction}
      setIsLoading={setIsLoading}
    />
  );
}
