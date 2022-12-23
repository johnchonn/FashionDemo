import { useState, useEffect } from 'react'
import './Footer.css'
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";



function Footer() {
  return (
    <nav className="footer_container">
      {/* <div className="footer_info_container">
        <div className="footer_info" style={{fontFamily: 'Roboto', fontSize: 14, fontWeight: 200}}>Info</div>
        <div className="footer_faq" style={{fontFamily: 'Roboto', fontSize: 14, fontWeight: 200}}>FAQ</div>
        <div className="footer_help" style={{fontFamily: 'Roboto', fontSize: 14, fontWeight: 200}}>Help</div>
      </div>
      <div className="info_contents">
          <span className="reviews" style={{fontFamily: 'Roboto', fontSize: 12, fontWeight: 200}}>Reviews</span>
          <span className="returns" style={{fontFamily: 'Roboto', fontSize: 12, fontWeight: 200}}>Returns & Exchanges</span>
          <span className="shipping" style={{fontFamily: 'Roboto', fontSize: 12, fontWeight: 200}}>Shipping Info</span>
          <span className="contacts" style={{fontFamily: 'Roboto', fontSize: 12, fontWeight: 200}}>Contact Us</span>
        </div> */}
      <div className="icons_container">
        <div className="instagram_icon"><BsInstagram /></div>
        <div className="twitter_icon"><BsTwitter /></div>
        <div className="facebook_icon"><BsFacebook /></div>
        <div className="linked_icon"><BsLinkedin /></div>
      </div>
      <div className="hallyu_line" style={{fontFamily: 'Roboto', fontSize: 12, fontWeight: 200}} >© 2022 Hallyu Line Ltd.</div>
    </nav>
  )
}

export default Footer