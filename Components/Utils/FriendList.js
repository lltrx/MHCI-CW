import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import NavigateButton from '../Utils/NavigateButton';

export default function FriendList(){
  const [friends, setFriends] = useState([
    { id: 1, name: 'Alice'},
    { id: 2, name: 'Bob' },
  ]);

  const handleAddFriend = () => {
    // TODO: Implement adding a friend
    console.log('Add friend');
  };

  const handleFriendPress = (friend) => {
    console.log(friend);
    <NavigateButton
        style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
        title=""
        to="FriendHistory"
        />
    };
    

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Friends</Text>
      <View >
        {friends.map((friend) => (
          <TouchableOpacity
            key={friend.id}
            style={styles.friendItem}
            onPress={() => handleFriendPress(friend)}
          >
            <Text>{friend.name}</Text>
          </TouchableOpacity>
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
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    friendsList: {
      flex: 1,
      marginRight: 10,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    friendItem: {
      width: '100%',
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#eee',
      borderRadius: 10,
      marginVertical: 5,
    },
    addButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#5cb85c',
      borderRadius: 10,
      marginVertical: 5,
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    });