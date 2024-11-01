import { fromJS } from "immutable";
const initstate = fromJS({
  info: {
    name: "base",
  },
});

function baseReducers(state = initstate, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default baseReducers;
