// app/onboarding.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLegalAssistantStore } from "../stores/LegalAssistantStore";

export default function Onboarding() {
  const router = useRouter();

  const { selectedAssistantId, setSelectedAssistant } =
    useLegalAssistantStore();

  const handleSelect = async (assistantId: string) => {
    setSelectedAssistant(assistantId);
  };

  const handleFinish = async () => {
    // 1. Guardamos la marca
    await AsyncStorage.setItem("hasViewedOnboarding", "true");

    // 2. Reemplazamos la ruta hacia el grupo del drawer
    router.replace("/(drawer)/chat");
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
            <Pressable
              onPress={() => handleSelect("diogenes")}
              className={`flex flex-col items-center gap-4 bg-foreground p-5 rounded-3xl h-64 w-2/5 border-2 ${
                selectedAssistantId === "diogenes"
                  ? "border-primary"
                  : "border-transparent"
              } active:scale-95 active:opacity-80`}
            >
              <Image
                source={{ uri: "https://github.com/shadcn.png" }}
                className="w-full h-32 rounded-2xl"
              />
              <View className="flex flex-col items-center gap-2">
                <Text className="text-white text-lg font-bold">Diógenes</Text>
                <Text className="text-slate-400 text-center text-sm">
                  Direct, logical and to the point
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => handleSelect("aspasia")}
              className={`flex flex-col items-center gap-4 bg-foreground p-5 rounded-3xl h-64 w-2/5 border-2 ${
                selectedAssistantId === "aspasia"
                  ? "border-primary"
                  : "border-transparent"
              } active:scale-95 active:opacity-80`}
            >
              <Image
                source={{ uri: "https://github.com/shadcn.png" }}
                className="w-full h-32 rounded-2xl"
              />
              <View className="flex flex-col items-center gap-2">
                <Text className="text-white text-lg font-bold">Aspasia</Text>
                <Text className="text-slate-400 text-center text-sm">
                  Retorical and persuasive
                </Text>
              </View>
            </Pressable>
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
