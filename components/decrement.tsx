"use client";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

type DecrementProps = {
  counter: number;
  onDecrement: () => void;
};

export default function Increment({ counter, onDecrement }: DecrementProps) {
  const router = useRouter();

  return (
    <View>
      <Pressable style={styles.button} onPress={onDecrement}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Decrement</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4a99ee",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
