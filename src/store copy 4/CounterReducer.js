import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  userInfo: {
    name: "John Doe",
    age: 25,
  },
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state) => {
      state.counter += 1;
      console.log("🚀 ~ state:", state.counter);
    },
    dec: (state) => {
      state.counter -= 1;
      console.log("🚀 ~ state:", state.counter);
    },
    changeName: (state, action) => {
      console.log("🚀 ~ payload:", action);
      state.userInfo.name = action.payload;
    },
    handleDelayAddByTen1: (state, action) => {
      console.log("🚀 ~ action:", action);
      state.counter += action.payload;
    },
  },
});

// async action 2s later
function handleDelayAdd() {
  return (dispatch) => {
    setTimeout(() => dispatch(add()), 2000);
  };
}

// async action 2s later
function handleDelayReduce() {
  return (dispatch) => {
    setTimeout(() => dispatch(dec()), 2000);
  };
}

function handleDelayAddByTen(count) {
  return (dispatch) => {
    setTimeout(() => dispatch(handleDelayAddByTen1(count)), 2000);
  };
}

// export actions，提供给组件调用
export const { add, dec, changeName, handleDelayAddByTen1 } =
  counterSlice.actions;

export { handleDelayAdd, handleDelayReduce, handleDelayAddByTen };

// export reducer,提供给store使用
export default counterSlice.reducer;
