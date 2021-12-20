import { helloSaga, watchauthenticateUser } from "./sagas";
import { put, takeEvery, all, call } from "@redux-saga/core/effects";
import { watchSignupUser } from "./signupSaga";

export default function* rootSaga() {
  yield all([helloSaga(), watchauthenticateUser(), watchSignupUser()]);
}