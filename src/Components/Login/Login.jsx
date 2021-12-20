import React, { useEffect, useMemo, useState, useRef } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableClick, useDisableClick] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const loginBtnRef = useRef();

  const data = useSelector((state) => state.bookmarkReducer);
  console.log(data, "---app");

  // useEffect(() => {
  //   localStorage.setItem("todoList", JSON.stringify(todoList));
  // }, [localDataRef.current]);

  if (localStorage.getItem("bookmarkToken")) {
    console.log(localStorage.getItem("bookmarkToken"));
    history.push("/");
  }

  useEffect(() => {
    if (data.redirect) {
      localStorage.setItem(
        "bookmarkToken",
        JSON.stringify(data.userData.token)
      );
      history.push("/");
    } else if (data.error === true) {
      loginBtnRef.current.disabled = false;
      alert("email or password is wrong");
      useDisableClick(false);
    }
  }, [data]);

  const loginHandler = (e) => {
    loginBtnRef.current.disabled = true;
    useDisableClick(true);
    e.preventDefault();
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
              ref={loginBtnRef}
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
