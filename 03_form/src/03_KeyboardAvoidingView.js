import { KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native";

export default function MyKeyboardAvoidingView() {
  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
      keyboardVerticalOffset={ Platform.OS === 'ios' ? 0 : 0 }
    >
      <View>
        <TextInput style={styles.input}/>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
  }
})