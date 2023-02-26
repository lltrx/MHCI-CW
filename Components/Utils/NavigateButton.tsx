import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export default function NavigateButton(
  props // This is the navigation prop passed from App.js
) {
  const { navigate } = useNavigation();
  return (
    // This is the button that will navigate to the destination
    <Button
      title={props.title}
      onPress={() => navigate(props.to)}
      style={props.style}
    />
  );
}
