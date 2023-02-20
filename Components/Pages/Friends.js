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
      <NavigateButton
        style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
        title="Navigate to FriendHistory"
        to="FriendHistory"
      />
    </View>
    </SafeAreaView>
  );
}
