"use client";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import vacationDestinations from "../lib/vacationsDestinations";

const Lab4 = () => {
  const [price, setPrice] = useState(0);
  const [averageYearlyTemperature, setAverageYearlyTemperature] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const showVacationDestination = (destination: any) => {
    setPrice(destination.price);
    setAverageYearlyTemperature(destination.average_yearly_temperature);
    setSelectedDestination(destination.location);
    fetchImageAndDescription(destination.location);
  };

  async function fetchImageAndDescription(location: string) {
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${location}`
      );
      const data = await response.json();
      setImage(data.originalimage.source);
      setDescription(data.extract);
    } catch (error) {
      console.error("Error fetching image and description:", error);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lab 4: Vacation Fun</Text>

      {price > 0 && (
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <Text style={styles.subtitle}>
            Selected Destination: {selectedDestination}
          </Text>
          <Text style={styles.subtitle}>
            Price: ${price} | Average Yearly Temperature:{" "}
            {averageYearlyTemperature}
          </Text>
          <Text style={styles.subtitle}>Description: {description}</Text>
        </View>
      )}

      <Text style={styles.subtitle}>Here are some vacation destinations:</Text>
      <View style={styles.fruitContainer}>
        {vacationDestinations.map((destination, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.fruitButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => showVacationDestination(destination)}
          >
            <Text style={styles.fruitText}>{destination.location}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.fruitButton}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.fruitText}>Go Back</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Lab4;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "white",
    rowGap: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
    borderRadius: 16,
    alignSelf: "center",
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
    width: 180,
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
