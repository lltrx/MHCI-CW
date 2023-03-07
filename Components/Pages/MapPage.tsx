import { View, Dimensions, StyleSheet, Text } from "react-native";
import tailwind from "tailwind-rn";
import MapView, { PROVIDER_GOOGLE, Marker, LatLng } from "react-native-maps";
import InputAutocomplete from "../Utils/InputAutocomplete";
import { useState, useRef, useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "../../env";
import { TouchableOpacity } from "react-native-gesture-handler";
import BackIcon from "../Utils/backIcon";
import PopUp from "../Utils/popUp";
import WarningPopUp from "../Utils/warningPopUp";

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
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const mapRef = useRef<MapView | null>(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showInput, setShowInput] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const [warningData, setWarningData] = useState([
    { id: 1, message: "Warning 1" },
    { id: 2, message: "Warning 2" },
    { id: 3, message: "Warning 3" },
  ]);

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

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const traceRouteOnReady = (args: any) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const speedLoop = () => {
    for (let i = 0; i <= 50; i++) {
      setTimeout(() => {
        setSpeed(i);
      }, i * 1000);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setIsPopupVisible(true);
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  const speedWarning = () => {
    if (speed == 2 && !isWarningVisible) {
      setIsWarningVisible(true);
    } 
    
  };

  useEffect(() => {
    speedWarning();
  }, [speed]);
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
      <View style={tailwind(`absolute w-full top-10`)}>
        <BackIcon to="Destination" />
        {showInput && (
          <View style={tailwind(`p-2 bg-white`)}>
            <InputAutocomplete
              label="Origin"
              onPlacesSelected={(details) =>
                onPlacesSelected(details, "origin")
              }
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
          </View>
        )}
        {distance > 0 && duration > 0 ? (
          <View style={tailwind("flex-row justify-between")}>
            <Text>Distance: {distance.toFixed(2)} km</Text>
            <Text>Duration: {Math.ceil(duration)} min</Text>
          </View>
        ) : null}
      </View>

      {isPopupVisible && (
        <PopUp isVisible={isPopupVisible} onClose={closePopup} />
      )}
      {isWarningVisible && (
        <WarningPopUp
          isVisible={isWarningVisible}
          data={warningData}
          onClose={() => setIsWarningVisible(false)}
        />
      )}
      <View style={tailwind("absolute bottom-6")}>
        <Text style={tailwind("text-2xl")}>Speed: {speed} km/h</Text>

        <TouchableOpacity
          style={tailwind("bg-blue-500 border-2 px-5 py-3  rounded-full")}
          onPress={() => {
            if (isSearching) {
              setShowInput(true);
              setIsSearching(false);
              setIsWarningVisible(false);
            }
            if (!isSearching) {
              setShowInput(false);
              setIsSearching(true);
              speedLoop();
            }
          }}
        >
          <Text>{isSearching ? "Set Another Destination" : "Start"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  ``;
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
