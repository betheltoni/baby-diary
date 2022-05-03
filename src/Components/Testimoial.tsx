import React from 'react'
import testimonialImage from "../images/testimonialImage.svg"
import chevronLeft from "../images/chevronLeft.svg"
import chevronRight from "../images/chevronRight.svg"
import "./Testimonial.scss";
import circle from "../images/circle.svg"

const Testimoial = () => {
  return (
    <div className='testimonial'>
          <div className='testimonial-text'>
            <div className='testimonial-text-wrapper'>
              <div className='icon-display'>
                <img src={circle} alt="" />
                <img src={chevronLeft} alt="" className='icon' />
              </div>
              <p>Love this App! I've been using it since I found out I was pregnant. My daughter is now 8months old, and i still rely on the information provided. I would be lost without it.</p>
              <p className='testimonial-author'>Oyinkasola Salami</p>
            </div>
          </div>
          <div className='testimonial-image'>
            <img src={testimonialImage} alt="" width="85%" />
            <div>
              <img src={circle} alt="" />
              <img src={chevronRight} alt="" className='icon' />
            </div>
          </div> 
    </div>
  )
}

export default Testimoial