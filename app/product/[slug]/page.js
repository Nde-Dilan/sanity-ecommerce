// "use client"

import React from "react";
import { getProductsAndProductBySlug } from "@/app/utils";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { ProductCard } from "@/components";
import SameItemHover from "@/components/SameItemHover";

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
            <p className="price">FCFA {price}</p>
            <div className="quantity">
              <h3>Quantity</h3>
              <p className="quantity-desc">
                <span className="minus" onClick="">
                  <AiOutlineMinus />
                </span>
                <span className="num" onClick="">
                  0
                </span>
                <span className="plus" onClick="">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart">
                Add to Cart
              </button>
              <button type="button" className="buy-now">
                Buy Now
              </button>
            </div>
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
