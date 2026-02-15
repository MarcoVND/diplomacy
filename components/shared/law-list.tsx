import * as React from "react";
import { Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { LawCard } from "@/components/shared/law-card";
import type { Law } from "@/types/law";

interface LawListProps {
  laws: Law[];
  selectedLawId?: string | null;
  onLawPress: (law: Law) => void;
  locationLabel?: string;
}

const renderLawItem = ({ item }: { item: Law }) => (
  <LawCard law={item} />
);

export function LawList({ laws, selectedLawId, onLawPress, locationLabel }: LawListProps) {
  if (laws.length === 0) {
    return (
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-secondary-foreground/60 text-center">
          No laws found for this location
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      {locationLabel && (
        <View className="px-4 pt-4 pb-2">
          <Text className="text-xs text-secondary-foreground/60 uppercase tracking-wider">
            Showing laws for {locationLabel}
          </Text>
        </View>
      )}
      <FlashList
        data={laws}
        renderItem={renderLawItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
