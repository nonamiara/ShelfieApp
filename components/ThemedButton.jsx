import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";
import { useTheme } from "../components/ThemedContext";

function ThemedButton({ style, onPress, children, ...props }) {
  const { theme } = useTheme();
  const themeColors = Colors[theme];

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        { backgroundColor: themeColors.primary },
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
      {...props}
    >
      {typeof children === "string" ? (
        <Text style={[styles.text, { color: themeColors.text }]}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ThemedButton;
