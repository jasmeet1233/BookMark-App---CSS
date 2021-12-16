import axios from "axios";
import { put, takeEvery, all, call } from "@redux-saga/core/effects";
const url = "https://bookmarks-app-server.herokuapp.com";

export function* helloSaga() {
  console.log("Hello Sagas!");
}

async function authenticateUserCall({ payload }) {
  try {
    const response = await axios.post(`${url}/login`, payload);
    return response.data
  } catch (error) {
    console.log(error)
  }
}

function* authenticateUser(action) {
  try {
     const data = yield call(authenticateUserCall, action);
     yield put({type: 'Success', payload: data})
  } catch (error) {
    console.log(error)
  }  

  
}

export function* watchauthenticateUser() {
  yield takeEvery("CHECK_USER", authenticateUser);
}


