import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import tailwind from "tailwind-rn";

export default function BackButton(props) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate(props.to)} style={tailwind("p-2")}>
      <Ionicons name="ios-arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
}
