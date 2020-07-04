import React, { useState, useEffect } from "react";
import StoreContext from "../context/StoreContext";
import data from "../Data";

const StoreProvider = ({ children }) => {
  const addToCart = () => {};

  const removeFromCart = () => {};

  const login = () => {};

  const clearCart = () => {};

  const addProduct = () => {};

  const checkout = () => {};

  const logout = () => {};

  const initialState = {
    user: null,
    products: [],
    cart: {},
    addToCart,
    removeFromCart,
    login,
    clearCart,
    addProduct,
    checkout,
    logout,
  };
  const [state, setState] = useState(initialState);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
