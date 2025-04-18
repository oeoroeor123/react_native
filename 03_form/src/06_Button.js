import { Alert, Button, View } from "react-native";

export default function MyButton() {

  return (
    <View>
      <Button>
        title="Press me"
        onPress={() => Alert.alert("!?")}
      </Button>
    </View>
  );
}