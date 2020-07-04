import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import ProductItem from "./ProductItem";

// const addToCart = () => console.log("addToCart");

const ProductList = () => {
  const store = useContext(StoreContext);
  const productToCartItem = (product) => {
    const cartItem = {
      id: product.name,
      product,
      amount: 1,
    };
    store.addToCart(cartItem);
  };
  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Our Products</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {store.products && store.products.length ? (
            store.products.map((product, index) => (
              <ProductItem
                product={product}
                key={index}
                addToCart={() => productToCartItem(product)}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No products found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;

// const cartItem = {
//   id: "Puma Shoes",
//   product: {
//     name: "Puma Shoes",
//     stock: 11,
//     price: 399.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   },
//   amount: 4,
// };

// const products = [
//   {
//     name: "Puma Shoes",
//     stock: 11,
//     price: 399.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   },
//   {
//     name: "Nike Track Jacket",
//     stock: 15,
//     price: 79.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   },
//   {
//     name: "Nike Mens Tech Tee",
//     stock: 59,
//     price: 19.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   },
//   {
//     name: "North Face Windbreaker",
//     stock: 10,
//     price: 89.99,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   },
//   {
//     name: "Burberry Joggers",
//     stock: 13,
//     price: 73.25,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   },
//   {
//     name: "Reekbok Athletic Gloves",
//     stock: 8,
//     price: 15.75,
//     shortDesc: "Nulla facilisi. Curabitur at lacus ac velit ornare lobortis.",
//     desc:
//       "Cras sagittis. Praesent nec nisl a purus blandit viverra. Ut leo. Donec quamelis, ultricies nec, pellentesque eu, pretium quis, sem. Fusce a quam.",
//   },
// ];
