import { Button, ChatBubble, Checkbox, CheckboxLabel } from "@/components/ui";
import { useOnboarding } from "@/hooks/useOnboarding";
import { Ionicons } from "@expo/vector-icons";
import { useState, useRef, useCallback, useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from "react-native";

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

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Chat() {
  const { resetOnboarding } = useOnboarding();
  const [isChecked, setIsChecked] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    });

    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const handleSendMessage = useCallback(() => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage.trim(),
      isOwn: true,
      timestamp: formatTime(new Date()),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [inputMessage]);

  return (
    <View className="flex-1">
      <ScrollView 
        ref={scrollViewRef} 
        className="flex-1 px-4" 
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isOwn={message.isOwn}
            timestamp={message.timestamp}
          />
        ))}
      </ScrollView>

      <View 
        className="flex flex-row flex-wrap w-11/12 bg-foreground mx-auto rounded-3xl p-2"
        style={{ marginBottom: keyboardHeight > 0 ? keyboardHeight - 20 : 16 }}
      >
        <TextInput
          className="flex-1 text-secondary-foreground"
          placeholderClassName="text-secondary-foreground"
          placeholderTextColor="#cfd7dd"
          placeholder="Ask a legal question..."
          multiline
          textAlignVertical="top"
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <Button className="w-14 rounded-full" onPress={handleSendMessage}>
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
    </View>
  );
}
