import React from 'react'

import './Footer.css'
import footerLogo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerLogo">
        <img src={footerLogo} alt="" />
        <p>RS-SHOPPING</p>
      </div>
      <ul className="footerLinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocialIcon">
        <div className="footerIconContainer">
          <img src={instagram} alt="" />
        </div>
        <div className="footerIconContainer">
          <img src={pintester} alt="" />
        </div>
        <div className="footerIconContainer">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className='footerCopyRight'>
        <hr />
        <p>Copyright @ 2024 - All Rigth Reserved </p>
      </div>
    </div>
  )
}

export default Footer
