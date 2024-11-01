import { fromJS } from "immutable";
import { delay } from "../../utils";
const initstate = fromJS({
  list: [],
  count: 100,
});

function storeReducers(state = initstate, action) {
  console.log("🚀 ~ storeReducers ~ action:", action);
  switch (action.type) {
    case "ADD":
      return state.updateIn(["count"], (n) => n + action.value);
    case "MINUS":
      return state.updateIn(["count"], (n) => n - action.value);
    default:
      return state;
  }
}

export async function handleAdd() {
  await delay(2000);
  const data = await Promise.resolve(20);
  return { type: "ADD", value: data };
}

export async function handleMinus() {
  await delay(2000);
  const data = await Promise.resolve(20);

  return { type: "MINUS", value: data };
}

export default storeReducers;
