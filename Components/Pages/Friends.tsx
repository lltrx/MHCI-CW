import React from "react";
import tailwind from "tailwind-rn";
import {BarChart} from "react-native-chart-kit";
import { View, Text } from "react-native";
import FriendList from "../Utils/FriendList";
import FriendHistory from "../Utils/FriendHistory";
import NavigateButton from "../Utils/NavigateButton";
import BackIcon from "../Utils/backIcon";

export default function Friends() {
  return (
    <View style={tailwind("flex-1 mt-10")}>
       <BackIcon to="Home" />
      <FriendList />
     
    </View>
  );
}
