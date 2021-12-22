import axios from "axios";
import React, { useEffect } from "react";
import ContentContainer from "./ContentContainer";
import Sidebar from "./Sidebar";
import client from "../../API_Calls/api";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

const dummyData = {
  name: "prime",
  id: `${uuidv4()}`,
};

const MainContainer = () => {
  // console.log(uuidv4());
  //   let token;
  //   const baseURL = "https://bookmarks-app-server.herokuapp.com";

  //   if(localStorage.getItem('bookmarkToken')){
  //     token = JSON.parse(localStorage.getItem("bookmarkToken"));
  //   }
  //   console.log(token)

  // const returnAxios = (data) => {
  //  const authAxios = axios.create({
  //     baseURL: baseURL,
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       data: dummyData
  //     },
  //     data: data
  //   })

  //   return authAxios
  // }

  const dispatch = useDispatch();
  useEffect(async () => {
    //  const response = client.post('/folder', dummyData)
    //  console.log(response.data);
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
