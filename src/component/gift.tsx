import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../component/gift.module.css'

export const Gift = () => {
  // const movePage = useNavigate();
  // const homeClick = () => { movePage('/') }
  // const backClick = () => { movePage('/rule')}
  const [giftList, setGiftList] = useState(['a', 'b', 'c', 'd', 'e', 'f']) //여기 선물도 랜덤으로 배열
  const [peopleNum, setPeopleNum] = useState(0)
  const [nowPerson, setNowPerson] = useState('/person_ready.svg')
  const [nowGift, setNowGift] = useState('/present_ready.png')
  let [randomPeople, setRandomPeople] = useState([])
  // useEffect(()=>{
  //   console.log('nowPerson =' , nowPerson)
  // },[nowPerson]); 

  const openPerson = () => {
    setNowPerson('/a.jpeg')
  }

  const changeGiftImg = () => {
    //버튼 누르면 사진 이미지 바뀌기
    setNowGift('/b.jpeg')
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
        "canGet": ['a', 'b','c', 'd'],
        "gift": ['e', 'f'],
        'count': 0,
        "img": ''
      }
    ]
  )
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const personPick = () => {
    randomPeople = [];

    info.forEach((i, idx) => {
      console.log('name =' , i.name )
      if (i.canGet.includes(giftList[0]) && i.count < 2) {
        randomPeople.push(i.name)
      }
      console.log('randomList =' , randomPeople)
    })
    const randomInt = getRandomInt(0,randomPeople.length - 1);
    console.log('randomInt =' , randomInt)

    info.forEach((i, idx) => {
      if (i.name === randomPeople[randomInt]) {
        i.count++
        console.log('당첨자 =' ,randomPeople[randomInt], i.count )
      }
    })
    giftList.shift()
    console.log('gL =' , giftList)
    console.log('randomPeople =' , randomPeople)
    //사진 바꾸기를 해야합니다.
    //인물 사진 바꾸기
    //그리고 완료되면 다시 ready.png로 바꾸는 작업
  }

  return (
    <>
      <div className={styles.title}>
        Happy New Year
      </div>
      <div className={styles.subTitle}>
        random-gift-draw   
      </div>
      <div className={styles.items}>
        <img className={styles.gift}
          src={nowGift}>
        </img>
        <img className={styles.person}
        src={nowPerson}>
        </img>
      </div>

      <div className={styles.buttons}>
        <button className={styles.startBtn} onClick={() => {
            console.log('start 다음 페이지로 이동 =' , )
            // backClick()
            changeGiftImg()
            //선물사진변경
          }}>
          선물뽑기
        </button>
        <button className={styles.startBtn} onClick={() => {
          console.log('pick start' , )
          openPerson()
          personPick()
          // 사람 사진 변경
          // 노래 재생
          // 효과 재생
        }}>
          사람뽑기
        </button>
      </div>
    </>
  );
}

