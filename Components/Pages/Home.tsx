import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import NavigateButton from "../Utils/NavigateButton";
import ProfileIconPage from "../Utils/profileIconPage";
import FriendsIconPage from "../Utils/friendsIconPage";

export default function Home() {
  return (
    <View style={tailwind("flex top-10")}>
      <View style={tailwind("flex-row justify-between")}>
      <ProfileIconPage to="MyProfile" />
      <FriendsIconPage to="Friends" />
      </View>
      <View style={tailwind("flex items-center top-48")}>
        <NavigateButton
          style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
          title="Navigate to Destination"
          to="Destination"
        />
      </View>
    </View>
  );
}
