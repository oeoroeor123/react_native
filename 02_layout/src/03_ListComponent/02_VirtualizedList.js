/*
VirtualizedList 컴포넌트
VirtualizedList는 React Native에서 대량의 데이터를 효율적으로 렌더링하기 위해 설계된 리스트 컴포넌트입니다.
FlatList와 SectionList의 기반이 되는 저수준 컴포넌트로, 화면에 보이는 아이템만 렌더링하고, 나머지는 메모리와 성능을 위해 가상화(virtualization) 처리합니다.

주요 특징
1. 가상화(Virtualization)
  화면에 보이는 일부 아이템만 실제로 렌더링하고, 나머지는 빈 공간으로 대체하여 메모리 사용량과 렌더링 비용을 크게 줄입니다.
2. 성능 최적화
  대량의 데이터(수천~수만 개)도 효율적으로 처리할 수 있습니다.
3. 유연성
  FlatList, SectionList보다 더 세밀한 제어가 필요할 때 직접 사용할 수 있습니다. 예를 들어, 데이터가 일반 배열이 아닌 불변 객체(immutable data)일 때 적합합니다.
4. 커스텀 데이터 구조 지원
  getItem, getItemCount 등 커스텀 데이터 접근 방식을 지정할 수 있습니다.

FlatList, SectionList와의 관계
컴포넌트        설명
-----------------------------------------------------------------------------
FlatList        VirtualizedList를 기반으로 한 고수준 컴포넌트. 단일 배열 지원
SectionList     VirtualizedList를 기반으로 한 고수준 컴포넌트. 섹션 지원
VirtualizedList FlatList, SectionList의 베이스. 더 많은 유연성 제공
-----------------------------------------------------------------------------

결론
일반적으로 FlatList, SectionList가 더 사용하기 쉽고 문서화가 잘 되어 있으므로, 특별한 이유가 없다면 이 두 컴포넌트를 사용하는 것이 좋습니다.
*/

import { useCallback } from "react";
import { Text, View, VirtualizedList } from "react-native";

const DATA = Array.from( {length: 50}, (element, index) => {
  return {
    id: index,
    title: `항목 ${index + 1}`,
  }
})

export default function MyVirtualizedList() {

  // useCallback을 이용한 함수 Memoization (동일한 계산을 반복할 때 이전에 계산한 값을 메모리에 저장하는 최적화)
  // 함수 표현식 활용한 useCallback
  const keyExtractor = useCallback((item, index) => item.id, []);
  const getItem = useCallback((data, index) => data[index], []);
  const getItemCount = useCallback((data) => data.length, []);
  const renderItem = useCallback(( {item} ) => (<View style={{padding: 16}}> <Text>{item.title}</Text> </View>), []);
 
  
  // 위에서 만든 useCallback 활용한 함수를 아래에 이름만 넣어 사용한다.
  return(
    <VirtualizedList
      data={DATA}
      keyExtractor={keyExtractor}
      getItem={getItem}
      getItemCount={getItemCount}
      renderItem={renderItem}
    />
  );
}