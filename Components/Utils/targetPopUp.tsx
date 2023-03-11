import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";


export default function TargetPopUp({ isVisible, onClose }) {
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    style={tailwind("flex-1 items-center justify-center")}
  >
    <View style={tailwind("bg-green-600 p-2 w-3/4 rounded")}>
      <Text style={tailwind("text-2xl font-bold")}>Well Done!!</Text>
      <Text style={tailwind("text-sm")}>
        You have reached your target!
      </Text>
    </View>
  </Modal>
  );
}
