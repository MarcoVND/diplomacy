import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_left",
        contentStyle: {
          backgroundColor: "#1a1a1a",
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="SelectAssistant" options={{ gestureEnabled: true }} />
      <Stack.Screen
        name="customizeAssistant"
        options={{ gestureEnabled: true }}
      />
      <Stack.Screen name="(drawer)" options={{ gestureEnabled: true }} />
    </Stack>
  );
}
