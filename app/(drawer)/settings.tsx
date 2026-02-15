import CardProfile from "@/components/shared/CardProfile";
import LegalAssistantLayout from "@/components/widgets/LegalAssistantLayout";
import { LocationToggle } from "@/components/shared/location-toggle";
import { useLocation } from "@/hooks/useLocation";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const SettingsScreen = () => {
  const { isLocationEnabled, toggleLocation, isLoading, currentLocation } = useLocation();

  return (
    <ScrollView className="p-4">
      <CardProfile />

      <Text className="text-white font-bold text-xl mt-5 mb-3">
        Location
      </Text>
      <LocationToggle
        isEnabled={isLocationEnabled}
        onToggle={toggleLocation}
        isLoading={isLoading}
      />

      {currentLocation && (
        <View className="mt-2 px-2">
          <Text className="text-xs text-secondary-foreground/60">
            Current: {currentLocation.city}, {currentLocation.country}
          </Text>
        </View>
      )}

      <Text className="text-white font-bold text-xl mt-5 mb-3">
        Legal Assistant Personality
      </Text>
      <LegalAssistantLayout />
    </ScrollView>
  );
};

export default SettingsScreen;
