import React from 'react'
import weekbyweek from "../images/weekbyweek.svg"
import "./Pregnancy.scss";

const Pregnacy = () => {
  return (
    <div className='pregnancy'>
           <h2>Your pregnancy week by week</h2>
          <img src={weekbyweek} alt="pregnacy-week-by-week"  />
    </div>
  )
}

export default Pregnacy