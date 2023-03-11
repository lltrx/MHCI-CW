import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import tailwind from "tailwind-rn";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Audio } from "expo-av";
import TargetPopUp from "./targetPopUp";

const beatAlex = [require("../../assets/beatAlex.m4a")];
const beatBob = [require("../../assets/beatBob.m4a")];
const target = [require("../../assets/target.m4a")];

playSoundBeatAlex = async () => {
  const soundObj = new Audio.Sound();

  try {
    let source = beatAlex[0];
    await soundObj.loadAsync(source);
    await soundObj
      .playAsync()
      .then(async (playbackStatus) => {
        setTimeout(() => {
          soundObj.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

playSoundBeatBob = async () => {
  const soundObj = new Audio.Sound();

  try {
    let source = beatBob[0];
    await soundObj.loadAsync(source);
    await soundObj
      .playAsync()
      .then(async (playbackStatus) => {
        setTimeout(() => {
          soundObj.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

playSoundTarget = async () => {
  const soundObj = new Audio.Sound();

  try {
    let source = target[0];
    await soundObj.loadAsync(source);
    await soundObj
      .playAsync()
      .then(async (playbackStatus) => {
        setTimeout(() => {
          soundObj.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export default function Start() {
  const [speed, setSpeed] = useState(0);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [start, setStart] = useState(false);
  const [show, setShow] = useState(true);
  const [kcal, setKcal] = useState(0);
  const [isVisible , setIsVisible] = useState(false);
  let timeLoopId, distanceLoopId, speedLoopId, kcalLoopId;

  const startButton = () => {
    setStart(true);
    setShow(false);
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const loop = () => {
    timeLoopId = timeLoop();
    distanceLoopId = distanceLoop();
    speedLoopId = speedLoop();
    kcalLoopId = kcalLoop();
  };

  const timeLoop = () => {
    setTimeout(() => {
      setTime((time) => {
        if (time === 10) {
          playSoundBeatAlex();
        } else if (time === 30) {
          playSoundBeatBob();
        } else if (time === 50) {
          playSoundTarget();
          
        } else if (time === 70) {
          setIsVisible(true);
        }
        return (time + 1) % 1000;
      });
      timeLoop();
    }, 500);
  };

  const distanceLoop = () => {
    setTimeout(() => {
      setDistance((distance) => (distance + 1) % 1000);
      distanceLoop();
    }, 300);
  };

  const kcalLoop = () => {
    setTimeout(() => {
      setKcal((kcal) => (kcal + 1) % 1000);
      kcalLoop();
    }, 1000);
  };

  const speedLoop = () => {
    setTimeout(() => {
      setSpeed((speed) => {
        if (speed < 50) {
          return (speed + 1) % 100;
        } else {
          return 50;
        }
      });
      speedLoop();
    }, 500);
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
            Distance: {distance} m
          </Text>
          <Text style={tailwind("text-sm font-bold")}>Kcal: {kcal} kcal</Text>
          { isVisible && (
              <TargetPopUp
                isVisible={isVisible}
                onClose={onClose}
                />
            )}
          <TouchableOpacity
            style={tailwind(
              "bg-blue-500 items-center px-5 py-3  mt-2 rounded-full"
            )}

            onPress={() => {
              clearTimeout(timeLoopId);
              clearTimeout(distanceLoopId);
              clearTimeout(speedLoopId);
              clearTimeout(kcalLoopId);
              setStart(false);
              setShow(true);
              setSpeed(0);
              setTime(0);
              setDistance(0);
              setKcal(0);
            }}
          >
            <Text style={tailwind("text-sm font-bold")}>Stop</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
