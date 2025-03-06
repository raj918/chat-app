import React, { useEffect, useState } from "react";
import { 
  View, Text, FlatList, TouchableOpacity, 
  StyleSheet, Alert 
} from "react-native";
import axios from "axios";

const RoomsList = ({ navigation , route }) => {
  const [rooms, setRooms] = useState([]);
  const { username } = route.params;
  useEffect(() => {
    fetchRooms();
    
  }, []);
 
  const fetchRooms = async () => {
    try {
      const response = await axios.get("https://chat-api-k4vi.onrender.com/chat/rooms"); 
      setRooms(response.data); 
      console.log(response.data);

    } catch (error) {
      Alert.alert("Error", "Failed to load rooms.");
    }
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.createRoomButton} 
        onPress={() => navigation.navigate("Createroom")}
      >
        <Text style={styles.createRoomText}>+ Create Room</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Chat Rooms</Text>
      
      <FlatList
        data={rooms}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.roomItem}
            onPress={() => navigation.navigate("Chatsscreen",{ roomId: item.id, username: username })}
          >
            <Text style={styles.roomName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  createRoomButton: {
    backgroundColor: "#28A745",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  createRoomText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },
  roomItem: {
    padding: 15,
    backgroundColor: "#007BFF",
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  roomName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
 
});

export default RoomsList;
