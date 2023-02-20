import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Pages/Home";
import Destination from "./Components/Pages/Destination";
import Friends from "./Components/Pages/Friends";
import FriendHistory from "./Components/Utils/FriendHistory";
import MyProfile from "./Components/Pages/MyProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Destination" component={Destination} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="FriendHistory" component={FriendHistory} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
