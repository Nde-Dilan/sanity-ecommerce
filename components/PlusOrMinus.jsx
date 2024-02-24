"use client"

import React from 'react'
import { useStateContext } from "@/context/StateContext";

import {
    AiOutlineMinus,
    AiOutlinePlus,
  } from "react-icons/ai";
const PlusOrMinus = () => {

    //using our created hook to get our two func
  const {decreaseQty,increaseQty,qty} = useStateContext();


  return (
    <div className="quantity">
              <h3>Quantity</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decreaseQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num" >
                 {qty}
                </span>
                <span className="plus" onClick={increaseQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
  )
}

export default PlusOrMinus;