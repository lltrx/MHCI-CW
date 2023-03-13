import {Text, View } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";
import { useState } from "react";

export default function WarningPopUp2({ isVisible, onClose }) {
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    style={tailwind("flex-1 items-center justify-center")}
  >
    <View style={tailwind("bg-yellow-700 p-2 w-3/4 rounded")}>
      <Text style={tailwind("text-2xl font-bold")}>Warning</Text>
      <Text style={tailwind("text-sm")}>
        Traffic ahead! Slow down!
      </Text>
    </View>
  </Modal>
  );
}
