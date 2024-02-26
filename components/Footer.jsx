import React from 'react'

import { AiFillMessage,AiOutlineTwitter,AiFillGithub,AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <p>2023 End Headphones All rights reserved</p>
      <p className="icons">
        <a href="https://github.com/Nde-Dilan"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/nde-dilan/"><AiFillLinkedin/></a>
        <a href="#"><AiOutlineTwitter/></a>
        <a href="https://wa.me/237694525931"><AiFillMessage/></a>
      </p>
    </footer>
  )
}

export default Footer;