import React from 'react'
import './Signup.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
//   const history = useHistory();

  const signupHandler = (e) => {
    e.preventDefault();
    if(email && password && name) {
      console.log('hello')
     dispatch({
       type: "REGISTER_USER",
       payload: { email: email, password: password, name: name },
     });
    } else {
      alert('data missing')
    }
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
            value={name}
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
            <button onClick={signupHandler} className="login__button signup">
              Create Account
            </button>
            <Link to='/login'>Login {'->'}</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup
