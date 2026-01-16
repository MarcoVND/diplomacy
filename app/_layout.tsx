import CustomDrawer from "@/components/shared/CustomDrawer";
import CustomHeader from "@/components/shared/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import "./global.css";

export default function RootLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        header: (props) => <CustomHeader {...props} />,
        drawerType: "back",
        drawerPosition: "right",
        drawerStyle: {
          backgroundColor: "#121214",
          width: 320,
        },
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#2c2c2e",
        drawerInactiveTintColor: "#cfd7dd",
        drawerItemStyle: {
          borderBlockColor: "#fff",
          marginVertical: 10,
          // margin: 10,
        },
        sceneStyle: {
          backgroundColor: "#1a1a1a",
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Chat",
          title: "Chat",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="news/index"
        options={{
          drawerLabel: "Noticias",
          title: "Noticias",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="settings/index"
        options={{
          drawerLabel: "Configuración",
          title: "Configuración",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
