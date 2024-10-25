import { fromJS } from "immutable";
const initialState = fromJS({
  counter: 0,
  userInfo: {
    name: "John Doe",
    age: 25,
  },
});
function CounterReducer(state = initialState, action) {
  console.log("🚀 ~ CounterReducer ~ action:", action);
  switch (action.type) {
    case "ADD":
      return state.update("counter", (val) => {
        return val + 1;
      });
    case "ADD_TWO":
      return state.update("counter", (val) => {
        return val + 2;
      });
    case "DEC":
      return state.update("counter", (val) => val - 1);
    case "DEC_TWO":
      return state.update("counter", (val) => val - 2);
    case "CHANGE_NAME":
      return state.setIn(["userInfo", "name"], action.payload);
    default:
      return state;
  }
}

// async action 2s later
function handleDelayAdd() {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: "ADD_TWO" }), 2000);
  };
}

// async action 2s later
function handleDelayReduce() {
  return (dispatch) => {
    setTimeout(() => dispatch({ type: "DEC_TWO" }), 2000);
  };
}

export { CounterReducer, handleDelayAdd, handleDelayReduce };
