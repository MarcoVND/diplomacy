import React from "react";
import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CardProfile = () => {
  return (
    <View className="flex-col items-center justify-center w-full h-60 bg-foreground rounded-3xl">
      <Avatar className="size-24">
        <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
      <Text className="text-white font-bold text-2xl">Diplomacy</Text>
      <Text className="text-secondary-foreground font-semibold text-sm">
        Your Legal Assistant
      </Text>
    </View>
  );
};

export default CardProfile;
