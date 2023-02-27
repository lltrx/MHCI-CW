import { View, Dimensions, StyleSheet, Text } from "react-native";
import tailwind from "tailwind-rn";
import MapView, { PROVIDER_GOOGLE, Marker, LatLng } from "react-native-maps";
import InputAutocomplete from "../Utils/InputAutocomplete";
import Constants from "expo-constants";
import { useState, useRef } from "react";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "../../env";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_REGION = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

export default function MapPage(InputAutocompleteProps) {
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const mapRef = useRef<MapView | null>(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };
  const onPlacesSelected = (
    details: GooglePlaceDetails | null,
    flag: "origin" | "destination"
  ) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  const edagePaddingValue = 100;
  const edgePadding = {
    top: edagePaddingValue,
    right: edagePaddingValue,
    bottom: edagePaddingValue,
    left: edagePaddingValue,
  };

  const traceRouteOnReady = (args: any) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };
  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };
  return (
    <View style={tailwind("flex-1 items-center justify-center")}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      >
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {showDirections && origin && destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={5}
            strokeColor="hotpink"
            onReady={traceRouteOnReady}
          />
        )}
      </MapView>
      <View style={tailwind("absolute top-0  w-full  p-2")}>
        <InputAutocomplete
          label="Origin"
          onPlacesSelected={(details) => onPlacesSelected(details, "origin")}
        />
        <InputAutocomplete
          label="Destination"
          onPlacesSelected={(details) =>
            onPlacesSelected(details, "destination")
          }
        />
        <TouchableOpacity
          style={tailwind("bg-blue-500 border-2 px-5 py-3 rounded-full")}
          onPress={traceRoute}
        >
          <Text>Get Directions</Text>
        </TouchableOpacity>
        {distance > 0 && duration > 0 ? (
          <View style={tailwind("flex-row justify-between")}>
            <Text>Distance: {distance.toFixed(2)} km</Text>
            <Text>Duration: {Math.ceil(duration)} min</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
