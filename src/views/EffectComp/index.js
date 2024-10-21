import FullName from "./FullName";
import TodoList from "./TodoList.js";
import UseOnLine from "./UseOnLine.js";
import GoodsList from "./GoodList";
import { useState, useCallback } from "react";
import ReportList from "./ReportList";
import UseOnlineStatus from "./useOnlineStatus1";
import UseDeferredValue from "./useDeferredValue";
function EffectComp() {
  const [msg, setMsg] = useState("Hello");
  const data = [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Doe",
    },
    {
      id: 3,
      name: "Jane",
    },
    {
      id: 4,
      name: "Jake",
    },
  ];
  const handleInput = (e) => {
    setMsg(e.target.value);
  };
  const handleSubmit = useCallback(() => {
    console.log("submit", msg);
  }, []);

  // function handleSubmit(e) {
  //   console.log("submit", msg);
  // }

  return (
    <div>
      <h1>Effect Component</h1>
      {/* <FullName /> */}
      {/* <TodoList todos={data} filter={(x) => x.id % 2 == 0} /> */}
      {/* <UseOnLine /> */}
      {/* <input type="text" value={msg} onChange={handleInput} />
      <GoodsList onSubmit={handleSubmit} /> */}
      {/* <ReportList items={data} /> */}
      {/* <UseOnlineStatus /> */}
      <UseDeferredValue />
    </div>
  );
}

export default EffectComp;
