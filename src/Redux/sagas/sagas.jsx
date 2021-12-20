import { put, takeEvery, all, call } from "@redux-saga/core/effects";
const url = "https://bookmarks-app-server.herokuapp.com";
import { authenticateUserCall } from "../../API_Calls/Login_Signup/Login_Signup";

export function* helloSaga() {
  // console.log("Hello Sagas!");
}

function* authenticateUser(action) {
  try {
     const data = yield call(authenticateUserCall, action);
    //  console.log(data, '---saga data')
     yield put({type: 'Success', payload: data});
  } catch (error) {
    yield put({type: 'Error', payload: error});
  }  
}

export function* watchauthenticateUser() {
  yield takeEvery("CHECK_USER", authenticateUser);
}


