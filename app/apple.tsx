import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ApplePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apple</Text>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
        }}
        style={styles.image}
        accessibilityLabel="A red apple"
      />
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
          Go Back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
    borderRadius: 16,
  },
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
