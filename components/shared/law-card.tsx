import * as React from "react";
import { Pressable, Text, View } from "react-native";
import { cn } from "@/lib/utils";
import type { Law } from "@/types/law";

interface LawCardProps {
  law: Law;
  onPress?: () => void;
  isSelected?: boolean;
  className?: string;
}

export function LawCard({ law, onPress, isSelected, className }: LawCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "bg-secondary/80 backdrop-blur-md rounded-2xl p-4 mb-3 border transition-all",
        isSelected
          ? "border-primary shadow-lg shadow-primary/20"
          : "border-primary/30",
        className
      )}
    >
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center gap-2">
          <View className="w-2 h-2 rounded-full bg-primary" />
          <Text className="text-xs text-primary uppercase font-bold tracking-widest">
            {law.country}
          </Text>
        </View>
        <Text className="text-xs text-secondary-foreground/60">
          {law.city}
        </Text>
      </View>

      <Text className="text-lg font-bold text-secondary-foreground mb-1">
        {law.name}
      </Text>

      <Text
        className="text-sm text-secondary-foreground/80 mb-3"
        numberOfLines={2}
      >
        {law.description}
      </Text>

      <View className="flex flex-row items-center gap-2">
        <Text className="text-xs text-secondary-foreground/60">
          {law.articles.length} articles
        </Text>
        <Text className="text-xs text-secondary-foreground/40">•</Text>
        <Text className="text-xs text-secondary-foreground/60">
          Updated {law.lastUpdated}
        </Text>
      </View>
    </Pressable>
  );
}
