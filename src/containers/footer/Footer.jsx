import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className="gradient__text">
          Do you Want to Step Into the Future Before Others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt='logo'/>
          <p> 1738 Random Address Blvd. Area 51, Nevada 00000 </p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in Touch </h4>
          <p>1738 Random Address Blvd. Area 51, Nevada 00000</p>
          <p>000-111-0420</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>
          2023 GPT-3. All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer