import React from 'react'
import dateCalculator from "../images/dateCalculator.svg"
import contractionTimer from "../images/contractionTimer.svg"
import ellipse from "../images/ellipse.svg"
import growthChart from "../images/growthChart.svg"
import memories from "../images/memories.svg"
import scheduler from "../images/scheduler.svg"
import weightCalculator from "../images/weightCalculator.svg"
import hr from "../images/hr.svg"

const Tools = () => {
  return (
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
  )
}

export default Tools