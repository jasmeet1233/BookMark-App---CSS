import axios from "axios";

const client = axios.create({
  baseURL: "https://bookmarks-app-server.herokuapp.com/",
});

client.interceptors.request.use(
  (config) => {
    const Config = config;
    const token = JSON.parse(localStorage.getItem("bookmarkToken"));
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
