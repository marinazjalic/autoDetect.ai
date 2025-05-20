import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const imagePreviewStyles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    position: 'relative', 
    backgroundColor: 'black',
  },
  fullScreenImage: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlayButtonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10, 
  },
  takeAnotherButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});