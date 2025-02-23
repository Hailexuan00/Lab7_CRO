import { Image, StyleSheet, View, ImageBackground, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import TrangChu from "./screen/TrangChuScreen";
import ProfileScreen from "./screen/ProfileScreen";

// Tạo Stack và Drawer Navigator
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Component HomeScreen với Stack Navigator
export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={MenuScreen} />
      <Stack.Screen name="Home" component={TrangChu} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

// Component Menu với Drawer Navigator
const MenuScreen = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={TrangChu}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="person-circle" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="chatbubbles" size={size} color={color} />,
        }}
      />

      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

// Các màn hình con
const ChatScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Chat Screen</Text>
  </View>
);

const SettingScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Setting Screen</Text>
  </View>
);

// Custom Drawer Content
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Ảnh nền header */}
      <ImageBackground
        source={{ uri: "https://as1.ftcdn.net/jpg/06/03/60/38/1000_F_603603841_ANzdBfxQPS3TDEq2OnBEsYvxez5wK7LJ.jpg" }}
        style={styles.headerBackground}
      >
        <View style={styles.header}>
          <Image source={{ uri: "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong-xinh-xan.jpg?1704788263223" }} style={styles.headerImage} />
          <Text style={styles.headerText}>Lê Xuân Hải</Text>
        </View>
      </ImageBackground>

      {/* Danh sách các mục Drawer */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerBackground: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
});

