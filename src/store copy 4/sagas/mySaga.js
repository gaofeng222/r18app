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
} from "redux-saga/effects";
import * as counterActions from "./actionTypes";
import { getUserInfo } from "../../api";
// function* handleAddCount(data) {
//   console.log("saga running1", data);
//   try {
//     const reslut = yield call(getUserInfo, data);
//     console.log("🚀 ~ function*handleAddCount ~ reslut:", reslut);
//     yield put({
//       type: counterActions.INCREMENT,
//       payload: { step: reslut.payload.step },
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// call,apply 都可以执行异步操作，主要是调用后端接口,与js中的call,apply一样,只是call第一个参数是函数名,后面的参数是一个个传进去,apply第一个参数是函数名,第二个参数是一个数组
// put与redux中的dispatch一样,都是用来触发action的，这里的action是一个plain object

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
// function* mySaga() {
//   while (true) {
//     const data = yield take(counterActions.INCREMENT + "@@sagas@@");
//     console.log("saga running222", data);
//     const reslut = yield call(getUserInfo, data);
//     console.log("🚀 ~ function*mySaga ~ reslut:", reslut);
//     yield put({
//       type: counterActions.INCREMENT,
//       payload: { step: reslut.payload.step },
//     });
//   }
// }

// 普通版
// function* mySaga() {
//   yield takeEvery(counterActions.INCREMENT + "@@sagas@@", handleAddCount);
// }

// 防抖版
// function* mySaga() {
//   yield takeLatest(counterActions.INCREMENT + "@@sagas@@", handleAddCount);
// }

// 始终只执行第一次点击
/**
 * Since `takeLeading` ignores any new coming task
 * after it's started, we ensure that if a user triggers multiple consecutive
 * `USER_REQUESTED` actions rapidly, we'll only keep on running with the leading
//  */
// function* mySaga() {
//   yield takeLeading(counterActions.INCREMENT + "@@sagas@@", handleAddCount);
// }

// 防抖版,debounce第一个参数是等待时间,第二个参数是监听的异步actionType,第三个参数是回调函数
// function* mySaga() {
//   yield debounce(2000, counterActions.INCREMENT + "@@sagas@@", handleAddCount);
// }

// retry(num, counterActions.INCREMENT + "@@sagas@@", handleAddCount);如果第一次请求失败,尝试请求num次

// function* handleAddCountRetry(data) {
//   const state = yield select((state) => state);
//   console.log("count222", state.getIn(["count", "counter"]));
//   try {
//     const SECOND = 1000;
//     const response = yield retry(3, 1 * SECOND, getUserInfo, {
//       name: "retry",
//       step: 122,
//     });
//     console.log("🚀 ~ function*handleAddCountRetry ~ response:", response);
//     yield put({
//       type: counterActions.INCREMENT,
//       payload: { step: response.step },
//     });
//   } catch (error) {
//     yield put({ type: "REQUEST_FAIL", payload: { error } });
//   }
// }

function* handleAddCount(data) {
  console.log("saga running1", data);
  try {
    console.log("🚀 ~ call:", 111111);
    const reslut = yield call(getUserInfo, data);
    console.log("🚀 ~ call:", reslut);
    yield put({
      type: counterActions.INCREMENT,
      payload: { step: reslut.payload.step },
    });
  } catch (error) {
    console.log("error", error);
  }
}

// function* handleForkAddCount(data) {
//   try {
//     const reslut = yield call(getUserInfo, data);
//     console.log("🚀 ~ call2222:", reslut);
//     yield put({
//       type: counterActions.INCREMENT,
//       payload: { step: reslut.payload.step },
//     });
//   } catch (error) {
//     console.log("error", error);
//   }
// }

// function* handleAddCount(data) {
//   console.log("saga running1", data);
//   try {
//     console.log("🚀 ~ fork:", 111111);
//     yield fork(handleForkAddCount, data);

//     // 这里就是需要执行的其他的操作

//     console.log("🚀 ~ fork:", 22222);
//   } catch (error) {
//     console.log("error", error);
//   }
// }

function* handleMinusCount(data) {
  console.log("saga handleMinusCount", data);
  try {
    const reslut = yield call(getUserInfo, data);
    console.log("🚀 ~ call:", reslut);
    yield put({
      type: counterActions.DECREMENT,
      payload: { step: reslut.payload.step },
    });
  } catch (error) {
    console.log("error", error);
  }
}

function* mySaga() {
  yield takeLeading(counterActions.INCREMENT + "@@sagas@@", handleAddCount);
  yield takeLatest(counterActions.DECREMENT + "@@sagas@@", handleMinusCount);
}

export default mySaga;
