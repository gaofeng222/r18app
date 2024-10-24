const initialState = {
  counter: 0,
  userInfo: {
    name: "John Doe",
    age: 25,
  },
};
function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return state - 1;
    default:
      return state;
  }
}

export { CounterReducer };
