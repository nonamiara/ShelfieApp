import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useTheme } from "../components/ThemedContext";

const ThemedCard = ({ style, ...props }) => {
  const { theme } = useTheme();          // ✅ use ThemeContext
  const themeColors = Colors[theme];     // ✅ get active theme colors
  

  return (
    <View
      style={[
        { backgroundColor: themeColors.uiBackground },
        styles.card,
        style
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    
    borderRadius: 5,
    padding: 20,
  },
});
