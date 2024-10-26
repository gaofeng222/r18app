import { createSlice } from "@reduxjs/toolkit";
window.localStorage.setItem(
  "taskTodo",
  JSON.stringify([
    {
      id: 1,
      task: "西湖区湖底公园1号",
      endTime: "2021-12-30",
      key: 1,
      isDone: false,
    },
    {
      id: 2,
      task: "西湖区湖底公园21号",
      endTime: "2024-12-30",
      key: 2,
      isDone: true,
    },
  ])
);
const initialState = {
  datalists: [],
};

export const counterSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    init(state) {
      const data = JSON.parse(localStorage.getItem("taskTodo"));
      state.datalists = data;
    },
    add: (state, action) => {
      console.log("🚀 ~ action:", action);
      state.datalists.push(action.payload);
    },
    deleteItem: (state, action) => {
      console.log("🚀 ~ action:", action);
      state.datalists = state.datalists.filter(
        (item) => item.key != action.payload
      );
    },
    handleClickHasDone(state, action) {
      // state.datalists = action.payload.filter((item) => item.isDone);
    },
    handleClickNotDone(state, action) {
      // state.datalists = action.payload.filter((item) => !item.isDone);
    },
    changeState(state, action) {
      const data = state.datalists.filter((item) => {
        console.log("🚀 ~ item:", item);
      });
    },
  },
});

// 异步获取数据

function getTaskList() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(init());
    }, 100);
  };
}

function getHasDone() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(handleClickHasDone());
    }, 100);
  };
}

function getNtDone() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(handleClickNotDone());
    }, 100);
  };
}

function getAllData() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(init());
    }, 100);
  };
}

function handleClickChangeDone(data) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(changeState(data));
    }, 100);
  };
}

export const {
  init,
  add,
  deleteItem,
  handleClickNotDone,
  handleClickHasDone,
  changeState,
} = counterSlice.actions;
export {
  getTaskList,
  getHasDone,
  getNtDone,
  getAllData,
  handleClickChangeDone,
};
export default counterSlice.reducer;
