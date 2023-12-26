import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../component/start.module.css'

export const Start = () => {
  const movePage = useNavigate();
  const homeClick = () => { movePage('/gift') }
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
      
      <div className={styles}>
        {peopleNum}
      </div>
      <div className={styles.title}>
        Merry Christmas
      </div>
      <div className={styles.subTitle}>
        random-gift-draw   
      </div>

      <div style={{marginLeft: "40%"}}>
        <input type='text' placeholder='ex) 2명' className={styles.info}/>
        <input type='text' placeholder='ex) 선물' className={styles.info}/>
      </div>

      <button className={styles.startBtn} onClick={() => {
        console.log('start 다음 페이지로 이동 =' , )
        homeClick()
      }}>
        START
      </button>
    </>
  );
}

export default Start;
