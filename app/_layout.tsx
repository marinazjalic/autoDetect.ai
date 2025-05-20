import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#222'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold', 
        },
        headerTitle: 'autoDetect.ai'
      }}
    />
  );
}
