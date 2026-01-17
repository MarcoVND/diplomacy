// app/index.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async () => {
    try {
      const viewed = await AsyncStorage.getItem("hasViewedOnboarding");

      // if (viewed === "true") {
      //   // Si ya lo vio, vamos directo al Home del Drawer
      //   // .replace es clave para no poder volver atrás
      //   router.replace("/(drawer)/chat");
      // } else {
      //   // Si es nuevo, vamos al Onboarding
      //   router.replace("/SelectAssistant");
      // }
      router.replace("/SelectAssistant");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
