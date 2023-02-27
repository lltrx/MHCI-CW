import { View, Dimensions, StyleSheet, Text } from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";

export default function Destination() {
  return (
    <View style={tailwind("flex flex-col items-center justify-center")}>
      <NavigateButton
        style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
        title="Navigate to MapPage"
        to="MapPage"
      />
    </View>
  );
}
