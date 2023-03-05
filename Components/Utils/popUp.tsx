import { SafeAreaView, Text, View, Button, StyleSheet, FlatList } from "react-native";
import tailwind from "tailwind-rn";
import Modal from "react-native-modal";
import {useState} from "react";

export default function PopUp({isVisible, onClose}) {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onClose}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Safety Checklist</Text>
          <FlatList
            data={["Option 1", "Option 2", "Option 3", "Option 4"]}
            renderItem={({ item }) => (
              <View style={styles.checklistItem}>
                <Text style={styles.checklistItemText}>{item}</Text>
              </View>
            )}
            keyExtractor={(item) => item}
          />
          <Button title="Close" onPress={onClose} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checklistItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  checklistItemText: {
    fontSize: 18,
  },
});