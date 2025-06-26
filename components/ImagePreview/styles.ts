import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const imagePreviewStyles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "black",
  },
  fullScreenImage: {
    width: width,
    height: height,
    position: "absolute",
    top: 0,
    left: 0,
  },
  overlayButtonContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  takeAnotherButton: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  predictionOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  predictionBox: {
    position: "absolute",
    bottom: 110,
    left: 30,
    right: 30,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
  },
  predictionText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 20,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#cccccc",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
