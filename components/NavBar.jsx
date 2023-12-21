import React from 'react'
import Link from 'next/link';
import {AiOutlineShopping  } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
         End Headphones
        </Link>
      </p>
      <button className='cart-icon' type='button' onClick="">
      <span className='cart-item-qty'>10</span>
      <AiOutlineShopping/>
      </button>
    </div>
  )
}

export default NavBar;