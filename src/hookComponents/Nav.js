import React, { useState, useContext } from "react";
import StoreContext from "../context/StoreContext";
import { Link } from "react-router-dom";
// toggle showMenu on user click 
// user and if they are admin 

const user = { username: 'user', accessLevel: 1, password: "password" }
const cart = {}
const logout = () => { console.log('logout') }

const Nav = () => {
  const [showMenu, toggleShowMenu] = useState(false)
  return (
    <nav
      className="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <b className="navbar-item is-size-4 ">ecommerce</b>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={(e) => {
            e.preventDefault();
            toggleShowMenu(!showMenu)
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${showMenu ? "is-active" : ""}`}>
        <div to="/products" className="navbar-item">
          Products
        </div>
        {user && user.accessLevel < 1 && (
          <div to="/add-product" className="navbar-item">
            Add Product
          </div>
        )}
        <div to="/cart" className="navbar-item">
          Cart
          <span className="tag is-primary" style={{ marginLeft: "5px" }}>
            {Object.keys(cart).length}
          </span>
        </div>
        {!user ? (
          <div to="/login" className="navbar-item">
            Login
          </div>
        ) : (
          <a className="navbar-item" onClick={logout}>
            Logout
          </a>
        )}
      </div>
    </nav>
  );
};

export default Nav;
