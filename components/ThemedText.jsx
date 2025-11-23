import { Text } from "react-native";
import { Colors } from "../constants/Colors";
import { useTheme } from "../components/ThemedContext";

const ThemedText = ({ style, title = false, ...props }) => {
  const { theme } = useTheme();          // ✅ use ThemeContext
  const themeColors = Colors[theme];     // ✅ get active theme colors

  // Title text uses theme.title, normal text uses theme.text
  const textColor = title ? themeColors.title : themeColors.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
