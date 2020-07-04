import React, { useContext } from "react";
import StoreContext from '../context/StoreContext';
import CartItem from "./CartItem";

// const removeFromCart = () => { console.log('removeFromCart')}
// const clearCart = () => { console.log('clearCart')}
// const checkout = () => { console.log('checkout')}

const Cart = () => {
  const { cart, clearCart, removeFromCart, checkout } = useContext(StoreContext);
  // const cart = cartData;
  let cartKeys = Object.keys(cart || {});
  return (
    <>
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
                removeFromCart={removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                <button
                  onClick={clearCart}
                  className="button is-warning"
                >
                  Clear Cart
                </button>{" "}
                <button
                  onClick={checkout}
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
    </>
  );
};

export default Cart;

// const pumaShoes = {
//     name: "Puma Shoes",
//     stock: 11,
//     price: 399.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   };
  
//   const nikeJacket = {
//     name: "Nike Track Jacket",
//     stock: 15,
//     price: 79.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   };
  
//   const northFaceWB = {
//     name: "North Face Windbreaker",
//     stock: 10,
//     price: 89.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   };

// const cartData = {
//   "Puma Shoes": {
//     id: "Puma Shoes",
//     product: { ...pumaShoes },
//     amount: 4,
//   },
//   "Nike Track Jacket": {
//     id: "Nike Track Jacket",
//     product: { ...nikeJacket },
//     amount: 3,
//   },
//   "North Face Windbreaker": {
//     id: "North Face Windbreaker",
//     product: { ...northFaceWB },
//     amount: 1,
//   },
// };


