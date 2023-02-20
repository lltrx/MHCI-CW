import React from "react";
import tailwind from "tailwind-rn";
import { View, Text, SafeAreaView } from "react-native";
import Leaderboard from "../Utils/Leaderboard";
import FriendList from "../Utils/FriendList";
import FriendHistory from "../Utils/FriendHistory";
import NavigateButton from "../Utils/NavigateButton";

export default function Friends() {
  return (
    <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
      <View>
      <FriendList />
    </View>
    </SafeAreaView>
  );
}
