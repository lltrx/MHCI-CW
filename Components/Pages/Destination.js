import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";

export default function Destination() {
  return (
      <View style={tailwind("flex-1 items-center justify-center")}>
        <NavigateButton
          style={tailwind("bg-blue-500 px-5 py-3 rounded-full")}
          title="Navigate to Home"
          to="Home"
        />
      </View>
  );
}
