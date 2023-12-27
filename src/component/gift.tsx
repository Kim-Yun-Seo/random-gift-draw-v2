import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../component/gift.module.css'

export const Gift = () => {
  const movePage = useNavigate();
  const homeClick = () => { movePage('/') }
  const [giftList, setGiftList] = useState(['a', 'b', 'c', 'd', 'e', 'f']) //여기 선물도 랜덤으로 배열
  const [peopleNum, setPeopleNum] = useState(0)
  const [nowPerson, setNowPerson] = useState('/person1.png') //Ready img로 시작
  const [nowGift, setNowGift] = useState('/person1.png') //Ready img로 시작
  let [randomPeople, setRandomPeople] = useState([]) //canGet할 수 있는 사람들이 모여있는 배열
  // useEffect(()=>{
  //   console.log('nowPerson =' , nowPerson)
  // },[nowPerson]); 

  const openPerson = () => {
    setNowPerson('/b.jpeg')
  }

  const giftImg = {
    'a': '/a.jpeg',
    'b': '/b.jpeg',
    'c': '/c.jpeg',
    'd': '/d.jpeg',
    'e': '/e.jpeg',
    'f': '/f.jpeg',
  }

  const [info, setInfo] = useState(
    [
      {
        "name": "kim",
        "canGet": ['c', 'd', 'e', 'f'],
        "gift": ['a', 'b'],
        "count": 0,
        "img": ''
      },
      {
        "name": "lee",
        "canGet": ['a', 'b','e', 'f'],
        "gift": ['c', 'd'],
        'count': 0,
        "img": ''
      },
      {
        "name": "yun",
        "canGet": ['a', 'b','e', 'f'],
        "gift": ['e', 'f'],
        'count': 0,
        "img": ''
      }
    ]
  )

  //giftList[0]을 가지고 할거야.

  info.forEach((i, idx) => {
    console.log(' i.name' , i.name ,i.canGet.includes(giftList[0]))
    //randomPeople중에 하나를 랜덤으로 뽑아서.
    //nowPerson을 바꿔준다.
    if (i.canGet.includes(giftList[0])) {
      randomPeople.push(i.name)
    }
    console.log(' =' , randomPeople)
  })

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }

  getRandomInt(0,randomPeople.length - 1)
  //랜덤 숫자 뽑아서,
  //RandomPeople[getRandonInt()]
  console.log('slslsl =' , randomPeople[getRandomInt(0,randomPeople.length - 1)])
  //여기까지 하고
  //randomPeople 은 reset.

  giftList.shift()
  randomPeople = [];
  console.log('gL =' , giftList)
  console.log('randomPeople =' , randomPeople)
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

      <div className={styles.items}>
        <img className={styles.person}
        src={nowPerson}>
        </img>
        <img className={styles.gift}
        src={giftImg.a}>
        </img>
      </div>
      <button className={styles.startBtn} onClick={() => {
        console.log('start 다음 페이지로 이동 =' , )
        openPerson()
        // 사람 사진 변경
        // 선물 사진 변경
        // 노래 재생
        // 효과 재생
      }}>
        START
      </button>
    </>
  );
}

