import { useOnboarding } from "@/hooks/useOnboarding";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  useOnboarding();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
