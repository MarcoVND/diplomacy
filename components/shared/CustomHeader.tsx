import { Ionicons } from "@expo/vector-icons";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = ({ navigation, route, options }: DrawerHeaderProps) => {

  const showLeftIcon = options.headerRight !== null;

  return (
    <SafeAreaView edges={["top"]} className="bg-foreground">
      <View className="flex flex-row items-center justify-between px-4 h-16 ">
        {/* Icono Derecho (Condicional) */}
        <View style={{ width: 28 }}>
          {/* Usamos un View vacío para mantener el espaciado si no hay icono, 
              o mostramos el icono si showLeftIcon es true */}
          {!showLeftIcon ? (
            <TouchableOpacity>
              <Ionicons name="search" size={24} color="#cfd7dd" />
            </TouchableOpacity>
          ) : null}
        </View>

        {/* Título */}
        <View className="flex-col items-center">
          <Text className="text-secondary-foreground text-lg font-bold uppercase">
            Diplomacy
          </Text>
          <Text className="text-primary text-xs font-bold uppercase">
            Legal AI
          </Text>
        </View>

        {/* Botón Menú */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={28} color="#cfd7dd" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
