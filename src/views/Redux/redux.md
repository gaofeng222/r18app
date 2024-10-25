## 新建 Redux，创建数据仓库

- 根目录下面的 store 文件夹下面新建 CounterReducer.js

```js
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
```

- store 文件夹下面新建 index.js

```js
import { createStore } from "redux";

import { CounterReducer } from "./CounterReducer";

let store = createStore(CounterReducer);

store.subscribe(() => console.log(store.getState()));

export default store;
```

## 组件内部使用 Redux

- 子组件 DemoA.js

```js
import store from "../../store";
function DemoA() {
  const count = store.getState().counter;
  return (
    <div>
      <p> Demo A count: {count}</p>
    </div>
  );
}
export default DemoA;
```

- 子组件 DemoB.js

```js
import store from "../../store";

function DemoB() {
  const { userInfo, counter } = store.getState();
  return (
    <div>
      <p>Demo B</p>
      <div>
        <span>name: {userInfo.name}</span> <br />
        <span>age: {userInfo.age}</span>
        <span>count:{counter}</span>
      </div>
      <button onClick={() => store.dispatch({ type: "ADD" })}>add count</button>
    </div>
  );
}
export default DemoB;
```

- 父组件 index.js

```js
import DemoA from "./DemoA";
import DemoB from "./DemoB";
import store from "../../store/index";
import { useEffect, useState } from "react";
function Redux() {
  const [counter, setCount] = useState(store.getState().counter);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      console.log("aaaa");
      setCount(store.getState().counter);
    });
    return () => {
      unsubscribe();
    };
  }, [counter]);
  return (
    <div>
      Redux
      <hr />
      parent count:{counter}
      <DemoA />
      <DemoB />
    </div>
  );
}

export default Redux;
```
