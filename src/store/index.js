import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import { thunk } from "redux-thunk";

import { CounterReducer } from "./CounterReducer";

const reducers = combineReducers({
  count: CounterReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
