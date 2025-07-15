"use client";
import { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import supabase from "../lib/supabase";
import {
  getUsers,
  createUser,
  deleteUserById,
  updateUserById,
} from "../lib/supabase-crud";

const Lab5 = () => {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [userName, setUserName] = useState("");
  const [editingUser, setEditingUser] = useState<{
    id: number;
    name: string;
  } | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      console.log("Fetched users:", data);
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    if (!userName.trim()) {
      Alert.alert("Error", "Please enter a name");
      return;
    }

    try {
      const newUser = await createUser(userName);
      Alert.alert(
        "Success",
        `User ${newUser.name} created with ID ${newUser.id}`
      );
      setUserName("");

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error("User creation error:", error);
      Alert.alert("Error", "Failed to create user");
    }
  };

  const handleDeleteUser = async (userId: number) => {
    try {
      await deleteUserById(userId);
      Alert.alert("Success", "User deleted successfully");

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
    } catch (error) {
      console.error("User deletion error:", error);
      Alert.alert("Error", "Failed to delete user");
    }
  };

  const handleEditUser = async () => {
    if (!editingUser || !editingUser.name.trim()) {
      Alert.alert("Error", "Please enter a name");
      return;
    }

    try {
      await updateUserById(editingUser.id, editingUser.name);
      Alert.alert("Success", "User updated successfully");

      const updatedUsers = await getUsers();
      setUsers(updatedUsers);
      setEditingUser(null);
    } catch (error) {
      console.error("User update error:", error);
      Alert.alert("Error", "Failed to update user");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lab 5: Supabase Users</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={editingUser ? "Edit user name" : "Enter user name"}
          value={editingUser ? editingUser.name : userName}
          onChangeText={
            editingUser
              ? (text) => setEditingUser({ ...editingUser, name: text })
              : setUserName
          }
        />
        <Button
          title={editingUser ? "Update User" : "Create User"}
          onPress={editingUser ? handleEditUser : handleCreateUser}
        />
        {editingUser && (
          <Button
            title="Cancel"
            color="red"
            onPress={() => setEditingUser(null)}
          />
        )}
      </View>

      <Text style={styles.subtitle}>Existing Users:</Text>
      {users.map((user: any) => (
        <View key={user.id} style={styles.userContainer}>
          <Text style={styles.userText}>{user.name}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => setEditingUser({ id: user.id, name: user.name })}
            >
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteUser(user.id)}
            >
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Lab5;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "white",
    rowGap: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  userContainer: {
    width: "100%",
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userText: {
    fontSize: 16,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    padding: 8,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#F44336",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
