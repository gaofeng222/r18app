import { combineReducers } from "redux-immutable";
import baseReducers from "./base";
import storeReducers from "./store";

const reducers = combineReducers({
  base: baseReducers,
  store: storeReducers,
});

export default reducers;
