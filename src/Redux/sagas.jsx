import axios from "axios";
import { put, takeEvery, all, call } from "@redux-saga/core/effects";

function* helloSaga() {
  console.log("Hello Sagas!");
}

function* authenticateUserCall(action) {
  console.log('check');
  console.log(action);
};

function* authenticateUser() {
    const data = yield call(authenticateUserCall);
    // yield put({type: 'Success', payload: data})
}

function* watchauthenticateUser() {
    yield takeEvery('CHECK_USER', authenticateUser)
}

export default function* rootSaga() {
    yield all([helloSaga(), watchauthenticateUser()])
}
