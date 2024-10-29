import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";
const initState = fromJS({
  isLogin: false,
  articleList: [],
  userInfo: {
    username: "",
    password: "",
  },
});

function sysLoginReducer(state = initState, action) {
  console.log("🚀 ~ sysLoginReducer ~ action:", action);
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return state.set("isLogin", true);
    case actionTypes.LOGIN_OUT:
      return state.set("isLogin", false);
    case actionTypes.CHANGE_USERNAME:
      return state.mergeIn(["userInfo"], { username: action.value });
    case actionTypes.CHANGE_PASSWORD:
      return state.mergeIn(["userInfo"], { password: action.value });
    case actionTypes.UPDATA_LIST:
      return state.set("articleList", action.value);
    default:
      return state;
  }
}
export default sysLoginReducer;
