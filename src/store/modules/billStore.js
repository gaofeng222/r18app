//账单列表相关数据
import { createSlice } from "@reduxjs/toolkit";
import { getLists } from "@/api";
const billStore = createSlice({
  name: "bill",
  //初始化数据状态
  initialState: {
    billLists: [],
  },
  reducers: {
    //同步修改
    setBillLists(state, action) {
      state.billLists = action.payload;
    },
  },
});

const { setBillLists } = billStore.actions;

export const getBillLists = () => {
  return async (dispatch) => {
    const data = await getLists();
    console.log("🚀 ~ return ~ data:", data);
    dispatch(setBillLists(data.lists));
  };
};

const reducer = billStore.reducer;
export default reducer;
