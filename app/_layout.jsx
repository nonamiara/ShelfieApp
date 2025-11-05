import { Stack, useRouter, useSegments } from "expo-router";
import { Text, StyleSheet, useColorScheme, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Colors } from "../constants/Colors";
import { UserProvider } from "../contexts/UserContext";
import { BooksProvider } from "../contexts/BooksContext";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const segments = useSegments();

  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar value="auto" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: theme.navBackground },
            headerTintColor: theme.title,
            headerLeft: () => {
              const isOnIndexPage = segments.length > 1;
              return isOnIndexPage ? (
                <Pressable onPress={() => router.back()}>
                  <Text style={styles.goBackButton}>← Back</Text>
                </Pressable>
              ) : null;
            },
          }}
        >
          {/* Groups */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />

          {/* Individual Screens */}
          <Stack.Screen name="index" options={{ title: "Home" }} />
        </Stack>
      </BooksProvider>
    </UserProvider>
  );
};
export default RootLayout;

const styles = StyleSheet.create({
  goBackButton: {
    fontSize: 18,
    color: "#fff",
  },
});
