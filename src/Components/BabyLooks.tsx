import React from 'react'
import Button from './Button'
import babylook from "../images/babylook.svg"
import "./BabyLooks.scss";

const BabyLooks = () => {
  return (
    <div className='baby-looks'>
          <div>
              <div className='baby-looks-text'>
                <h1>Want to see how your baby looks like now?</h1>
              </div>
              <div className='baby-looks-button'>
                <div>
                  <Button text='Show me' style={{backgroundColor:"#ED6FAB",borderRadius: "6.7px", border:"none", height:"37px", width: "126px", color:"white"}}/>
                </div>
                <div>
                  <Button text='Create account' style={{backgroundColor:"#fff",borderRadius: "6.7px", border:"none", height:"37px", width: "126px"}}/>
                </div>
              </div>
            </div>
            <div className='baby-looks-image'>
              <img src={babylook} alt="babylooks" width="90%" />
            </div>
    </div>
  )
}

export default BabyLooks