import { helloSaga, watchauthenticateUser } from "./sagas";
import { watchSignupUser } from "./SignupSaga";
import { put, takeEvery, all, call } from "@redux-saga/core/effects";

export default function* rootSaga() {
  yield all([helloSaga(), watchauthenticateUser(), watchSignupUser()]);
}