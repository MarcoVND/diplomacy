import CustomDrawer from "@/components/shared/CustomDrawer";
import CustomHeader from "@/components/shared/CustomHeader";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

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
        swipeEnabled: true,
        swipeMinDistance: 900,
      }}
    >
      <Drawer.Screen
        name="chat"
        options={{
          drawerLabel: "Assistant",
          title: "Assistant",
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
        name="news"
        options={{
          drawerLabel: "News",
          title: "News",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="law"
        options={{
          drawerLabel: "Law",
          title: "Law",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
