import { View, Text, StyleSheet } from "react-native";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import tailwind from "tailwind-rn";
import { data } from "../Utils/data";

export default function MyProfile() {
  const distances = data.map((item) => item.distance);
  const times = data.map((item) => item.time);
  const speeds = data.map((item) => item.speed);

  return (
    <View style={tailwind("flex-1 flex-col items-center")}>
      <View style={tailwind("flex-1 flex-col items-center mb-2")}>
        <Text style={tailwind("text-2xl font-bold")}>My Profile</Text>
        <Text>Best Distance: 20 km</Text>
        <Text>Elpased Time: 40 minutes</Text>
        <Text>Average Speed: 25 km/h</Text>
        <Text>My last cycle</Text>
        <Text>Distance: 10 km</Text>
        <Text>Elpased Time: 45 minutes</Text>
        <Text>Average Speed: 20 km/h</Text>
      </View>
      <View
        style={tailwind("flex-1 flex-col items-center justify-between mb-20")}
      >
        <LineChart
          data={{
            labels: [
              "11/01/21",
              "16/01/21",
              "21/01/21",
              "26/01/21",
              "31/01/21",
            ],
            datasets: [
              {
                data: distances,
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red line
                strokeWidth: 2, // optional
              },
            ],
            legend: ["Distance"], // optional
          }}
          width={350} // from react-native
          height={220}
          yAxisSuffix={"km"}
          fromZero={true}
          chartConfig={{
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`,
            propsForDots: {
              r: "6",
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View
        style={tailwind("flex-1 flex-col items-center justify-center m-20")}
      >
        <ProgressChart
          data={{
            labels: ["Distance", "Time", "Speed"],
            data: [0.4, 0.6, 0.8],
          }}
          width={350}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
        />
      </View>
    </View>
  );
}
