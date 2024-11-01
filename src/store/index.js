import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxPromise from "redux-promise";
import reducer from "./reducer";

const middleware = [thunk, reduxPromise];
const env = process.env.NODE_ENV;
if (env === "development") {
  middleware.push(createLogger({ collapsed: true }));
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
