import React from "react";
import { Pressable } from "react-native";

const LegalAssistantSelector = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) => {
  return (
    <Pressable
      className="flex flex-row gap-5 w-full bg-foreground items-center rounded-full border border-secondary-foreground p-4"
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default LegalAssistantSelector;
