"use client";

import React, { useState } from "react";
import { client, urlFor } from "@/lib/client";

const SameItem = ({ image }) => {
  //Creating the index to keep track of what the user is hovering on

  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="image-container">
        <img
          width={250}
          height={250}
          src={urlFor(image && image[index]).url()}
          alt=""
        />
      </div>

      <div className="small-images-container">
        {image?.map((item, i) => (
          <img
            width={250}
            height={250}
            key={i}
            // INFO:
            /**I think the pb is that i am rendering this client side component inside a sever side coomponent so when it rendersthe first time all the dom events are not longer available since it's now a sever side component.

How can i go around that?

i want to use my client code because am rendering something using some Hook that can't run on server side code, and at the same time i also want to maintain my server side code because am using async/await there */
            // onMouseEnter={() => {alert("hi")}}

            //TODO: Solve this problem before continuing
            onMouseOver={() => setIndex(i)}
            src={urlFor(item).url()}
            alt="Another item"
            className={
              i === index ? "small-image selected-image" : "small-image"
            }
          />
        ))}
      </div>
    </>
  );
};

export default SameItem;
