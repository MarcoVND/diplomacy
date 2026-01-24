export type AssistantId = "diogenes" | "aspasia";

export interface Assistant {
  id: AssistantId;
  name: string;
  description: string;
  imageUrl: string;
  icon: {
    name: string;
    color: string;
    backgroundColor: string;
  };
}
