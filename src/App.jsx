import React from "react";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter,
  // Routes, // Just Use Routes instead of "Switch"
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
 return (
   <BrowserRouter>
     <Switch>
       <Route exact path="/" ><HomePage /></Route>
       <Route exact path="/login" ><Login /></Route>
     </Switch>
   </BrowserRouter>
 );
}

export default App;
