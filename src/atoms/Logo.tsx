import { View, Image, StyleSheet } from "react-native";

const IntellectaQuizLogo = require("../assets/IntellectaQuizLogo.png");

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 4,
    alignItems: "center",
  },
});

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={IntellectaQuizLogo} />
    </View>
  );
};

export default Logo;
