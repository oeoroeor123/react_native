import { useState } from "react";

const initItems = [
  { label: '아침', value: 'morning' },
  { label: '점심', value: 'lunch' },
  { label: '저녁', value: 'dinner' },
];

export default function Picker() {

  // 열림 상태
  const [open, setOpen] = useState(false);

  // 선택된 값
  const [value, setValue] = useState('');

  // 항목 리스트 (위에서 지정한 값을 초기값으로 지정)
  const [items, setItems] = useState(initItems);

  return(
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="항목 선택"
      listMode="MODAL"
    />
  );
}