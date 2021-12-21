import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useAuthenticationHook = () => {
  const history = useHistory();

  const isUserLoggedIn = () => {
    if (localStorage.getItem("bookmarkToken")) {
      console.log(localStorage.getItem("bookmarkToken"));
      history.push("/");
    }
  };

  return { isUserLoggedIn };
};

export default useAuthenticationHook;
