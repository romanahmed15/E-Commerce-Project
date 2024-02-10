import React from 'react'
import './Hero.css'
import handIcon from '../Assets/hand_icon.png'
import arrowIcon from '../Assets/arrow.png'
import heroimg from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="heroLeft">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="heroHandIcon">
              <p>New</p>
              <img src={handIcon} alt="" />
            </div>
           <p>Collections</p> 
           <p>For everyone</p> 
          </div>
          <div className="heroLatestBtn">
            <div>Latest Collections</div>
            <img src={arrowIcon} alt="" />
          </div>
      </div>
      <div className="heroRight">
          <img src={heroimg} alt="" />
      </div>
    </div>
  )
}

export default Hero