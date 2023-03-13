import { SafeAreaView, Text, View, Button, FlatList } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";
import { useState } from "react";
import { Swipeable } from "react-native-gesture-handler";

export default function PopUp({ isVisible, onClose }) {
  const [data, setData] = useState([
    "Safety helmet",
    "Knee pads",
    "Lights",
    "Gloves",
  ]);

  const deleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const renderSwipeable = (index, item) => {
    return (
      <Swipeable
        renderRightActions={() => (
          <View style={tailwind("bg-green-500 p-2")}>
            <Text style={tailwind("text-white")}>Done</Text>
          </View>
        )}
        onSwipeableRightOpen={() => deleteItem(index)}
      >
        <View style={tailwind("bg-white p-2")}>
          <Text style={tailwind("text-black")}>{item}</Text>
        </View>
      </Swipeable>
    );
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={tailwind("flex-1 items-center justify-center")}
    >
      <View style={tailwind("bg-white p-2 w-3/4 rounded")}>
        <Text style={tailwind("text-2xl font-bold")}>Checklist</Text>
        <Text style={tailwind("text-gray-500")}>Swipe to check</Text>
        <FlatList
          data={data}
          renderItem={({ item, index }) => renderSwipeable(index, item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </Modal>
  );
}
