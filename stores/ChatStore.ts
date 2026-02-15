import { create } from "zustand";
import type { Message, ChatState } from "@/types/chat";
import { formatTime, generateId } from "@/lib/utils";

const MOCK_MESSAGES: Message[] = [
  { id: "1", text: "Hello! How can I help you today?", isOwn: false, timestamp: "10:30 AM" },
  { id: "2", text: "I have a question about contract law", isOwn: true, timestamp: "10:31 AM" },
  { id: "3", text: "Of course! What would you like to know?", isOwn: false, timestamp: "10:32 AM" },
];

export const useChatStore = create<ChatState>((set) => ({
  messages: MOCK_MESSAGES,
  inputMessage: "",
  isWebEnabled: false,

  setInputMessage: (message: string) => set(() => ({ inputMessage: message })),

  addMessage: (text: string) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: generateId(),
          text: text.trim(),
          isOwn: true,
          timestamp: formatTime(new Date()),
        },
      ],
      inputMessage: "",
    })),

  setWebEnabled: (enabled: boolean) => set(() => ({ isWebEnabled: enabled })),

  clearMessages: () => set(() => ({ messages: [] })),
}));
