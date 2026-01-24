import { ActivityIndicator, View } from "react-native";
import { useOnboarding } from "@/hooks/useOnboarding";

export default function Index() {
  useOnboarding();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
