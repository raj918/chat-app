
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const UsernameCreate = () => {
  const [userName, setUsername] = useState("");
  const navigation = useNavigation();

  const onSubmit = async () => {
    const trimmedUsername = userName.trim();

    if (trimmedUsername.length < 3) {
      Alert.alert("Invalid Username", "Username must be at least 3 characters long.");
      return;
    }

    try {
      const response = await axios.post("https://chat-api-k4vi.onrender.com/chat/username", {
        username: trimmedUsername,
      });

      if (response.status === 200) {
        navigation.navigate("Roomlist", { username: trimmedUsername });
      } else {
        Alert.alert("Error", "Failed to create username. Try again.");
      }
    } catch (error) {
      Alert.alert("Error", "Could not connect to server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to ChatApp!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={userName}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Start Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default UsernameCreate;
