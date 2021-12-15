import React from 'react'
import './Signup.css'
import { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
//   const dispatch = useDispatch();

//   const history = useHistory();
  const signupHandler = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: "CHECK_USER",
    //   payload: { email: email, password: password },
    // });
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
          <p>Name</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setName(e.target.value)}
          />
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
            <button onClick={signupHandler} className="login__button">
              Create Account
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup
