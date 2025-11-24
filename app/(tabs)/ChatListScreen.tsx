import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import io from "socket.io-client";

// ⚠️ IMPORTANT: Replace this with your computer's local IP address.
// Do NOT use 'localhost' if you are testing on a real phone or Android Emulator.
// Replace the previous URL with this one
const SOCKET_URL = "http://10.179.54.216:3000";

const App = () => {
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");

  useEffect(() => {
    // 1. Initialize the connection
    const socket = io(SOCKET_URL);

    // 2. Listen for the connect event
    socket.on("connect", () => {
      console.log("Connected to server with ID:", socket.id);
      setConnectionStatus("Connected ✅");
    });

    // 3. Listen for connection errors (Very useful for debugging!)
    socket.on("connect_error", (err) => {
      console.log("Connection Error:", err);
      setConnectionStatus("Error ❌");
    });

    // 4. Cleanup: Disconnect when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agri-Connect Chat</Text>
      <Text style={styles.status}>Status: {connectionStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    color: "#333",
  },
});

export default App;
