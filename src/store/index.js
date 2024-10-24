import { createStore } from "redux";

import { CounterReducer } from "./CounterReducer";

let store = createStore(CounterReducer);

store.subscribe(() => console.log(store.getState()));

export default store;
