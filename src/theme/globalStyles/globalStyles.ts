import { StyleSheet } from "react-native";
import { Colors } from "./colors";

export const globalStyles = StyleSheet.create({
  defaultShadow: {
    elevation: 4,
    shadowColor: Colors.black,
    shadowOpacity: 0.35,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
