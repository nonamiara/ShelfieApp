import { StyleSheet, View } from "react-native";
import { Colors } from "../constants/Colors";
import { useTheme } from "../components/ThemedContext";

const ThemedCard = ({ style, ...props }) => {
  const { theme } = useTheme();          
  const themeColors = Colors[theme];    
  

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
