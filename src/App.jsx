import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter,
  // Routes, // Just Use Routes instead of "Switch"
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { useSelector } from "react-redux";

// check token - if true - push /home
// flase -- redirect

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
