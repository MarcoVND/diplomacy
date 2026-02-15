import { Button, ChatBubble, Checkbox, CheckboxLabel } from "@/components/ui";
import { useOnboarding } from "@/hooks/useOnboarding";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from "react-native";

interface Message {
  id: string;
  text: string;
  isOwn: boolean;
  timestamp: string;
}

const MOCK_MESSAGES: Message[] = [
  { id: "1", text: "Hello! How can I help you today?", isOwn: false, timestamp: "10:30 AM" },
  { id: "2", text: "I have a question about contract law", isOwn: true, timestamp: "10:31 AM" },
  { id: "3", text: "Of course! What would you like to know?", isOwn: false, timestamp: "10:32 AM" },
];

export default function Chat() {
  const { resetOnboarding } = useOnboarding();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView className="flex-1 px-4">
        {MOCK_MESSAGES.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isOwn={message.isOwn}
            timestamp={message.timestamp}
          />
        ))}
      </ScrollView>

      <View className="flex flex-row flex-wrap w-11/12 bg-foreground mx-auto rounded-3xl p-2 mb-4">
        <TextInput
          className="flex-1 text-secondary-foreground"
          placeholderClassName="text-secondary-foreground"
          placeholderTextColor="#cfd7dd"
          placeholder="Ask a legal question..."
          multiline
          textAlignVertical="top"
        />
        <Button className="w-14 rounded-full">
          <Ionicons name="send-sharp" size={15}></Ionicons>
        </Button>
        
        <View className="flex flex-row items-center w-full mt-2">
          <Checkbox
            checked={isChecked}
            onCheckedChange={setIsChecked}
            id="feature-toggle"
          />
          <CheckboxLabel className="text-secondary-foreground">Web</CheckboxLabel>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
