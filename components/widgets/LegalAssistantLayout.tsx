import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { useLegalAssistantStore } from "../../stores/LegalAssistantStore";
import { Checkbox } from "../ui/checkbox";
import LegalAssistantSelector from "./LegalAssistantSelector";

import { useRouter } from "expo-router";

const LegalAssistantLayout = () => {
  const router = useRouter();
  const { selectedAssistantId, setSelectedAssistant } =
    useLegalAssistantStore();

  return (
    <View className="flex-col w-full h-60 rounded-3xl gap-5 mt-5">
      <LegalAssistantSelector onPress={() => setSelectedAssistant("diogenes")}>
        <View className="p-2 bg-[#43270f] rounded-full">
          <Ionicons name="bulb-outline" size={24} color="#fb923c" />
        </View>
        <Text className="flex-1 text-white font-bold text-xl shrink">
          Diógenes
        </Text>
        <View>
          <Checkbox
            id="diogenes"
            checked={selectedAssistantId === "diogenes"}
            onCheckedChange={() => setSelectedAssistant("diogenes")}
            className="rounded-full"
          />
        </View>
      </LegalAssistantSelector>

      <LegalAssistantSelector onPress={() => setSelectedAssistant("aspasia")}>
        <View className="p-2 bg-[#392639] rounded-full">
          <Ionicons name="star-outline" size={24} color="#c084fc" />
        </View>
        <Text className="flex-1 text-white font-bold text-xl shrink">
          Aspasia
        </Text>
        <View>
          <Checkbox
            id="aspasia"
            checked={selectedAssistantId === "aspasia"}
            onCheckedChange={() => setSelectedAssistant("aspasia")}
            className="rounded-full"
          />
        </View>
      </LegalAssistantSelector>

      <LegalAssistantSelector onPress={() => router.push("/settings")}>
        <View className="p-2 bg-[#1f2937] rounded-full">
          <Ionicons name="add-outline" size={24} color="#9ca3af" />
        </View>
        <Text className="flex-1 text-white font-bold text-xl shrink">
          Create Custom Assistant
        </Text>
        <View>
          <Ionicons name="chevron-forward" size={24} color="#cfd7dd" />
        </View>
      </LegalAssistantSelector>
    </View>
  );
};

export default LegalAssistantLayout;
