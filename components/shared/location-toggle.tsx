import * as React from "react";
import { View, Text } from "react-native";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

interface LocationToggleProps {
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
  isLoading?: boolean;
  className?: string;
}

export function LocationToggle({
  isEnabled,
  onToggle,
  isLoading,
  className,
}: LocationToggleProps) {
  return (
    <View
      className={cn(
        "bg-secondary/80 backdrop-blur-md rounded-2xl p-4 border border-primary/30",
        className
      )}
    >
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-col">
          <Text className="text-base font-bold text-secondary-foreground">
            Use my location
          </Text>
          <Text className="text-xs text-secondary-foreground/60 mt-1">
            Automatically detect your location for relevant laws
          </Text>
        </View>
        <Checkbox
          checked={isEnabled}
          onCheckedChange={onToggle}
          id="location-toggle"
          disabled={isLoading}
        />
      </View>
    </View>
  );
}
