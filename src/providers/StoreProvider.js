import React, { useState, useEffect } from "react";
import StoreContext from "../context/StoreContext";
import data from "../Data";

const StoreProvider = ({ children }) => {
  const addToCart = (cartItem) => {
    // console.log(cartItem);
    let cart = state.cart;
    // cart["Adidas Samba Shoes"] = {
    //   id: "Adidas Samba Shoes",
    //   product: {
    //     desc:
    //       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
    //     name: "Adidas Samba Shoes",
    //     price: 59.99,
    //     shortDesc:
    //       "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
    //     stock: 2,
    //   },
    //   amount: 1,
    // };
    if (cart[cartItem.id]) {
      cart[cartItem.id].amount += cartItem.amount;
    } else {
      cart[cartItem.id] = cartItem;
    }
    if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
      cart[cartItem.id].amount = cart[cartItem.id].product.stock;
    }
    // console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    setState((prevState) => {
      return {
        ...prevState,
        cart,
      };
    });
  };

  const removeFromCart = () => {};

  const login = (usrn, pwd) => {
    const user = data.users.find(
      (user) => user.username === usrn && user.password === pwd
    );
    if (user) {
      setState((prevState) => {
        return {
          ...prevState,
          user,
        };
      });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    }
    return false;
  };

  const clearCart = () => {};

  const addProduct = (product) => {
    let products = state.products.slice();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    setState((prevState) => {
      return {
        ...prevState,
        products,
      };
    });
  };

  //   addProduct = (product, callback) => {
  //     let products = this.state.products.slice();
  //     products.push(product);
  //     localStorage.setItem('products', JSON.stringify(products));
  //     this.setState({ products }, () => callback && callback());
  //   }

  const checkout = () => {};

  const logout = (e) => {
    e.preventDefault();
    setState((prevState) => {
      return {
        ...prevState,
        user: null,
      };
    });
    localStorage.removeItem("user");
  };

  const fetchStoreState = () => {
    let user = localStorage.getItem("user");
    let products = localStorage.getItem("products");
    let cart = localStorage.getItem("cart");

    user = user ? JSON.parse(user) : null;
    products = products ? JSON.parse(products) : data.initProducts;
    cart = cart ? JSON.parse(cart) : {};

    return {
      ...initialState,
      user,
      products,
      cart,
    };
  };

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
  const [state, setState] = useState(fetchStoreState);

  // useEffect(() => {
  //   const storeState = fetchStoreState()
  //   setState({
  //     ...initialState,
  //     ...storeState,
  //   })
  // }, []);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
