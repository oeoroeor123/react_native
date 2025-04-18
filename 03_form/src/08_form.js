import { useState } from "react";
import { Alert, Button } from "react-native";

export default function Form() {

  const [user, setUser] = useState({
    id: '',
    pw: '',
  });

  const onChangeHandler = (key, value) => {
    setUser({
      ...user, // 원래 있던 user 설정
      [key]: value, // 원래 있던 값에 입력값 (value)를 덮어쓰기
    }) 
  }

  const onPressHandler = () => {
    // 입력 검증 및 로그인 요청
    Alert.alert(`아이디: ${user.id}, 비밀번호: ${user.pw}`);
  }

  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={user.id}
        onChangeText={(inputId) => onChangeHandler("id", inputId)} // 입력된 아이디 값이 넘어간다.
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={user.pw}
        onChangeText={(inputPw) => onChangeHandler("pw", inputPw)} // 입력된 비밀번호 값이 넘어간다.
        secureTextEntry={true}  // 비밀번호 입력 활성화
      />
      <Button>
        title: "로그인"
        onPress={onPressHandler}
      </Button>
    </View>
  );
}