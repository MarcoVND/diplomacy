import { Button, View } from "react-native";
import { useOnboarding } from "@/hooks/useOnboarding";

export default function Chat() {
  const { resetOnboarding } = useOnboarding();

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
