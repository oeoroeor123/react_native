import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    // 최상위 컨테이너 > 아래에 만든 네비게이터
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

