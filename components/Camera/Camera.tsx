import { API_URL } from "@/config";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CameraType, CameraView } from "expo-camera";
import { useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface CameraProps {
  setCapturedImage: (uri: string) => void;
  setPrediction: (prediction: string) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const CLASSES = ["damaged", "not damaged"];

export function Camera({
  setCapturedImage,
  setPrediction,
  setIsLoading,
}: CameraProps) {
  const [facing, setFacing] = useState<CameraType>("back");
  const cameraRef = useRef<any>(null);

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedImage(photo.uri);
        setIsLoading(true);
        await getPrediction(photo.uri);
      } catch (error) {
        console.error("Error: Failed to take photo. ", error);
      }
    } else {
      console.log("Error: Camera Ref not available.");
    }
  };

  const getPrediction = async (photoUri: string) => {
    const formData = new FormData();
    formData.append("image", {
      uri: photoUri,
      name: "test.jpg",
      type: "image/jpeg",
    } as any);

    try {
      const apiResponse = await fetch(API_URL, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsLoading(false);
      const response = await apiResponse.text();
      const data = JSON.parse(response);
      const predictedClass = data.predicted_class;
      setPrediction(CLASSES[predictedClass]);
    } catch (error) {
      console.error("Error: Failed to send photo. ");
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.controlsContainer}>
          <View style={styles.spacer} />

          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.flipButton}
            onPress={toggleCameraFacing}
          >
            <MaterialCommunityIcons
              name="camera-flip"
              size={28}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
