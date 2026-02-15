import { useRef, useCallback } from "react";
import { useChatStore } from "@/stores/ChatStore";
import type { Message } from "@/types/chat";

export function useChat() {
  const { 
    inputMessage, 
    setInputMessage, 
    addMessage, 
    messages,
    isWebEnabled,
    setWebEnabled,
  } = useChatStore();

  const scrollViewRef = useRef<any>(null);

  const sendMessage = useCallback(() => {
    if (!inputMessage.trim()) return;
    addMessage(inputMessage);

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [inputMessage, addMessage]);

  const getInputContainerStyle = (keyboardHeight: number) => ({
    marginBottom: keyboardHeight > 0 ? keyboardHeight - 20 : 16,
  });

  return {
    messages,
    inputMessage,
    setInputMessage,
    sendMessage,
    scrollViewRef,
    isWebEnabled,
    setWebEnabled,
    getInputContainerStyle,
  };
}
