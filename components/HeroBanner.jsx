import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  // console.log(heroBanner);
  return (
    <div className="hero-banner-container dark:bg-[#324D67]">
      <div>
        <p className="beats-solo">{heroBanner?.smallText}</p>
        <h3>{heroBanner?.midText}</h3>
        <h1>{heroBanner?.largeText1}</h1>
        <img
          src={urlFor(heroBanner?.image).url()}
          alt="headphones"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${heroBanner?.product}`}>
            <button type="button">{heroBanner?.buttonText}</button>
          </Link>
          <div className="desc ">
            <h5 className="dark:text-slate-200">Description</h5>
            <p className="dark:text-slate-200">{heroBanner?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
