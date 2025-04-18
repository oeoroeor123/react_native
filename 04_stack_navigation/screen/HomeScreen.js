import { Button, Text, View } from "react-native";

export default function HomeScreen(props) {

  // console.log(props);

  // props에서 navigation 꺼내기
  const { navigation } = props;


  return(
    <View>
      <Text>HomeScreen</Text>
      <Button>
        title="About"
        {/* navigation.navigate("StackNavigator에서 만든 연결할 네비게이터 RouteName") */}
        onPress={() => navigation.navigate("About")}
      </Button>
      <Button>
        title="Profile"
        onPress={() => navigation.navigate("Profile")}
      </Button>
    </View>
  );
}