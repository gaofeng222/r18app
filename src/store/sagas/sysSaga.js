import * as actionTypes from "./actionTypes";
import {
  takeLatest,
  fork,
  all,
  delay,
  put,
  call,
  takeEvery,
} from "redux-saga/effects";
// 修改名称
function* handleChangeName(action) {
  console.log("change name", action);
  // yield delay(2000);
  yield put({ type: actionTypes.CHANGE_USERNAME, value: action.value });
}

function* watchChangeName() {
  yield takeLatest(actionTypes.CHANGE_USERNAME + "@@SAGA@@", handleChangeName);
}

function* handleChangePwd(action) {
  console.log("change pwd", action);
  // yield delay(2000);
  yield put({ type: actionTypes.CHANGE_PASSWORD, value: action.value });
}

function* watchChangePwd(action) {
  console.log("change pwd", action);
  yield takeLatest(actionTypes.CHANGE_PASSWORD + "@@SAGA@@", handleChangePwd);
}

function* getList() {
  try {
    yield delay(3000);
    const activityList = [
      { username: "username1", channelName: "channelName1" },
      { username: "username2", channelName: "channelName2" },
      { username: "username3", channelName: "channelName3" },
      { username: "username4", channelName: "channelName4" },
    ];
    yield put({ type: actionTypes.UPDATA_LIST, value: activityList });
  } catch (error) {
    yield put({ type: "update_list_error", error });
  }
}

function* handleLogout() {
  console.log("logout");
  yield put({ type: actionTypes.LOGIN_OUT });
}

function* handleLogin(action) {
  console.log("login", action);
  yield delay(2000);
  if (action.value.username === "admin" && action.value.password === "123456") {
    yield put({ type: actionTypes.LOGIN_SUCCESS });
    // 获取列表数据
    yield fork(getList);
  } else {
    yield put({ type: actionTypes.LOGIN_FAIL });
  }

  // 监听登出
  yield takeEvery(actionTypes.LOGIN_OUT + "@@SAGA@@", handleLogout);
}
function* watchLogin(action) {
  console.log("login", action);
  yield takeLatest(actionTypes.LOGIN + "@@SAGA@@", handleLogin);
}

function* sysSaga() {
  console.log("SYS SAGA");
  // 监听所有的dispatch
  yield all([fork(watchChangeName), fork(watchChangePwd), fork(watchLogin)]);
}
export default sysSaga;
