import { SafeAreaView, Text, View, Button, FlatList } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";
import { useState } from "react";

export default function WarningPopUp({ isVisible, onClose, data }) {
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    style={tailwind("flex-1 items-center justify-center")}
  >
    <View style={tailwind("bg-white p-2 w-3/4 rounded")}>
      <Text style={tailwind("text-2xl font-bold")}>Checklist</Text>
      <FlatList
        data={data}
      />
    </View>
  </Modal>
  );
}
