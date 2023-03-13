import { View, Dimensions, StyleSheet, Text } from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";
import PopUp from "../Utils/popUp";
import Constants from "expo-constants";
import BackIcon from "../Utils/backIcon";
import Start from "../Utils/Start";

export default function Training() {
  return (
    <View style={tailwind(`flex flex-col justify-center top-10`)}>
      <BackIcon to="Home" />
      <View style={tailwind("flex-row justify-between p-12")}>
      <Start />
      </View>
    </View>
  );
}
