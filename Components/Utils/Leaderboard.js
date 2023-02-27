import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const data = [
      { name: "John", score: 100 },
      { name: "Jane", score: 200 },
      { name: "Bob", score: 300 },
      { name: "Alice", score: 400 },
    ];
    setLeaderboardData(data);
  }, []);

  return (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <View style={tailwinds("w-[100%] h-[50px] bg-[#6A5ACD]")}>
        <Text style={tailwind("font-bold font-lg")}>Leaderboard</Text>
      </View>
      <View style={tailwind("w-[100%] p-2")}>
        {leaderboardData.map((user, index) => (
          <View
            style={tailwind("flex-row justify-between items-center p-2")}
            key={index}
          >
            <Text style={tailwind("font-bold font-lg")}>{user.name}</Text>
            <Text style={tailwind("font-bold font-lg")}>{user.score}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
