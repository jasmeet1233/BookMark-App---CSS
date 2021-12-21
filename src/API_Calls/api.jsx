// import axios from "axios";

// // Add a request interceptor
// const token = localStorage.getItem("bookmarkToken");
// axios.defaults.baseURL = "https://bookmarks-app-server.herokuapp.com";

// axios.interceptors.request.use(
//   function (config) {
//     const Config = config;
//     let headers = {
//       "Content-type": "application/json; charset=UTF-8",
//       Authorization: "Bearer " + token,
//     };
//     // Do something before request is sent
//     if (token) {
//       Config.headers.common["Authorization"] = `Bearer ${token}`;
//     }

//     return Config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

import axios from "axios";

const client = axios.create({
  baseURL: "https://bookmarks-app-server.herokuapp.com/",
});

client.interceptors.request.use(
  (config) => {
    const Config = config;
    const token = localStorage.getItem("bookmarkToken");
    if (token) {
      Config.headers.common["Authorization"] = `Bearer ${token}`;
    }
    Config.headers.common["Accept"] = "application/json";

    return Config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

export default client;
