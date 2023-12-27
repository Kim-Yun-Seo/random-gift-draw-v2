import { useNavigate } from 'react-router-dom';
import React from 'react';
import styles from '../component/start.module.css';

export const Start = () => {
  const movePage = useNavigate();
  const homeClick = () => { movePage('/rule') }

  return (
    <>
      <div className={styles.title}>
        Happy New Year
      </div>
      <div className={styles.subTitle}>
        random-gift-draw   
      </div>

      <div className={styles.etc}>
        고생한 우리 모두와 <br />
        새로운 한 해를 위해 <br />
        <br />
        2024년 힘차게 파이팅! <br />
        <br />
        2023년 마무리를 즐겁게!
        
      </div>

      <div className={styles.buttons}>
        <button className={styles.startBtn} onClick={() => {
          console.log('start 다음 페이지로 이동 =' , )
          homeClick()
        }}>
          START
        </button>
      </div>
    </>
  );
}

export default Start;
