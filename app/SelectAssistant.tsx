import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AssistantCard from "@/components/widgets/AssistantCard";
import { ASSISTANTS } from "@/constants/assistants";
import { useOnboarding } from "@/hooks/useOnboarding";
import { useLegalAssistantStore } from "@/stores/LegalAssistantStore";
import type { AssistantId } from "@/types/assistant";

export default function SelectAssistant() {
  const { completeOnboarding } = useOnboarding();
  const { selectedAssistantId, setSelectedAssistant } =
    useLegalAssistantStore();

  const handleSelect = (assistantId: AssistantId) => {
    setSelectedAssistant(assistantId);
  };

  const handleFinish = () => {
    completeOnboarding();
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 relative">
        <LinearGradient
          colors={["#1e5f74", "#0d2b36", "#000000"]}
          className="absolute inset-0"
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />

        {/* CONTENIDO PRINCIPAL */}
        <View className="flex-1 items-center justify-center px-6 gap-4">
          {/* Círculo del Ícono */}
          <View className="w-24 h-24 rounded-full bg-white/10 items-center justify-center mb-8 border border-white/5">
            <Text className="text-4xl">🕯️</Text>
          </View>

          {/* Subtítulo */}
          <Text className="text-slate-400 font-bold text-xs tracking-[4px] mb-4 uppercase">
            Diplomacy AI
          </Text>

          {/* Título Principal */}
          <Text className="text-white text-4xl font-bold text-center mb-4 leading-tight">
            Select Your{"\n"}Legal Assistant
          </Text>

          {/* Descripción */}
          <Text className="text-slate-400 text-center text-lg leading-7 px-4">
            Choose the voice and personality that best suits your legal needs.
          </Text>

          <View className="flex flex-row items-center justify-center gap-4">
            {ASSISTANTS.map((assistant) => (
              <AssistantCard
                key={assistant.id}
                assistant={assistant}
                isSelected={selectedAssistantId === assistant.id}
                onPress={() => handleSelect(assistant.id)}
              />
            ))}
          </View>
          <Pressable
            onPress={handleFinish}
            className="flex flex-row items-center justify-center bg-primary w-full h-16 rounded-full"
          >
            <Text className="text-primary-foreground text-lg font-bold">
              Finish
            </Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#130800"
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
