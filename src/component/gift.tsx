import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';

function Gift() {

  const [giftList, setGiftList] = useState(['a', 'b', 'c', 'd', 'e', 'f']) //여기 선물도 랜덤으로 진행
  const [peopleNum, setPeopleNum] = useState(0)
  const [info, setInfo] = useState(
    [
      {
        "name": "kim",
        "canGet": ['c', 'd', 'e', 'f'],
        "gift": ['a', 'b'],
        'count': 0
      },
      {
        "name": "lee",
        "canGet": ['a', 'b','e', 'f'],
        "gift": ['c', 'd'],
        'count': 0
      },
      {
        "name": "yun",
        "canGet": ['a', 'b','e', 'f'],
        "gift": ['e', 'f'],
        'count': 0
      }
    ]
  )
  giftList.forEach(g => {
    console.log('nowGift =' , g)
  });
  //이건 input 받아서 채워넣을 것
  console.log('info =' , info)
  return (
    <>
      <input type='text' placeholder='ex) 2명' />
      <input type='text' placeholder='ex) 선물' />
      <button onClick={() => {
        setPeopleNum(1)
      }}>저장</button>
      <div>
        {peopleNum}
      </div>
    </>
  );
}

export default Gift;
