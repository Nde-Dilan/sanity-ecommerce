import React from 'react'
import Link from 'next/link';
import {urlFor} from '../lib/client';

const ProductCard = ({name,image,price,slug}) => {
  return (
    <div>
     <Link href={`/product/${slug?.current}`}>
     <div className='product-card'>
        <img src={urlFor(image && image[0]).url()} width={250} height={250} alt="headphones" className='product-image' />
        <p className='product-name'>{name}</p>
        <p className='product-price dark:text-slate-100 font-bold'>{price} XAF</p>
     </div>
     </Link>
    </div>
  )
}

export default ProductCard;