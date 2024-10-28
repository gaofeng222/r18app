import {
  take,
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
  debounce,
  retry,
  select,
  fork,
  delay,
} from "redux-saga/effects";
import * as counterActions from "./actionTypes";

function* changeName(action) {
  console.log("changeName", action);
  yield delay(3000);
  yield put({ type: counterActions.CHANGE_NAME, payload: action.payload });
}

function* taskSagas() {
  console.log("8888");
  yield takeEvery(counterActions.CHANGE_NAME + "@@sagas@@", changeName);
}

export default taskSagas;
