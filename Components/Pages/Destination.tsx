import { View, Dimensions, StyleSheet, Text } from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";
import PopUp from "../Utils/popUp";
import Constants from "expo-constants";
import BackIcon from "../Utils/backIcon";
import Start from "../Utils/Start";

export default function Destination() {
  return (
    <View style={tailwind(`flex flex-col justify-center top-10`)}>
      <BackIcon to="Home" />
      <NavigateButton
        style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
        title="Navigate to MapPage"
        to="MapPage"
      />
      <View style={tailwind("flex-row justify-between p-12")}>
      <Start />
      </View>
    </View>
  );
}
