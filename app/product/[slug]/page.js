// "use client"

import React from "react";
import { getProductsAndProductBySlug } from "@/app/utils";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductCard } from "@/components";
import SameItemHover from "@/components/SameItemHover";

//Using our state

import PlusOrMinus from "@/components/PlusOrMinus";
import ActionButtons from "@/components/ActionButtons";

//Creating a state for our product color section

export const revalidate = 20;
//FIXME: Turn this into client side component and instead of using async/awit , use the promise method .then

const ProductDetails = async ({ params }) => {
  let slug = params.slug;

  // const { products, singleProduct } = await getProductsAndProductBySlug(slug);

  const { singleProduct, products } = await getProductsAndProductBySlug(slug);

  const { name, image, price, description } = singleProduct;

  return (
    <section>
      <div className=" text-yellow-50 product-detail-container">
        <SameItemHover image={image} />
        <div className="product-detail-desc">
          <h1>{name}</h1>

          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p>(20)</p>
          </div>
          <div>
            <h4>Details: </h4>
            <p>{description}</p>
            <p className="price">XAF {price}</p>

            <PlusOrMinus />
            <ActionButtons product={singleProduct} />
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You May Also Like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <ProductCard key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
