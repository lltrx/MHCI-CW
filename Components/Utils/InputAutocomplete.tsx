import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "../../env";
import { Text, StyleSheet } from "react-native";

type InputAutocomplete = {
  label: string;
  placeholder?: string;
  onPlacesSelected: (details: GooglePlaceDetails | null) => void;
};

export default function InputAutocomplete({
  label,
  placeholder,
  onPlacesSelected,
}: InputAutocompleteProps) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{
          textInput: styles.input,
          textInputContainer: {
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
        }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlacesSelected(details);
        }}
        query={{
          key: GOOGLE_MAPS_API_KEY,
          language: "en",
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
