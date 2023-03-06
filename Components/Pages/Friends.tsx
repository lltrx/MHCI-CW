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
    <View style={tailwind("flex-1  top-10")}>
       <BackIcon to="Home" />
      <FriendList />
      <View style={tailwind("flex-1 items-center justify-center")}>
        <Text style={tailwind("text-lg font-bold")}>Leaderboard</Text>
      </View>
      <View style={tailwind("flex-1 items-center justify-center")}>
        <BarChart
          data={{
          labels: ["Alex", "Bob", "You"],
          datasets: [
            {
              data: [25, 31, 20],
            },
          ],
        }}
        width={350}
        height={220}
        yAxisLabel={""}
        yAxisSuffix={"km"}
        fromZero={true}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        />
      </View>
    </View>
  );
}
