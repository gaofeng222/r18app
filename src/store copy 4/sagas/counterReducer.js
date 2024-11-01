import { fromJS } from "immutable";
import * as counterActions from "./actionTypes";
const initstate = fromJS({
  counter: 0,
});

function CounterReducer(state = initstate, action) {
  switch (action.type) {
    case counterActions.INCREMENT:
      console.log("INCREMENT", action);
      const num = action.payload ? action.payload.step : 1;
      return state.update("counter", (counter) => counter + num);
    case counterActions.DECREMENT:
      const num2 = action.payload ? action.payload.step : 1;
      return state.update("counter", (counter) => counter - num2);
    case counterActions.REQUEST_FAIL:
      return state.set("error", action.payload);
    default:
      return state;
  }
}
export default CounterReducer;
