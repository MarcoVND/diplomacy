import { View } from "react-native";
import { useChat } from "@/hooks/useChat";
import { useKeyboard } from "@/hooks/useKeyboard";
import { ChatInput } from "@/components/shared/chat-input";
import { MessageList } from "@/components/shared/message-list";

export default function Chat() {
  const { 
    messages, 
    inputMessage, 
    setInputMessage,
    sendMessage, 
    scrollViewRef, 
    isWebEnabled, 
    setWebEnabled,
    getInputContainerStyle,
  } = useChat();
  
  const { keyboardHeight } = useKeyboard();
  const inputContainerStyle = getInputContainerStyle(keyboardHeight);

  return (
    <View className="flex-1">
      <MessageList messages={messages} scrollViewRef={scrollViewRef} />
      <ChatInput
        value={inputMessage}
        onChangeText={setInputMessage}
        onSendMessage={sendMessage}
        isWebEnabled={isWebEnabled}
        onWebEnabledChange={setWebEnabled}
        containerStyle={inputContainerStyle}
      />
    </View>
  );
}
