"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { client, urlFor } from "@/lib/client";
import { getProductAndSimilar } from "@/app/utils";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

export const revalidate = 2;

const ProductDetails = async ({ params }) => {
  const {
    props: { product, similarProducts },
  } = await getProductAndSimilar(params?.slug);
  // console.log(product[0]);
  console.log(similarProducts);
  const { image, price, description, name } = similarProducts[0];
  return (
    <section>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              width={250}
              height={250}
              src={urlFor(image && image[0]).url()}
              alt=""
            />
          </div>
          <div className="small-images-container">
            {/* {image?.map((item, index) => (
              <img
                width={250}
                height={250}
                key={index}
                src={urlFor(item).url()}
                alt=""
                className=""
                onMouseOver=""
              />
            ))} */}
          </div>
        </div>
        <div className="product-details-desc">
          <h1 className="products-heading">{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
