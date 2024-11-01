import { all } from "redux-saga/effects";

import mySaga from "./mySaga";
import taskSagas from "./taskSagas";
import sysSaga from "./sysSaga";

function* defAllSags() {
  yield all([mySaga(), taskSagas(), sysSaga()]);
}

export default defAllSags;
