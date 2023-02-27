import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "../../env";
import { Text } from "react-native";
import tailwind from "tailwind-rn";

type InputAutocomplete = {
  label: string;
  placeholder?: string;
  onPlacesSelected: (details: GooglePlaceDetails | null) => void;
};

export default function InputAutocomplete({
  label,
  placeholder,
  onPlacesSelected,
}: InputAutocompleteProps) 

{
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        style={tailwind("border-2 border-gray-300 rounded-md")}
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
