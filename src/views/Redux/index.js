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
      {counter}
      <DemoA />
      <DemoB />
      <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
    </div>
  );
}

export default Redux;
