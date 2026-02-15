import * as React from "react";
import { ScrollView } from "react-native";
import { ChatBubble } from "@/components/ui/chat-bubble";
import type { Message } from "@/types/chat";

interface MessageListProps {
  messages: Message[];
  scrollViewRef: React.RefObject<ScrollView>;
}

export function MessageList({ messages, scrollViewRef }: MessageListProps) {
  return (
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
  );
}
