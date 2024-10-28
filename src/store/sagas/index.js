import { all } from "redux-saga/effects";

import mySaga from "./mySaga";
import taskSagas from "./taskSagas";

function* defAllSags() {
  yield all([mySaga(), taskSagas()]);
}

export default defAllSags;
