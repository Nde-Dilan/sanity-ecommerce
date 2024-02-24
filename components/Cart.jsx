"use client";

import React, { useRef } from "react";

import Link from "next/link";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";

import { toast } from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";

//To use images store inside sanity
import { urlFor } from "@/lib/client";
import PlusOrMinus from "./PlusOrMinus";

const Cart = () => {
  //Setting up our reference
  const cartRef = useRef();

  //using our created hook to get our two func
  const {
    toggleCartItemQuantity,
    totalQuantities,
    totalPrice,
    cartItems,
    setShowCart,
  } = useStateContext();

  return (
    <section className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping cart is empty for the moment.</h3>
            <Link href={"/"}>
              <button
                className="btn"
                type="button"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item?._id}>
                <img
                  className="cart-product-image"
                  src={urlFor(item?.image[0])}
                  alt="item inside a cart"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item?.name}</h5>
                    <h4>{item?.price} FCFA</h4>
                  </div>
                  <div className="flex bottom">
                    <div className="">
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num" >
                          {item?.quantity}
                        </span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => {}}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Sub total */}
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal: </h3>
              <h3>{totalPrice} FCFA</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={() => {}}>
                Pay With OM/MOMO
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
