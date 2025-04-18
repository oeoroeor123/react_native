import { Button, Text, View } from "react-native";

export default function ProfileScreen( {navigation} ) {

  return(
    <View>
      <Text>ProfileScreen</Text>
      <Button>
        title="Home"
        {/* navigation.navigate("StackNavigator에서 만든 연결할 네비게이터 RouteName") */}
        onPress={() => navigation.navigate("Home")}
      </Button>
      <Button>
        title="About"
        onPress={() => navigation.navigate("About")}
      </Button>
    </View>
  );
}