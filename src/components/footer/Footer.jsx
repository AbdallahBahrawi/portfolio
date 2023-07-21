import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {BiLogoInstagram} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>logo</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">testimonials </a></li>
        <li><a href="#contact">Contact</a></li>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://instagram.com"><BiLogoInstagram/></a>
          <a href="https://twitter.com"><BiLogoTwitter /></a>
        </div>
      </ul>
      
      <div className="footer_copyright">
        <small>$&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer