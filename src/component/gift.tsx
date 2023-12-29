import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../component/gift.module.css'

export const Gift = () => {
  const movePage = useNavigate();
  const stealPage = () => { movePage('/steal') }
  const [giftList, setGiftList] = useState(['c', 'a', 'e', 'b', 'd', 'f'])
  const [nowPerson, setNowPerson] = useState('/person_ready.svg')
  const [nowGift, setNowGift] = useState('/gift_ready.png')
  const [time, setTime] = useState('')
  let [randomPeople, setRandomPeople] = useState([])
  useEffect(()=>{
    console.log('nowPerson =' , nowPerson)
  },[nowPerson]); 

  const changeGiftImg = () => {
    //버튼 누르면 사진 이미지 바뀌기
    setNowGift(giftImg[giftList[0]])
  }

  const giftImg = {
    'a': '/a.svg',
    'b': '/b.svg',
    'c': '/c.svg',
    'd': '/d.svg',
    'e': '/e.svg',
    'f': '/f.svg'
  }

  const [info, setInfo] = useState(
    [
      {
        "name": "kim",
        "canGet": ['c', 'd', 'e', 'f'],
        "gift": ['a', 'b'],
        "count": 0,
        "img": '/kim.svg'
      },
      {
        "name": "lee",
        "canGet": ['a', 'b','e', 'f'],
        "gift": ['c', 'd'],
        'count': 0,
        "img": '/lee.svg'
      },
      {
        "name": "yun",
        "canGet": ['a', 'b','c', 'd'],
        "gift": ['e', 'f'],
        'count': 0,
        "img": '/yun.svg'
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
        console.log(' i[randomPeople[randomInt]]=' ,i.img )
        setNowPerson(i.img)
      }
    })
    giftList.shift()
    console.log('gL =' , giftList)
    console.log('randomPeople =' , randomPeople)
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
            console.log('start 다음 페이지로 이동 =')
            // backClick()
            setTimeout(function(){ changeGiftImg() }, 500); //5초 있다가 사진이 드러난다
            //선물사진변경
          }}>
          선물뽑기
        </button>
        <button className={styles.startBtn} onClick={() => {
          console.log('pick start')
          setTimeout(function(){ personPick() }, 500); //5초 있다가 사진이 드러난다
          // 노래 재생
          // 효과 재생
        }}>
          사람뽑기
        </button>
        <div>
          <button className={styles.resetBtn} onClick={() => {
            setNowGift('/gift_ready.png')
            setNowPerson('/person_ready.svg')
          }}>
            reset
          </button>
        </div>
        <div>
          <button className={styles.stealBtn} onClick={() => {
            stealPage()
          }}>
            next
          </button>
        </div>
      </div>
    </>
  );
}