import React, { useEffect, useMemo, useState, useRef } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuthenticationHook from "../../Hooks/authenticationHook";

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const loginBtnRef = useRef();
  const { isUserLoggedIn } = useAuthenticationHook();
  

  const data = useSelector((state) => state.bookmarkReducer);
  console.log(data, "---app");
  console.log(isEmpty(data.userData), "----");

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  useEffect(() => {
    if (!isEmpty(data.userData)) {
      console.log(isEmpty(data.userData));
      localStorage.setItem(
        "bookmarkToken",
        JSON.stringify(data.userData.token)
      );
      history.push("/");
    } else if (data.errorMessage.length > 1) {
      alert("email or password is wrong");
    }
  }, [data]);

  const loginHandler = (e) => {
    e.preventDefault();
    console.log("login Handler");
    dispatch({
      type: "CHECK_USER",
      payload: { email: email, password: password },
    });
    
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn-images-1.medium.com/max/92/1*q1NSpt2nAvFdp0ZUYSgeHQ@2x.png"
          alt="glue-logo"
        />
      </div>

      <div className="login__form-container">
        <form>
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button
              onClick={loginHandler}
              className="login__button"
              disabled = {data.isLoading ? true : false}
            >
              Login
            </button>

            <Link to="/signup">Create Account {"->"} </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
