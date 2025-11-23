import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../components/ThemedContext";
import { Colors } from "../constants/Colors";

const ThemedView = ({ style, safe = false, ...props }) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();          // ✅ use the theme context
  const themeColors = Colors[theme];     // ✅ get the correct color set

  if (!safe)
    return (
      <View
        style={[{ backgroundColor: themeColors.background }, style]}
        {...props}
      />
    );

  return (
    <View
      style={[
        {
          backgroundColor: themeColors.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
