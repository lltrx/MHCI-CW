import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Leaderboard</Text>
      </View>
      <View style={styles.leaderboard}>
        {leaderboardData.map((user, index) => (
          <View style={styles.user} key={index}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userScore}>{user.score}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#6A5ACD",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  leaderboard: {
    width: "100%",
    padding: 10,
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  userScore: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
