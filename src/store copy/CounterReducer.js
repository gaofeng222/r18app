import { fromJS } from "immutable";
const initialState = fromJS({
  counter: 0,
  userInfo: {
    name: "John Doe",
    age: 25,
  },
});
function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return state.update("counter", (val) => {
        return val + 1;
      });
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export { CounterReducer };
