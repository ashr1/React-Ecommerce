import React, { useState, useEffect, useRef } from "react";
import StoreContext from "../context/StoreContext";
import data from "../Data";

const StoreProvider = ({ children, routerRef }) => {
  function addToCart(cartItem) {
    // console.log(cartItem);
    console.log("the ref cart: ", newStateRef.current.cart);
    // let cart = {...state.cart};
    let cart = { ...newStateRef.current.cart };
    console.log("cart before add: ", cart);
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
    // debugger;
    localStorage.setItem("cart", JSON.stringify(cart));
    setState((prevState) => {
      return {
        ...prevState,
        cart,
      };
    });
  }

  const removeFromCart = (cartItemId) => {
    // console.log("removeFromCart");
    let cart = { ...newStateRef.current.cart };
    delete cart[cartItemId];
    localStorage.setItem("cart", JSON.stringify(cart));
    setState((prevState) => {
      return {
        ...prevState,
        cart,
      };
    });
  };

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

  const clearCart = () => {
    // console.log('clearCart')
    let cart = {};
    localStorage.removeItem("cart");
    setState((prevState) => {
      return {
        ...prevState,
        cart,
      };
    });
  };

  //   clearCart = () => {
  //     let cart = {};
  //     localStorage.removeItem('cart');
  //     this.setState({ cart });
  //   }

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

  const checkout = () => {
    const { user, products, cart } = newStateRef.current;
    if (!user) {
      // console.log("you must login to checkout");
      routerRef.current.history.push("/login");
      return;
    }
    const productsUpdate = products.map((p) => {
      if (cart[p.name]) {
        p.stock -= cart[p.name].amount;
      }
      return p;
    });
    setState((prevState) => {
      return {
        ...prevState,
        products: productsUpdate,
      };
    });
    clearCart();
  };

  //   checkout = () => {
  //     if(!this.state.user) {
  //       this.routerRef.current.history.push("/login");
  //       return;
  //     }
  //     const cart = this.state.cart;
  //     const products = this.state.products.map(p => {
  //       if(cart[p.name]) {
  //         p.stock -= cart[p.name].amount;
  //       }
  //       return p;
  //     })
  //     this.setState({ products });
  //     this.clearCart();
  //   }

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

    console.log("fetched cart: ", cart);
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
  const newStateRef = useRef();

  useEffect(() => {
    newStateRef.current = state;
  });

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
