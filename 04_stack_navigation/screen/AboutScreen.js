import { Button, Text, View } from "react-native";

export default function AboutScreen( {navigation} ) {

  // props에 바로 {navigaion} 지정해서 사용

  return(
    <View>
      <Text>AboutScreen</Text>
      <Button>
        title="Home"
        {/* navigation.navigate("StackNavigator에서 만든 연결할 네비게이터 RouteName") */}
        onPress={() => navigation.navigate("Home")}
      </Button>
      <Button>
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      </Button>
    </View>
  );
}