import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const user = { username: "user", accessLevel: 0, password: "password" };

const initState = {
  name: "",
  stock: "",
  price: "",
  shortDesc: "",
  desc: "",
};

const AddProduct = () => {
  const [product, setProduct] = useState(initState);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const update = { [e.target.name]: e.target.value };
    setProduct((prevState) => ({
      ...prevState,
      ...update,
    }));
    setError("");
  };

  const save = (e) => {
    e.preventDefault();
    const { name, price, stock } = product;
    if (name && price) {
      const displayProduct = { ...product, stock: stock || 0 };
      console.log("addProduct: ", displayProduct);
      setProduct(initState);
    } else {
      setError("Please enter name and price.");
    }
  };

  return !(user && user.accessLevel < 1) ? (
    <div to="/"></div>
  ) : (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Add Product</h4>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={save}>
        <div className="columns is-mobile is-centered">
          <div className="column is-one-third">
            <div className="field">
              <label className="label">Product Name: </label>
              <input
                className="input"
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Price: </label>
              <input
                className="input"
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label className="label">Available in stock: </label>
              <input
                className="input"
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Short Description: </label>
              <input
                className="input"
                type="text"
                name="shortDesc"
                value={product.shortDesc}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="label">Description: </label>
              <textarea
                className="textarea"
                type="text"
                rows="2"
                style={{ resize: "none" }}
                name="desc"
                value={product.desc}
                onChange={handleChange}
              />
            </div>
            {error && <div className="error">{error}</div>}
            <div className="field is-clearfix">
              <button
                className="button is-primary is-outlined is-pulled-right"
                type="submit"
                onClick={save}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
