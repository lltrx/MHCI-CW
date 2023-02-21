import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";

export default function Home() {
  return (
      <View style={tailwind("flex items-center top-48")}>
        <NavigateButton
          style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
          title="Navigate to Destination"
          to="Destination"
        />
        <NavigateButton
          style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
          title="Navigate to Friends"
          to="Friends"
        />
        <NavigateButton
          style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
          title="Navigate to MyProfile"
          to="MyProfile"
        />
      </View>
  );
}
