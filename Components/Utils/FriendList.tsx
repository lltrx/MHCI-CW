import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";
import {BarChart} from "react-native-chart-kit"
export default function FriendList(friend) {
  const [friends, setFriends] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
  const [newFriendName, setNewFriendName] = useState("");

  const handleAddFriend = () => {
    if (newFriendName.trim() === "") {
      return;
    }
    setFriends([
      ...friends,
      { id: friends.length + 1, name: newFriendName },
    ]);
    setNewFriendName("");
  };

  return (
    <View style={tailwind("flex-1 flex-col top-56 items-center")}>
      <Text style={tailwind("text-lg font-bold")}>Friends:</Text>
      <View>
        {friends.map((friend) => (
          <NavigateButton
            key={friend.id.toString()}
            style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
            title={friend.name}
            to="FriendHistory"
          />
        ))}
      </View>
      <View style={tailwind("flex-row items-center justify-center")}>
        <TextInput
          style={tailwind("border-2 rounded-md p-2 w-1/2")}
          onChangeText={(text) => setNewFriendName(text)}
          value={newFriendName}
          placeholder="Enter friend name"
        />
        <TouchableOpacity
          style={tailwind("bg-green-800 py-2 px-2 rounded-md m-5")}
          onPress={handleAddFriend}
        >
          <Text style={tailwind("text-white font-bold")}>Add Friend</Text>
        </TouchableOpacity>
      </View>
      <View style={tailwind("mb-20 items-center justify-center")}>
      <Text style={tailwind("text-lg font-bold")}>Leaderboard</Text>
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
