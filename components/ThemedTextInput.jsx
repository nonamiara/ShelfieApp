import { TextInput } from "react-native";
import { Colors } from "../constants/Colors";
import { useTheme } from "../components/ThemedContext";

export default function ThemedTextInput({ style, ...props }) {
  const { theme } = useTheme();         // ✅ use ThemeContext
  const themeColors = Colors[theme];    // ✅ get active theme colors

  return (
    <TextInput
      style={[
        {
          backgroundColor: themeColors.uiBackground,
          color: themeColors.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      placeholderTextColor={themeColors.text}
      {...props}
    />
  );
}
