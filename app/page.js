import React from 'react'
import {ProductCard, HeroBanner, Footer, FooterBanner} from '@/components';
import { getProducts } from '@/app/utils'
 
export const revalidate = 2;

const Index = async () => {
 
  const data = await getProducts();
  // console.log(data.props);
  const {products,banner:bannerData} = data.props;
  // console.log(products);
  return (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
   <div className='products-container'>
    
     {products?.map((product) =>
        <ProductCard key={product?._id} {...product}/>
      )}
   </div>
   <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  )
}



export default Index;