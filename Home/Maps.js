import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
const locationDetails = [
  {
    latitude: 9.187396,
    longitude: 77.861247,
    placeName: "A.V.M Hotel",
  },
  {
    latitude: 9.182528,
    longitude: 77.873591,
    placeName: "Vignesh Mess",
  },
  {
    latitude: 9.180585,
    longitude: 77.878548,
    placeName: "Ithu Nama Veedu",
  },
  {
    latitude: 9.182275,
    longitude: 77.853924,
    placeName: "Navin Tea Stall",
  },
  {
    latitude: 9.182328,
    longitude: 77.873932,
    placeName: "Hotel Arusuvai",
  },
  {
    latitude: 9.187975,
    longitude: 77.851309,
    placeName: "Hotel Ram Vilas",
  },
  {
    latitude: 9.178867,
    longitude: 77.870148,
    placeName: "Billal Briyani",
  },
  {
    latitude: 9.180826,
    longitude: 77.872359,
    placeName: "Grace Hotel",
  },
];
export default function Maps() {
  return (
    <View>
      <MapView
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
        }}
        loadingEnabled={true}
        region={{
          latitude: 9.182275,
          longitude: 77.853924,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
        provider="google"
      >
        {locationDetails.map((item, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            pinColor="red"
          >
            <Callout>
              <Text>{item.placeName}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
