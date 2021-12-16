import React, { useMemo, useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector(state => state.bookmarkReducer)
  // console.log(data)

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "CHECK_USER",
      payload: { email: email, password: password },
    });
  };

  const redicrect = useMemo(() => {
  if (data.redirect) {
    history.push("/");
  }
  }, [data])



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
            <button onClick={loginHandler} className="login__button">
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
