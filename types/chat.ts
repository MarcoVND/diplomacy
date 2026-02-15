export interface Message {
  id: string;
  text: string;
  isOwn: boolean;
  timestamp: string;
}

export interface ChatState {
  messages: Message[];
  inputMessage: string;
  isWebEnabled: boolean;
  setInputMessage: (message: string) => void;
  addMessage: (text: string) => void;
  setWebEnabled: (enabled: boolean) => void;
  clearMessages: () => void;
}
