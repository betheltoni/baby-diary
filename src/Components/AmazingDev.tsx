import React from 'react'
import Button from './Button'

const AmazingDev = () => {
  return (
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
  )
}

export default AmazingDev