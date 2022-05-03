import React from 'react'
import logo from "../images/logo.svg"
import play from "../images/play.svg"
import circle from "../images/circle.svg"
import checklist from "../images/checklist.svg"
import babynames from "../images/babynames.svg"
import backpains from "../images/backpains.svg"
import pregnancysigns from "../images/pregnancysigns.svg"
import Button from './Button'
import "./Watching.scss";

const Watching = () => {
  return (
    <div className='watching'>
            <img src={logo} alt=""  className='logo'/>
            <span>VIDEOS</span>
            <div className='watching-header'>
              <h2>What people are watching now</h2>
              <div className='watching-button'>
                <Button text='View more videos' style={{backgroundColor:"#fff",borderRadius: "6.7px", border:"none", height:"37px", width: "136px"}}/>
              </div>
            </div>
            <div className='watching-grid'>
              <div className='check-list'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={checklist} alt="" className='watching-image'/>
                <p>7 Baby's Checklist</p>
                <p className='duration-text'>12mins</p>
              </div>
              <div className='baby-names'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={babynames} alt="" className='watching-image'/>
                <p>Awesome baby name ideas</p>
                <p className='duration-text'>12mins</p>
              </div>
              <div className='pregnancy-signs'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={pregnancysigns} alt="" className='watching-image' />
                <p>10 signs you're pregnant</p>
                <p className='duration-text'>12mins</p>
              </div>
              <div className='back-pains'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={backpains} alt="" className='watching-image' />
                <p>Pregnancy and back pains</p>
                <p className='duration-text'>12mins</p>
              </div>
            </div>
        </div>
  )
}

export default Watching