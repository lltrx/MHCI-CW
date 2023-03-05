import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { data } from "./data";
import tailwind from "tailwind-rn";
import BackIcon from "../Utils/backIcon";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FriendHistory() {
  const distances = data.map((item) => item.distance);
  const times = data.map((item) => item.time);
  const speeds = data.map((item) => item.speed);

  const handlePopup = () => {
    alert("Request sent");
  };

  return (
    <View style={tailwind("top-10")}>
      <BackIcon to="Friends" />
      <View style={tailwind("items-center ")}>
      <Text style={tailwind("text-lg font-bold")}>Friend's Profile</Text>
      <View style={tailwind("p-2")}>
        <Text>Friend's best cycle</Text>
        <Text>Best Distance: 20 km</Text>
        <Text>Elpased Time: 40 minutes</Text>
        <Text>Average Speed: 25 km/h</Text>
      </View>
      <View style={tailwind("p-4")}>
        <LineChart
          data={{
            labels: ["1/12/20", "7/12/20", "9/12/20", "4/1/21", "9/1/21"],
            legend: ["Distance"],

            datasets: [
              {
                data: distances,
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red line
              },
            ],
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
      <View style={tailwind("p-4")}>
        <Text>Friend has their move goal private, you can request them to share their move goal</Text>
        <View style={tailwind("p-2")}>
          <TouchableOpacity style={tailwind("bg-blue-500 p-2 rounded")} onPress={() => {
            console.log("Request sent");
            handlePopup();
          }
        }>
            <Text style={tailwind("text-white text-center")}>Request to view move goal</Text>
          </TouchableOpacity>
          </View>
      </View>
      </View>
    </View>
  );
}
