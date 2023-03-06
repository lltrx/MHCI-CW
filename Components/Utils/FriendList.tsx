import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";

export default function FriendList(friend) {
  const [friends, setFriends] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

  const handleAddFriend = () => {
    setFriends([
      ...friends,
      { id: friends.length + 1, name: "New Friend" },
    ]);
  };
  return (
    <View style={tailwind("flex-1 flex-col top-56 items-center")}>
      <Text style={tailwind("text-lg font-bold")}>Friends:</Text>
      <View>
        {friends.map((friend) => (
          <NavigateButton
            key={friend.id.toString()} // add key prop here
            style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
            title={friend.name}
            to="FriendHistory"
          />
        ))}
      </View>
      <TouchableOpacity
        style={tailwind("bg-green-800 py-2 px-2 rounded-md m-5")}
        onPress={handleAddFriend}
      >
        <Text style={tailwind("text-white font-bold")}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );
}
