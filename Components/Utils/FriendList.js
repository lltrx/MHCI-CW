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
    setFriends([...friends, { id: 3, name: "Charlie" }]);
    console.log("Add friend");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Friends</Text>
      <View>
        {friends.map((friend) => (
          <NavigateButton
            style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
            title={friend.name}
            to="FriendHistory"
          />
        ))}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddFriend}>
        <Text style={styles.addButtonText}>Add Friend</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  friendsList: {
    flex: 1,
    marginRight: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  friendItem: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginVertical: 5,
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#5cb85c",
    borderRadius: 10,
    marginVertical: 5,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
