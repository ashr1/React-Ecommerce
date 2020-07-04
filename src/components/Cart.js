import React, { Fragment } from "react";
import withContext from "../withContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = props.context.cart;
  let cartKeys = Object.keys(cart || {});
  return (
    <Fragment>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">My Cart</h4>
        </div>
      </div>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map((key) => (
              <CartItem
                key={key}
                cartKey={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={props.context.clearCart}
                  className="button is-warning"
                >
                  Clear Cart
                </button>{" "}
                <button
                  onClick={props.context.checkout}
                  className="button is-success"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <span className="title has-text-grey-light">
              No item in the cart!
            </span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default withContext(Cart);
