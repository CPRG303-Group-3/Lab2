"use client";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Increment from "../components/increment";
import Decrement from "../components/decrement";

const ModifyCounter = () => {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
};
const Lab3 = () => {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    counter > 0 && setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modify Counter</Text>
      <Text style={styles.subtitle}>Counter: {counter}</Text>
      <Increment onIncrement={increment} counter={counter} />
      <Decrement onDecrement={decrement} counter={counter} />
      <View style={styles.fruitButton}>
        <Text style={styles.fruitText} onPress={() => router.back()}>
          Go Back
        </Text>
      </View>
    </View>
  );
};

export default Lab3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 30,
  },
  fruitContainer: {
    alignItems: "center",
    gap: 12,
  },
  fruitButton: {
    backgroundColor: "#4d4d4d",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonPressed: {
    backgroundColor: "#6fa8dc",
    transform: [{ scale: 0.98 }],
  },
  fruitText: {
    fontSize: 12,
    fontWeight: "500",
    color: "white",
  },
});
