import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import createSagaMiddleware from "redux-saga";
import defAllSags from "./sagas/index.js";
import CounterReducer from "./sagas/counterReducer";
import TaskOkReucer from "./sagas/taskOkReucer.js";
import sysLoginReducer from "./sagas/sysReucers.js";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  count: CounterReducer,
  task: TaskOkReucer,
  sys: sysLoginReducer,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(defAllSags);

export default store;
