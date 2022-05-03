import React from 'react'
import appStore from "../images/appStore.svg"
import googlePlay from "../images/googlePlay.svg"
import babyCenter1 from "../images/babyCenter1.svg"
import babyCenter2 from "../images/babyCenter2.svg"

import babynames from "../images/babynames.svg"
import backpains from "../images/backpains.svg"
import checklist from "../images/checklist.svg"
import pregnancysigns from "../images/pregnancysigns.svg"
import "./BabyDiary.scss";
const BabyDiary = () => {
  return (
    <div className='baby-diary'>
            <h2>Baby Diary Blog</h2>
            <div className='baby-diary-grid'>
              <div className='check-list'>
                <img src={checklist} alt="" />
                <p>7 Baby's Checklist</p>
                <p className='sub-text'>From fertility troubles to baby-name...</p>
              </div>
              <div className='baby-names'>
                <img src={babynames} alt="" />
                <p>Awesome baby name ideas</p>
                <p className='sub-text'>From fertility troubles to baby-name...</p>
              </div>
              <div className='pregnancy-signs'>
                <img src={pregnancysigns} alt="" />
                <p>10 signs you're pregnant</p>
                <p className='sub-text'>From fertility troubles to baby-name...</p>
              </div>
              <div className='back-pains'>
                <img src={backpains} alt="" />
                <p>Pregnancy and back pains</p>
                <p className='sub-text'>From fertility troubles to baby-name...</p>
              </div>
            </div>
            <div className='baby-center'>
              <div className='baby-center-text'>
                <h2>Get the BabyCenter app</h2>
                <p>The #1 app for tracking pregnancy and baby growth</p>
                <img src={appStore} alt="" />
                <img src={googlePlay} alt="" />
              </div>
              <div className='baby-center-image'>
                <img src={babyCenter1} alt=""  className='firstImage'/>
                <img src={babyCenter2} alt="" className='secondImage'/>
              </div>
            </div>
        </div>
  )
}

export default BabyDiary