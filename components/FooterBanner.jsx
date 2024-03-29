import React from 'react'
import Link from 'next/link';

import { urlFor } from '@/lib/client';

const Footer = ({footerBanner : {discount,midText,smallText,buttonText,product,largeText1,desc,largeText2,saleTime,image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className='left'>
        <p>{discount}</p>
        <h3>{largeText1}</h3>
        <h3>{largeText2}</h3>
        <p>{saleTime}</p>
        </div>
        <div className='right'>
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>
        <Link href={`/product/${product}`}>
          <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image).url()} alt="footer image" className='footer-banner-image' />
      </div>
    </div>
  )
}

export default Footer;