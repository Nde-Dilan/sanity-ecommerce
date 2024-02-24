"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";

import { Cart } from ".";
const NavBar = () => {
  //using our created hook to get our two func
  const { totalQuantities, showCart, setShowCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">End Headphones</Link>
      </p>
      <button
        className="cart-icon"
        type="button"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="cart-item-qty">{totalQuantities}</span>
        <AiOutlineShopping />
      </button>
      {showCart && 
      <Cart />
      }
    </div>
  );
};

export default NavBar;
