import { Assistant } from "@/types/assistant";

export const ASSISTANTS: Assistant[] = [
  {
    id: "diogenes",
    name: "Diógenes",
    description: "Direct, logical and to the point",
    imageUrl: "https://github.com/shadcn.png",
    icon: {
      name: "bulb-outline",
      color: "#fb923c",
      backgroundColor: "#43270f",
    },
  },
  {
    id: "aspasia",
    name: "Aspasia",
    description: "Retorical and persuasive",
    imageUrl: "https://github.com/shadcn.png",
    icon: {
      name: "star-outline",
      color: "#c084fc",
      backgroundColor: "#392639",
    },
  },
];

export const getAssistantById = (id: string) => {
  return ASSISTANTS.find((assistant) => assistant.id === id);
};
