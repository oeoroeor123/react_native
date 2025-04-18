import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import AboutScreen from "../screen/AboutScreen";
import ProfileScreen from "../screen/ProfileScreen";

// Stack Navigator 생성
const Stack = createStackNavigator();

export default function StackNavigator() {

  return(
    <Stack.Navigator
      initialRouteName="Home"
    >
      {/* stack을 이용한 네비게이터 처리 : name = "RouteName", component={네비게이터 파일 이름} */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}