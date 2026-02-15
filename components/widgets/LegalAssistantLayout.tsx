import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { ASSISTANTS } from "@/constants/assistants";
import { useLegalAssistantStore } from "@/stores/LegalAssistantStore";
import { Checkbox } from "@/components/ui/checkbox";
import LegalAssistantSelector from "./LegalAssistantSelector";

const LegalAssistantLayout = () => {
  const router = useRouter();
  const { selectedAssistantId, setSelectedAssistant } =
    useLegalAssistantStore();

  return (
    <View className="flex-col w-full h-60 rounded-3xl gap-5 mt-5">
      {ASSISTANTS.map((assistant) => (
        <LegalAssistantSelector
          key={assistant.id}
          onPress={() => setSelectedAssistant(assistant.id)}
        >
          <View
            className="p-2 rounded-full"
            style={{ backgroundColor: assistant.icon.backgroundColor }}
          >
            <Ionicons
              name={assistant.icon.name as any}
              size={24}
              color={assistant.icon.color}
            />
          </View>
          <Text className="flex-1 text-white font-bold text-xl shrink">
            {assistant.name}
          </Text>
          <View>
            <Checkbox
              id={assistant.id}
              checked={selectedAssistantId === assistant.id}
              onCheckedChange={() => setSelectedAssistant(assistant.id)}
              className="rounded-full"
            />
          </View>
        </LegalAssistantSelector>
      ))}

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
