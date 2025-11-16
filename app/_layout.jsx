import { Stack, useRouter, useSegments } from "expo-router";
import { Text, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Colors } from "../constants/Colors";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";
import { ThemeProvider, useTheme } from "../components/ThemedContext";

// 🔹 This component will use the theme context
const MainLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const segments = useSegments();

  const themeColors = Colors[theme];

  return (
    <>
      <StatusBar style="auto" />

      <Stack
      initialRouteName="index"
        screenOptions={{
          headerStyle: { backgroundColor: themeColors.navBackground },
          headerTintColor: themeColors.title,

          headerLeft: () => {
            const isOnIndexPage = segments.length > 1;
            return isOnIndexPage ? (
              <Pressable onPress={() => router.back()}>
                <Text style={[styles.goBackButton, { color: themeColors.title }]}>
                  ← Back
                </Text>
              </Pressable>
            ) : null;
          },

          // 🌙 Theme Toggle Button
          headerRight: () => (
            <Pressable onPress={toggleTheme} style={{ paddingRight: 15 }}>
              <Text style={{ color: themeColors.title, fontSize: 18 }}>
                {theme === "light" ? "🌙" : "☀️"}
              </Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </>
  );
};

// 🔹 Wrap the entire app in the theme provider
export default function RootLayout() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BooksProvider>
          <MainLayout />
        </BooksProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  goBackButton: {
    fontSize: 18,
  },
});
