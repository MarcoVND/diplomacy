import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        contentStyle: {
          backgroundColor: "#1a1a1a",
        },
      }}
    >
      <Stack.Screen name="index" />

      <Stack.Screen name="onboarding" options={{ gestureEnabled: false }} />

      <Stack.Screen name="(drawer)" />
    </Stack>
  );
}
