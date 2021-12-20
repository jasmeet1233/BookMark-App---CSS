import axios from "axios";

const url = "https://bookmarks-app-server.herokuapp.com";

export async function authenticateUserCall({ payload }) {
  try {
    const response = await axios.post(`${url}/login`, payload);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response);
    throw error;
    // return error
  }
}

export async function postData({ payload }) {
  console.log(payload, "---api payload");
  console.log("postdata working");
  try {
    const response = await axios.post(`${url}/register`, payload);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
}
