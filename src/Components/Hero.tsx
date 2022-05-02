import React from 'react'
import "./Hero.scss";
import AmazingDev from './AmazingDev';
import Pregnacy from './Pregnacy';
import BabyLooks from './BabyLooks';
import ExpertAdvice from './ExpertAdvice';
import Tools from './Tools';
import Watching from './Watching';
import Testimoial from './Testimoial';
import BabyDiary from './BabyDiary';


const Hero = () => {
  return (
    <div className='hero'>
        <AmazingDev/>
        <Pregnacy/>
        <BabyLooks/>
        <ExpertAdvice/>
        <Tools/>
        <Watching/>
        <Testimoial/>
        <BabyDiary/> 
    </div>
  )
}

export default Hero