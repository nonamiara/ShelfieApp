import { Image } from "react-native";
import { useTheme } from "../components/ThemedContext";

// images
import DarkLogo from "../assets/img/logo_dark.png";
import LightLogo from "../assets/img/logo_light.png";

const ThemedLogo = ({ ...props }) => {
  const { theme } = useTheme();     // ✅ use ThemeContext

  const logo = theme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
