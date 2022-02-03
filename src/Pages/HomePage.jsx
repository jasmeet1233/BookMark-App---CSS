import React from "react";
import NavBar from "../Components/Navigation/NavBar";
import MainContainer from "../Components/mainContainer/MainContainer";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import client from "../api/api_loginSignUp";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  if (!localStorage.getItem("bookmarkToken")) {
    history.push("/login");
  }

  useEffect(async () => {
    const response = await client.get("me");
    console.log(response.data, '=======thats me');
    dispatch({type: 'userDetails', payload: response.data})
  })

  return (
    <>
      <NavBar />
      <MainContainer />
    </>
  );
};

export default HomePage;
