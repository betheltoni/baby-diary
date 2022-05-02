import React from 'react'
import Button from './Button';
import "./Hero.scss";
import weekbyweek from "../images/weekbyweek.svg"
import babylook from "../images/babylook.svg"
import dateCalculator from "../images/dateCalculator.svg"
import contractionTimer from "../images/contractionTimer.svg"
import ellipse from "../images/ellipse.svg"
import growthChart from "../images/growthChart.svg"
import memories from "../images/memories.svg"
import scheduler from "../images/scheduler.svg"
import weightCalculator from "../images/weightCalculator.svg"
import hr from "../images/hr.svg"
import babynames from "../images/babynames.svg"
import backpains from "../images/backpains.svg"
import checklist from "../images/checklist.svg"
import pregnancysigns from "../images/pregnancysigns.svg"
import logo from "../images/logo.svg"
import testimonialImage from "../images/testimonialImage.svg"
import chevronLeft from "../images/chevronLeft.svg"
import chevronRight from "../images/chevronRight.svg"
import play from "../images/play.svg"
import circle from "../images/circle.svg"
import appStore from "../images/appStore.svg"
import googlePlay from "../images/googlePlay.svg"
import babyCenter1 from "../images/babyCenter1.svg"
import babyCenter2 from "../images/babyCenter2.svg"


const Hero = () => {
  return (
    <div className='hero'>
        <div className='amazing-dev'>
          <div className='overlay'>
            <div className='amazing-dev-header'>
              <h1>Follow your baby's amazing development</h1>
            </div>
            <div className='amazing-dev-text'>
              <p>Baby diary is the world's number one digital parenting resource, with content that reaches more than 100 million people monthly.</p>
            </div>
            <div className='amazing-dev-button'>
              <div>
                <Button text='Get started' style={{backgroundColor:"#ED6FAB",borderRadius: "6.7px", border:"none", height:"37px", width: "126px",color:"white"}}/>
              </div>
              <div>
                <Button text='Sign in'style={{backgroundColor:"#fff",borderRadius: "6.7px", border:"none", height:"37px", width: "126px"}}/>
              </div>
            </div>
          </div>  
        </div>
        <div className='pregnancy'>
           <h2>Your pregnancy week by week</h2>
          <img src={weekbyweek} alt="pregnacy-week-by-week"  />
        </div>
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
        <div className='expert-advice'>
          <h2>Get expert advice and answers</h2>
          <div className='expert-advice-grid'>
          <div className='safe'>
            <div>
              <h3>Is it safe?</h3>
            </div>
          </div>
          <div className='labour'>
            <div>
              <h3>Labour & delivery</h3>
            </div>
          </div>
          <div className='diapering'>
            <div>
              <h3>Diapering</h3>
            </div>
          </div>
          <div className='sleep'>
            <div>
              <h3>Baby sleep</h3>
            </div>
          </div>  
          </div>          
        </div>
        <div className='tools'>
            <h2>Explore our tools</h2>
            <div className='tools-grid'>
              <div className='date-calculator'>
                <img src={dateCalculator} alt="" />
                <img src={hr} alt="" />
                <div className='ellipse'>
                  <img src={ellipse} alt="" />
                </div>
                <p>Due Date Calculator</p>
              </div>
              <div className='weight-calculator'>
                <img src={weightCalculator} alt="" />
                <img src={hr} alt="" />
                <div className='ellipse'>
                  <img src={ellipse} alt="" />
                </div>
                <p>Pregnancy weight Gain Calculator</p>
              </div>
              <div className='contraction-timer'>
                <img src={contractionTimer} alt="" />
                <img src={hr} alt="" />
                <div className='ellipse'>
                  <img src={ellipse} alt="" />
                </div>
                <p>Contraction Timer</p>
              </div>
              <div className='growth-chart'>
                <img src={growthChart} alt="" />
                <img src={hr} alt="" />
                <div className='ellipse'>
                  <img src={ellipse} alt="" />
                </div>
                <p>Child Growth Chart</p>
              </div>
              <div className='scheduler'>
                <img src={scheduler} alt="" />
                <img src={hr} alt="" />
                <div className='ellipse'>
                  <img src={ellipse} alt="" />
                </div>
                <p>Immunization Scheduler</p>
              </div>
              <div className='memories'>
                <img src={memories} alt="" />
                <img src={hr} alt="" />
                <div className='ellipse'>
                  <img src={ellipse} alt="" />
                </div>
                <p>Memories Save</p>
              </div>
            </div>
        </div>
        <div className='watching'>
            <img src={logo} alt=""  className='logo'/>
            <span>VIDEOS</span>
            <div className='watching-header'>
              <h2>What people are watching now</h2>
              <Button text='View more videos' style={{backgroundColor:"#fff",borderRadius: "6.7px", border:"none", height:"37px", width: "136px"}}/>
            </div>
            <div className='watching-grid'>
              <div className='check-list'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={checklist} alt="" />
                <p>7 Baby's Checklist</p>
                <p className='duration-text'>12mins</p>
              </div>
              <div className='baby-names'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={babynames} alt="" />
                <p>Awesome baby name ideas</p>
                <p className='duration-text'>12mins</p>
              </div>
              <div className='pregnancy-signs'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={pregnancysigns} alt="" />
                <p>10 signs you're pregnant</p>
                <p className='duration-text'>12mins</p>
              </div>
              <div className='back-pains'>
                <div className='play-icon-wrapper'>
                  <img src={circle} alt="" />
                  <img src={play} alt="" className='play-icon' />
                </div>
                <img src={backpains} alt="" />
                <p>Pregnancy and back pains</p>
                <p className='duration-text'>12mins</p>
              </div>
            </div>
        </div>
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
        
       
        
    </div>
  )
}

export default Hero