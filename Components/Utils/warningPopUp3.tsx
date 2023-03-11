import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";


export default function WarningPopUp3({ isVisible, onClose }) {
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    style={tailwind("flex-1 items-center justify-center")}
  >
    <View style={tailwind("bg-red-600 p-2 w-3/4 rounded")}>
      <Text style={tailwind("text-2xl font-bold")}>Warning</Text>
      <Text style={tailwind("text-sm")}>
        You are going too fast! Please slow down!
      </Text>
    </View>
  </Modal>
  );
}
