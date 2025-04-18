import { useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonData = [
  { id: 1, label: '남자', value: 'man', },
  { id: 2, label: '여자', value: 'woman', },
];

export default function RadioButtonLibrary() {

  const [ id, setId ] = useState(0);

  return (
    <RadioGroup
      radioButtons={radioButtonData}
      onPress={setId}
      selectedId={id}
      layout="row"  // row : 가로 배치, column : 세로 배치
    />
  );

}