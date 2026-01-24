import { create } from "zustand";
import type { AssistantId } from "@/types/assistant";

export const useLegalAssistantStore = create<LegalAssistantState>((set) => ({
  selectedAssistantId: null,
  setSelectedAssistant: (id: AssistantId) =>
    set(() => ({ selectedAssistantId: id })),
}));

interface LegalAssistantState {
  selectedAssistantId: AssistantId | null;
  setSelectedAssistant: (id: AssistantId) => void;
}