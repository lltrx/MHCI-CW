import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, Text, View, Button, StyleSheet } from "react-native";
import tailwind from "tailwind-rn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Pages/Home";
import Destination from "./Components/Pages/Destination";
import Friends from "./Components/Pages/Friends";
import FriendHistory from "./Components/Utils/FriendHistory";
import MyProfile from "./Components/Pages/MyProfile";
import MapPage from "./Components/Pages/MapPage";

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Destination" component={Destination} />
        <Stack.Screen options={{headerShown: false}} name="Friends" component={Friends} />
        <Stack.Screen options={{headerShown: false}} name="FriendHistory" component={FriendHistory} />
        <Stack.Screen options={{headerShown: false}} name="MyProfile" component={MyProfile} />
        <Stack.Screen options={{headerShown: false}} name="MapPage" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
