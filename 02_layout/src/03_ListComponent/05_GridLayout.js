import { useCallback } from "react";
import { FlatList, StyleSheet } from "react-native";

// { length: 50 }  값이 undefined 인 요소가 50개 생성
// (element, index) => {}  콜백이 반환하는 객체로 각 요소를 변경
const DATA = Array.from( { length: 50 }, (element, index) => {
  return {
    id: `${index}`,  // string 타입의 key
    title: `항목 ${index + 1}`,
  }
})

export default function GridLayout() {

  const keyExtractor = useCallback((item, index) => item.id, []);
  const renderItem = useCallback(
    ( {item} ) => (
      <TouchableOpacity onPress={() => onPress(item.id)}>
        <View style={Styles.item}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    ),
    []
  );


  return(
    <FlatList
      data={DATA}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      columnWrapperStyle={{justifyContent: 'space-between'}}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'yellow',
    height: 100,
  }
})