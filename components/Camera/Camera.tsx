import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CameraType, CameraView } from 'expo-camera';
import { useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


interface CameraProps {
  setCapturedImage: (uri: string) => void;
}

export function Camera({ setCapturedImage}: CameraProps) {
    const [facing, setFacing] = useState<CameraType>('back');
    const cameraRef = useRef<any>(null);

    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

   const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        setCapturedImage(photo.uri);
      } catch (error) {
        console.error('Error: Failed to take photo. ', error);
      }
    } else {
      console.log('Error: Camera Ref not available.');
    }
  };

  return (
    <View style={styles.container}>
      <CameraView 
        ref={cameraRef}
        style={styles.camera} 
        facing={facing}
      >
        <View style={styles.controlsContainer}>
          <View style={styles.spacer} />
          
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <MaterialCommunityIcons name="camera-flip" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}