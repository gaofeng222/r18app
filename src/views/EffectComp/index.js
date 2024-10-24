import FullName from "./FullName";
import TodoList from "./TodoList.js";
import UseOnLine from "./UseOnLine.js";
import GoodsList from "./GoodList";
import { useState, useCallback, useEffect } from "react";
import ReportList from "./ReportList";
import UseOnlineStatus from "./useOnlineStatus1";
import UseDeferredValue from "./useDeferredValue";
function EffectComp() {
  const [msg, setMsg] = useState("Hello");
  const [count, setCount] = useState(0);
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

  // useEffect(async () => {
  //   const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const data = result.json();
  //   console.log("🚀 ~ useEffect ~ data:", data);
  //   return () => {};
  // }, []);
  useEffect(() => {
    const getData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await result.json();
      console.log("🚀 ~ useEffect ~ data:", data);
      return data;
    };
    getData();
    return () => {
      console.log(count);
    };
  }, [count]);
  const handleSubmit1 = () => {
    setCount(count + 1);
  };
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
      {count}
      <button onClick={handleSubmit1}>add</button>
    </div>
  );
}

export default EffectComp;
