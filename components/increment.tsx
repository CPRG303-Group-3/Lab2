"use client";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

type IncrementProps = {
  counter: number;
  onIncrement: () => void;
};

export default function Increment({ counter, onIncrement }: IncrementProps) {
  const router = useRouter();

  return (
    <View>
      <Pressable style={styles.button} onPress={onIncrement}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Increment</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007aff",
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
