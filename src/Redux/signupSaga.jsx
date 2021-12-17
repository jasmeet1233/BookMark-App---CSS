//REGISTER_USER

import axios from "axios";
import { put, takeEvery, all, call } from "@redux-saga/core/effects";
const url = "https://bookmarks-app-server.herokuapp.com";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

async function postData({ payload }) {
  try {
    const response = await axios.post(`${url}/register`, payload);
    console.log(response);
    // return response.data;
  } catch (error) {
    console.log(error);
  }
}

function* helperSignUp(action) {
  try {
    const data = yield call(postData, action);
    console.log(data)
    // yield put({ type: "SignUp_Success", payload: data });
  } catch (error) {
    console.log(error);
  }
}

export function* watchSignupUser() {
  console.log('hello')
  yield takeEvery("REGISTER_USER", helperSignUp);
}
