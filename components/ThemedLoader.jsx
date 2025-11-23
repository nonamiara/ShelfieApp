import { ActivityIndicator } from "react-native";
import { Colors } from "../constants/Colors";
import { useTheme } from "../components/ThemedContext";

import ThemedView from "./ThemedView";

const ThemedLoader = () => {
  const { theme } = useTheme();         // ✅ use ThemeContext
  const themeColors = Colors[theme];    // ✅ get theme colors

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={themeColors.text} />
    </ThemedView>
  );
};

export default ThemedLoader;
