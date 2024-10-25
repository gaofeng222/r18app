import { createStore } from "redux";
import { combineReducers } from "redux-immutable";

import { CounterReducer } from "./CounterReducer";

const reducers = combineReducers({
  count: CounterReducer,
});

let store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

export default store;
