import { Assistant } from "@/types/assistant";
import { Image, Pressable, Text, View } from "react-native";

interface AssistantCardProps {
  assistant: Assistant;
  isSelected: boolean;
  onPress: () => void;
}

const AssistantCard = ({
  assistant,
  isSelected,
  onPress,
}: AssistantCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex flex-col items-center gap-4 bg-foreground p-5 rounded-3xl h-64 w-2/5 border-2 ${
        isSelected ? "border-primary" : "border-transparent"
      } active:scale-95 active:opacity-80`}
    >
      <Image
        source={{ uri: assistant.imageUrl }}
        className="w-full h-32 rounded-2xl"
      />
      <View className="flex flex-col items-center gap-2">
        <Text className="text-white text-lg font-bold">{assistant.name}</Text>
        <Text className="text-slate-400 text-center text-sm">
          {assistant.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default AssistantCard;
