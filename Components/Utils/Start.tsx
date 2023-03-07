import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import tailwind from "tailwind-rn";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Start() {
  const [speed, setSpeed] = useState(0);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [start, setStart] = useState(false);
  const [show, setShow] = useState(true);

  const startButton = () => {
    setStart(true);
    setShow(false);
  };

  const loop = () => {
    timeLoop();
    distanceLoop();
    speedLoop();
  };

  const timeLoop = () => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        setTime(i);
      }, i * 1000);
    }
  };

  const distanceLoop = () => {
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        setDistance(i);
      }, i * 200);
    }
  };

  const speedLoop = () => {
    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        setSpeed(i);
      }, i * 1000);
    }
  };

  return (
    <View style={tailwind("flex-1 items-center justify-center m-20")}>
      {show && (
        <TouchableOpacity
          style={tailwind("bg-blue-500 px-5 py-3 mt-20  rounded-full")}
          onPress={() => {
            startButton();
            loop();
          }}
        >
          <Text style={tailwind("text-sm font-bold")}>Start</Text>
        </TouchableOpacity>
      )}
      {start && (
        <View>
          <Text style={tailwind("text-sm font-bold")}>Speed: {speed} km/h</Text>
          <Text style={tailwind("text-sm font-bold")}>Time: {time} s</Text>
          <Text style={tailwind("text-sm font-bold")}>
            Distance: {distance} km
          </Text>
          <TouchableOpacity
            style={tailwind(
              "bg-blue-500 items-center px-5 py-3  mt-2 rounded-full"
            )}
            onPress={() => {
              setStart(false);
              setShow(true);
              setSpeed(0);
              setTime(0);
              setDistance(0);
            }}
          >
            <Text style={tailwind("text-sm font-bold")}>Stop</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
