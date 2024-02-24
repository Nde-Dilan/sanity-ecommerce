"use client";

import product from "@/ecommerce/schemas/product";
import React, { createContext, useContext, useState, useEffect } from "react";

import { toast } from "react-hot-toast";

//Creating the context

const Context = createContext();

//Context component

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);

  let foundProduct;
  let productIndex;

  //Adding a new item to the cart
  const onAdd = (product, quantity) => {
    if (quantity != 0) {
      //We look inside our cart to check if the product is there
      const checkProductInCart = cartItems.find(
        (item) => item._id === product._id
      );
      //Compute total price andquantity
      setTotalPrice(
        (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities((prevTotalQuantity) => prevTotalQuantity + quantity);

      //If the product is there then we just update the quantiy and we compute the total quantity(for the unique product)
      if (checkProductInCart) {
        const updatedCartItems = cartItems.map((cartProduct) => {
          if (cartProduct._id === product._id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }
        });

        setCartItems(updatedCartItems);
      } else {
        product.quantity = quantity;
        setCartItems([...cartItems, { ...product }]);
      }
      console.log(product);
      toast.success(
        `${qty} ${product.name ? product.name : "item"} added to the cart.`
      );
    }
  };

  //Updating the item's qty without changing the global qty state
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    productIndex = cartItems.findIndex((item) => id === item._id);

    if (value === "inc") {
      changeCartState("+");
    } else if (value === "dec") {
      if (foundProduct.quantity - 1 >= 1) {
        changeCartState("-");
      } else {
        let newCartItems = [...cartItems];
        newCartItems.splice(productIndex, 1);
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantity) => prevTotalQuantity - 1);
      }
    } else {
      throw new Error(`${value} is'nt decrement nor increment`);
    }
  };

  const changeCartState = (sign) => {
    let newCartItems = [...cartItems];
    newCartItems[productIndex].quantity = eval(
      `${newCartItems[productIndex].quantity} ${sign} 1`
    );
    setCartItems(newCartItems);
    setTotalPrice((prevTotalPrice) =>
      eval(`${prevTotalPrice} ${sign} ${foundProduct.price}`)
    );
    setTotalQuantities((prevTotalQuantity) =>
      eval(`${prevTotalQuantity} ${sign} 1`)
    );
  };
  //To increase the quantity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  //To decrease the quantity
  const decreaseQty = () => {
    setQty((prevQty) => {
      console.log("Decreasing...");
      if (prevQty - 1 < 1) return 0;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//Creating a custom hook to get how state
export const useStateContext = () => useContext(Context);
