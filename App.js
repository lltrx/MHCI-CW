import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, Text, View, Button, StyleSheet } from 'react-native';
import tailwind from "tailwind-rn";
import Modal from 'react-native-modal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Pages/Home';
import Destination from './Components/Pages/Destination';
import Friends from "./Components/Pages/Friends";
import FriendHistory from "./Components/Utils/FriendHistory";
import MyProfile from "./Components/Pages/MyProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
    <View style={styles.container}>
      <Button title="Open Checklist" onPress={toggleModal} />
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Safety Checklist</Text>
          <SwipeListView
            data={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
            renderItem={({ item }) => (
              <View style={styles.checklistItem}>
                <Text style={styles.checklistItemText}>{item}</Text>
              </View>
            )}
            renderHiddenItem={() => (
              <View style={styles.rowBack}>
                <Text style={styles.rowBackText}>Complete</Text>
              </View>
            )}
            rightOpenValue={-75}
          />
        </View>
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checklistItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checklistItemText: {
    fontSize: 18,
  },

  rowBack: {
    alignItems: 'center',
    backgroundColor: '#ddd',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 15,
  },

});
