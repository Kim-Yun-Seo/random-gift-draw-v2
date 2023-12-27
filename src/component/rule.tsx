import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../component/rule.module.css'

export const Rule = () => {
  const movePage = useNavigate();
  const homeClick = () => { movePage('/gift') }
  const backClick = () => { movePage('/')}
  
  return (
    <>
      <div className={styles.title}>
        Happy New Year
      </div>
      <div className={styles.subTitle}>
        random-gift-draw   
      </div>
      <div className={styles.subTitle}>
        !  Rule  !
      </div>
      <div className={styles.rules}>
        1. 순서를 정한다
        <br />
        2. 순서대로 선물 뽑기 버튼을 누른다
        <br />
        3. 해당 선물의 주인은 일어나서 선물에 대해 설명한다
        <br />
        4. 설명한 후 사람뽑기 버튼을 누른다
        <br />
        5. 웃으며 선물을 전달한다
        <br />
        6. 선물 전달 인증샷을 찍는다
      </div>
      <div className={styles.buttons}>
        <button className={styles.startBtn} onClick={() => {
          console.log('start 다음 페이지로 이동 =' , )
          homeClick()
        }}>
          START
        </button>
        <button className={styles.startBtn} onClick={() => {
          console.log('start 다음 페이지로 이동 =' , )
          backClick()
        }}>
          BACK
        </button>
      </div>
    </>
  );
}

