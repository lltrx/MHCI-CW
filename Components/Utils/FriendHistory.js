import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function FriendHistory(friend) {
  const data = [
    {
      distance: 10,
      time: 20,
      speed: 30,
    },
    {
      distance: 20,
      time: 90,
      speed: 20,
    },
    {
      distance: 15,
      time: 30,
      speed: 30,
    },
    { 
      distance: 20,
      time: 40,
      speed: 25,
    },
    {
      distance: 10,
      time: 45,
      speed: 20,
    },
  ];

  const distances = data.map(item => item.distance);
  const times = data.map(item => item.time);
  const speeds = data.map(item => item.speed);
  // {
  //   data: times,
  //   color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Green line
  // },
  // {
  //   data: speeds,
  //   color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue line
  // },

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alice's Profile</Text>
      <View style={styles.userDetails}>
        <Text>Alice's best cycle</Text>
        <Text>Best Distance: 20 km</Text>
        <Text>Elpased Time: 40 minutes</Text>
        <Text>Average Speed: 25 km/h</Text>
        <Text>Alice's last cycle</Text>
        <Text>Distance: 10 km</Text>
        <Text>Elpased Time: 45 minutes</Text>
        <Text>Average Speed: 20 km/h</Text>
      </View>
      <View style={styles.chartContainer}>
      <LineChart
        data={{
          labels: ['1/12/20', '7/12/20', '9/12/20', '4/1/21', '9/1/21'],
          legend: ['Distance'], 

          datasets: [
            {
              data: distances,
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red line
            },

          ]
        }}
        width={300} // Width of the chart (replace with desired value)
        height={220} // Height of the chart
        yAxisSuffix="km"
        fromZero={true}
        chartConfig={{
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, 
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, 
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartContainer: {
    padding: 10,
  },
  userDetails: {
    padding: 10,
  },
});
