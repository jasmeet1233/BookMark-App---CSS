import axios from "axios";
import React, { useEffect } from "react";
import ContentContainer from "./ContentContainer";
import Sidebar from "./Sidebar";
import client from "../../api/api_loginSignUp";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const dummyData = {
  name: "netflix",
  id: `${uuidv4()}`,
};

const MainContainer = () => {

  const dispatch = useDispatch();
  useEffect(async () => {
     const response2 = await client.get("/folders");
     console.log(response2);
    dispatch({ type: "FoldersAdded", payload: response2.data });
  }, []);

  return (
    <main className="main-container">
      <Sidebar />
      <ContentContainer />
    </main>
  );
};

export default MainContainer;
