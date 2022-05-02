import React from 'react'
import Button from './Button';
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='top-navbar'>
            <input type="text"  placeholder='Find Information' />
            <Button text="Search" style={{backgroundColor:"#ED6FAB", borderRadius: "0px 5px 5px 0px", border:"none", height:"35px", width: "85px", color:"white"}} />
            <div>
                <h3>About Baby Diary</h3>
                <h3>Sign In</h3>
                <Button text='Sign Up' style={{backgroundColor:"#ED6FAB",borderRadius: "5px", border:"none", height:"35px", width: "85px",color:"white" }} />
            </div>
        </div>
        <div className='bottom-navbar'>
          <div>
            <h3>Community</h3>
            <h3>Getting Pregnant</h3>
            <h3>Pregnancy</h3>
            <h3>Baby</h3>
            <h3>Health</h3>
            <h3>Video</h3>
            <h3>For You</h3>
          </div>
        </div>
    </div>
  )
}

export default NavBar