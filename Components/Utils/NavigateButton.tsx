import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export default function NavigateButton(props) {
  const { navigate } = useNavigation();
  return (
    <Button
      title={props.title}
      onPress={() => navigate(props.to)}
      style={props.style}
    />
  );
}
