import { fromJS } from "immutable";
import * as useActionTypes from "./actionTypes";

const initState = fromJS({
  user: { name: "John", age: 30 },
});

function TaskOkReucer(state = initState, action) {
  console.log("🚀 ~ TaskOkReucer ~ action:", action);
  switch (action.type) {
    case useActionTypes.CHANGE_NAME:
      return state.update("user", (value) => {
        return value
          .set("age", action.payload.age)
          .set("name", action.payload.name);
      });
    default:
      return state;
  }
}
export default TaskOkReucer;
