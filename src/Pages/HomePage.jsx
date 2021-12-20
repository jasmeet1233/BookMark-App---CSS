import React from "react";
import NavBar from "../Components/Navigation/NavBar";
import MainContainer from "../Components/mainContainer/MainContainer";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  if (!localStorage.getItem("bookmarkToken")) {
    history.push("/login");
  }

  return (
    <>
      <NavBar />
      <MainContainer />
    </>
  );
};

export default HomePage;
