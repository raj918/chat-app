import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import axios from "axios";

const CreateRoom = ({ navigation }) => {
  const [roomName, setRoomName] = useState("");
  
const create = () => {
    const response = axios.post("https://chat-api-k4vi.onrender.com/chat/rooms", { name: roomName });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter room name"
        value={roomName}
        onChangeText={setRoomName}
      />
      <TouchableOpacity style={styles.button} onPress={() => create(roomName)}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("Roomlist")}>
        <Text > Back</Text></TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  button: {
    width: "80%",
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonBack: {
    width: "80%",
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,

  }
});

export default CreateRoom;
