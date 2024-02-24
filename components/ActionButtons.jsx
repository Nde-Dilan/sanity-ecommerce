"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";

const ActionButtons = ({ product }) => {
  //using our created hook to get our two func
  const { onAdd,qty } = useStateContext();
  return (
    <div className="buttons">
      <button type="button" className="add-to-cart" onClick={() => onAdd(product,qty)}>
        Add to Cart
      </button>
      <button type="button" className="buy-now">
        Buy Now
      </button>
    </div>
  );
};

export default ActionButtons;
