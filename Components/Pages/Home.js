import { SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";

export default function Home(props) {
  return (
    <SafeAreaView style={tailwind("flex-1 items-center justify-center")}>
      <View >
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
      </View>
    </SafeAreaView>
  );
}
