import { fromJS, Map } from "immutable";
import * as useActionTypes from "./actionTypes";

const initState = fromJS({
  user: { name: "John", age: 30 },
});

function TaskOkReucer(state = initState, action) {
  console.log("🚀 ~ TaskOkReucer ~ action:", action);
  switch (action.type) {
    case useActionTypes.CHANGE_NAME:
      // return state.update("user", (value) => {
      //   return value
      //     .set("age", action.payload.age)
      //     .set("name", action.payload.name);
      // });
      return state.mergeIn(["user"], action.payload);
    default:
      return state;
  }
}
export default TaskOkReucer;

// const obj6 = fromJS({ user: { name: "zfpx", age: 8 }, k: "v" });
// let obj7 = obj6.setIn(["user", "name"], "zfpx2");
// let obj8 = obj7.updateIn(["user", "age"], (x) => x + 1);
// let obj9 = obj8.mergeIn(["user"], { home: "北京" });
// console.log(obj6.toJS(), obj7, obj8, obj9.toJS());

// const obj = fromJS({
//   name: "zfpx",
//   age: 18,
//   address: {
//     city: "北京",
//     street: "中关村",
//   },
// });

// const obj2 = {
//   name: "李丽丽",
//   age: 45,
// };

// const obj3 = {
//   city: "上海",
//   street: "外滩",
// };

// const res1 = obj.merge(obj2);
// console.log("🚀 ~ res1:", res1.toJS());

// const res2 = obj.mergeIn(["address"], obj3);
// console.log("🚀 ~ res2:", res2.toJS());
