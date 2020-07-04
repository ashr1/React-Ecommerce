import React, { useState, useContext } from "react";
import StoreContext from '../context/StoreContext';
import { Redirect } from "react-router-dom";

// const authenticateUser = (username, password) => false;
// const currentUser = false;

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const [error,setError] = useState('')

  const store = useContext(StoreContext);

  const handleChange = (e) => {
    const updated = { [e.target.name]: e.target.value };
    setUser((prevState) => ({
      ...prevState,
      ...updated
    }));
    setError('')
  };

  const login = () => {
    const { username, password } = user;
    if (!username || !password) {
      setError("You must enter all fields!")
      return;
    }
    const loggedIn = store.login(user.username, user.password);
    if (!loggedIn) {
      setError("Invalid credentials.")
    }
  };

  return !store.user ? (
    <>
      <div className="hero is-primary ">
        <div className="hero-body container">
          <h4 className="title">Login</h4>
        </div>
      </div>
      <br />
      <br />
      <div className="columns is-mobile is-centered">
        <div className="column is-one-third">
          <div className="field">
            <label className="label">User Name: </label>
            <input
              className="input"
              type="text"
              name="username"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label className="label">Password: </label>
            <input
              className="input"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>

          {error && <div className="has-text-danger">{error}</div>}

          <div className="field is-clearfix">
            <button
              className="button is-primary is-outlined is-pulled-right"
              onClick={login}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/">You are logged in.</Redirect>
  );
};

export default Login;

{/* <div to="/products">You are logged in.</div> */}
