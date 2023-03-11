import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

export default function ProfileIcon(props) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(props.to)}
      style={tailwind("p-2")}
    >
      <MaterialCommunityIcons name="account-circle" size={54} color="black" />
    </TouchableOpacity>
  );
}
