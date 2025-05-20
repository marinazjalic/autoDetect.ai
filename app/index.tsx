import { useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { View } from 'react-native';
import { Camera } from '../components/Camera/Camera';
import { CameraPermissions } from '../components/Camera/CameraPermissions';
import { ImagePreview } from '../components/ImagePreview/ImagePreview';


export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
     return <CameraPermissions requestPermission={() => requestPermission()} />;
   
  }

   if (capturedImage) {
    return <ImagePreview imageUri={capturedImage} onReset={() => setCapturedImage(null)} />;
  }

  return (
    <Camera setCapturedImage={setCapturedImage}/>
  )
}

