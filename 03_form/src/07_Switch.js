import { useState } from "react";
import { Switch, Text, View } from "react-native";

export default function MySwitch() {
  
  const [isDark, setIsDart] = useState(false);

  // 상태 isDark에 따른 스타일 설정
  const backgroundColor = isDark ? '#222' : '#eee';
  const textColor = isDark ? '#eee' : '#222';
  
  return(
    // 기본 스타일 + 동적 스타일 병행하여 적용 시키기
    <View style={[styles.background, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch>
        value={isDark}
        onValueChange={() => setIsDart(!isDark)} {/* isDark의 반대 값 (Light mode)로 설정 */}
      </Switch>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})