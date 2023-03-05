import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

export default function FriendsIcon(props) {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate(props.to)}
      style={tailwind("p-2")}
    >
      <MaterialCommunityIcons name="account-multiple" size={54} color="black" />
    </TouchableOpacity>
  );
}
