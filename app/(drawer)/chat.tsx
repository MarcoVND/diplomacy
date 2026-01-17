import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  const resetOnboarding = async () => {
    // 1. Borramos la marca de "ya visto"
    await AsyncStorage.removeItem("hasViewedOnboarding");

    // 2. Mandamos al usuario de vuelta al inicio (index.tsx)
    // para que la lógica vuelva a evaluar y lo mande al onboarding
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Resetear Onboarding"
        onPress={resetOnboarding}
        color="red"
      />
    </View>
  );
}
