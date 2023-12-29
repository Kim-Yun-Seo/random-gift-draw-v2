import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../component/steal.module.css'

export const Steal = () => {

  const movePage = useNavigate();
  const finishPage = () => { movePage('/finish') }
  const [isHidden, setIsHidden] = useState(false)
  const [num, setNum] = useState(0)


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

  return (
    <>
      <div className={styles.title}>
        Happy New Year
      </div>
      <div className={styles.subTitle}>
        random-gift-draw
      </div>
      <div className={styles.rules}
        style={{ visibility: isHidden ? "hidden" : "visible"}}>
        1. 아무나 뽑기 버튼을 누른다
        <br />
        2. 눌러서 뽑힌 사람은 너 나와!를 외친다
        <br />
        3. 지목당한 사람은 나머지 두명이 정해진 벌칙을 수행한다
        <br />
        4. 뽑힌 사람은 지목한 사람의 선물 중 하나를 자기 것과 바꿀 수 있다
        
      </div>
      
      <div className={styles.items}>
        <img className={styles.person}
          style={{ visibility: isHidden ? "visible" : "hidden", marginTop: "-200px"}}
          src={info[getRandomInt(0, 2)].img}>
        </img>
      </div>

      <div className={styles.buttons}>
        <button className={styles.startBtn} onClick={() => {
            console.log('start 다음 페이지로 이동 =')
            // backClick()
            setTimeout(function(){ setIsHidden(true) }, 1000);
            setNum(1)
            console.log('num =' , num)
            //선물사진변경
            if (num == 1) {
              finishPage()
            }
          }}>
          사람뽑기
        </button>
      </div>
    </>
  );
}