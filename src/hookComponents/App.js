import React, { Component, useEffect } from "react";
import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import data from "../Data";
import Context from "../Context";
// import Login from "../components/Login";
// import AddProduct from "../components/AddProduct";
// import ProductList from "../components/ProductList";
// import Cart from "../components/Cart";
import StoreProvider from "../providers/StoreProvider";
import Nav from "./Nav";
import Login from "./Login";
import AddProduct from "../hookComponents/AddProduct";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default () => {
  useEffect(() => {
    let user = localStorage.getItem("user");
    let products = localStorage.getItem("products");
    let cart = localStorage.getItem("cart");

    user = user ? JSON.parse(user) : null;
    products = products ? JSON.parse(products) : data.initProducts;
    cart = cart ? JSON.parse(cart) : {};

    console.log(user, products, cart);
  }, []);
  return (
    <>
      <Nav />
      <ProductList />
      <Login />
      <AddProduct />
      <Cart />
    </>
  );
};

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//       products: [],
//       cart: {}
//     };
//     this.routerRef = React.createRef();
//   }

//   componentDidMount() {
//     let user = localStorage.getItem('user');
//     let products = localStorage.getItem('products');
//     let cart = localStorage.getItem('cart');

//     user = user ? JSON.parse(user) : null;
//     products = products ? JSON.parse(products) : data.initProducts;
//     cart = cart ? JSON.parse(cart) : {}
//     this.setState({ user, products, cart });
//   }

//   login = (usrn,pwd) => {
//     const user = data.users.find((user) => user.username === usrn && user.password === pwd);
//     if(user) {
//       this.setState({ user });
//       localStorage.setItem('user', JSON.stringify(user));
//       return true;
//     }
//     return false;
//   }

//   logout = e => {
//     e.preventDefault();
//     this.setState({ user: null });
//     localStorage.removeItem('user');
//   }

//   addToCart = (cartItem) => {
//     let cart = this.state.cart;
//     if(cart[cartItem.id]) {
//       cart[cartItem.id].amount += cartItem.amount;
//     } else {
//       cart[cartItem.id] = cartItem;
//     }
//     if(cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
//       cart[cartItem.id].amount = cart[cartItem.id].product.stock;
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     this.setState({ cart });
//   }

//   removeFromCart = cartItemId => {
//     let cart = this.state.cart;
//     delete cart[cartItemId];
//     localStorage.setItem('cart', JSON.stringify(cart));
//     this.setState({ cart });
//   }

//   clearCart = () => {
//     let cart = {};
//     localStorage.removeItem('cart');
//     this.setState({ cart });
//   }

//   addProduct = (product, callback) => {
//     let products = this.state.products.slice();
//     products.push(product);
//     localStorage.setItem('products', JSON.stringify(products));
//     this.setState({ products }, () => callback && callback());
//   }
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

//   render() {
//     return (
//       <Context.Provider
//         value={{
//           ...this.state,
//           addToCart: this.addToCart,
//           removeFromCart: this.removeFromCart,
//           login: this.login,
//           clearCart: this.clearCart,
//           addProduct: this.addProduct,
//           checkout: this.checkout,
//         }}
//       >
//         <Router ref={this.routerRef}>
//           <div className="App">
//             <nav
//               className="navbar container"
//               role="navigation"
//               aria-label="main navigation"
//             >
//               <div className="navbar-brand">
//                 <b className="navbar-item is-size-4 ">ecommerce</b>
//                 <a
//                   role="button"
//                   className="navbar-burger burger"
//                   aria-label="menu"
//                   aria-expanded="false"
//                   data-target="navbarBasicExample"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     this.setState({ showMenu: !this.state.showMenu });
//                   }}
//                 >
//                   <span aria-hidden="true"></span>
//                   <span aria-hidden="true"></span>
//                   <span aria-hidden="true"></span>
//                 </a>
//               </div>
//               <div
//                 className={`navbar-menu ${this.state.showMenu ? "is-active" : ""}`}
//               >
//                 <Link to="/products" className="navbar-item">
//                   Products
//                 </Link>
//                 {this.state.user && this.state.user.accessLevel < 1 && (
//                   <Link to="/add-product" className="navbar-item">
//                     Add Product
//                   </Link>
//                 )}
//                 <Link to="/cart" className="navbar-item">
//                   Cart
//                   <span
//                     className="tag is-primary"
//                     style={{ marginLeft: "5px" }}
//                   >
//                     {Object.keys(this.state.cart).length}
//                   </span>
//                 </Link>
//                 {!this.state.user ? (
//                   <Link to="/login" className="navbar-item">
//                     Login
//                   </Link>
//                 ) : (
//                   <a className="navbar-item" onClick={this.logout}>
//                     Logout
//                   </a>
//                 )}
//               </div>
//             </nav>
//             <Switch>
//               <Route exact path="/" component={ProductList} />
//               <Route exact path="/login" component={Login} />
//               <Route exact path="/cart" component={Cart} />
//               <Route exact path="/add-product" component={AddProduct} />
//               <Route exact path="/products" component={ProductList} />
//             </Switch>
//           </div>
//         </Router>
//       </Context.Provider>
//     );
//   }
// }

//contextprovider
// router
//  div.app
//   nav with links & switch of routes
