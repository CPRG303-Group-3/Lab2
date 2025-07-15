import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import fruitList from "../components/fruitList";

export default function App() {
  const router = useRouter();

  const handlePress = (fruit: string) => {
    const route = fruit.toLowerCase();
    router.push(`/${route}`);
  };

  const handleLab3Press = () => {
    router.push("/lab3");
  };

  const handleLab4Press = () => {
    router.push("/lab4");
  };

  const handleLab5Press = () => {
    router.push("/lab5");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fruit</Text>
      <Text style={styles.subtitle}>Here is a list of fruits:</Text>

      <View style={styles.fruitContainer}>
        {fruitList.map((fruit, index) => (
          <Pressable
            key={index}
            onPress={() => handlePress(fruit)}
            style={({ pressed }) => [
              styles.fruitButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.fruitText}>{fruit}</Text>
          </Pressable>
        ))}

        <Pressable>
          <Pressable
            onPress={handleLab3Press}
            style={({ pressed }) => [
              styles.fruitButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.fruitText}>Go to Lab 3</Text>
          </Pressable>
        </Pressable>

        <Pressable>
          <Pressable
            onPress={handleLab4Press}
            style={({ pressed }) => [
              styles.fruitButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.fruitText}>Go to Lab 4</Text>
          </Pressable>
        </Pressable>

        <Pressable>
          <Pressable
            onPress={handleLab5Press}
            style={({ pressed }) => [
              styles.fruitButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.fruitText}>Go to Lab 5</Text>
          </Pressable>
        </Pressable>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "white",
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
  buttonPressed: {
    backgroundColor: "#6fa8dc",
    transform: [{ scale: 0.98 }],
  },
  fruitText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
