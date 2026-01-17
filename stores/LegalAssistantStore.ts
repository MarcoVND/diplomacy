import { create } from "zustand";

export const useLegalAssistantStore = create<LegalAssistantState>((set) => ({
  selectedAssistantId: null,
  setSelectedAssistant: (id: string) =>
    set(() => ({ selectedAssistantId: id })),
}));

interface LegalAssistantState {
  selectedAssistantId: string | null;
  setSelectedAssistant: (id: string) => void;
}