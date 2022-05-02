import React from 'react'
import "./Footer.scss";
import footerLogo from "../images/footerLogo.svg"
import footerIcons from "../images/footerIcons.svg"

const Footer = () => {
  return (
    <div className='footer'>
    <hr />
    <div className='footer-grid'>

      <div className='about'>
        <h4>About</h4>
        <div className='about-grid'>
          <div>
            <ul>
              <li>Careers</li>
              <li>Press & News</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='innerDiv'>
            <ul>
                <li>Terms of Seervice</li>
                <li>Intellectual Property Claims</li>
              </ul>
          </div>
        </div>
      </div>
      <div className='support'>
        <h4>Support</h4>
        <div className='support-grid'>
          <div>
            <ul>
              <li>FAQ</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className='innerDiv'>
            <ul>
              <li>Trust & Safety</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='community'>
        <h4>Community</h4>
        <div className='community-grid'>
          <div>
            <ul>
              <li>Blog</li>
              <li>Forum</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className='innerDiv'>
            <ul>
              <li>Affiliates</li>
              <li>Invite a Friend</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p>All rights reserved. Baby Diary is designed for educational purposes only. </p>
    <p>Consult with a medical professional if you have health concerns. use of this site is subject to our <span>Terms of use</span> and <span>Privacy Policy</span></p>
    <hr />
    <div className='footer-icon-section'>
        <img src={footerLogo} alt="" /> 
        
        <span> &#169; Baby Diary. 2020</span>
        <img src={footerIcons} alt="" className='footer-icons'/>
    </div>
  </div>
  )
}

export default Footer