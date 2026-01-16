import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} className="p-4">
      <View className="flex-1 flex-col items-center justify-center gap-2 p-4 bg-foreground rounded-3xl h-60">
        <Avatar className="size-24">
          <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Text className="text-white text-2xl font-bold">Diplomacy User</Text>
        <Text className="text-secondary-foreground text-sm font-bold">
          Asistente legal
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
