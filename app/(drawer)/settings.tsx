import CardProfile from "@/components/shared/CardProfile";
import LegalAssistantLayout from "@/components/widgets/LegalAssistantLayout";
import React from "react";
import { ScrollView, Text } from "react-native";

const SettingsScreen = () => {
  return (
    <ScrollView className="p-4">
      <CardProfile />

      <Text className="text-white font-bold text-xl mt-5">
        Legal Assistant Personality
      </Text>
      <LegalAssistantLayout />
    </ScrollView>
  );
};

export default SettingsScreen;
