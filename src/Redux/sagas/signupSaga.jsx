//REGISTER_USER
import axios from "axios";
import { put, takeEvery, all, call } from "@redux-saga/core/effects";
const url = "https://bookmarks-app-server.herokuapp.com";
import { postData } from "../../API_Calls/Login_Signup/Login_Signup";

function* helperSignUp(action) {
  console.log("helperSignUp working");
  try {
    console.log(action, "----saga action");
    const data = yield call(postData, action);
    yield put({ type: "SignUp_Success", payload: data });
  } catch (error) {
    console.log(error.response.status);
    if (error.response.status === 500) {
      yield put({ type: "SignUp_Fail" });
    }
  }
}

//user token --
//app - check token avalaibliltiy
//

export function* watchSignupUser() {
  console.log("watchSignupUser working");
  yield takeEvery("REGISTER_USER", helperSignUp);
}
