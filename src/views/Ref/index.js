import { useState, useRef, useEffect } from "react";
import TimeComp from "./TimeComp";
import ButtonOff from "./ButtonOff";
import Dom from "./Dom";
import MyInputRef from "./MyRef";
import FlushSyncRef from "./flushSyncRef";
import CompRef from "./CompRef";
function Ref() {
  console.log("Ref");
  useEffect(() => {
    window.addEventListener("storage", (e) => {
      console.log("storage", e);
    });
    return () => {};
  }, []);

  return (
    <>
      <h1>Ref</h1>
      {/* <StateComp /> */}
      <RefComp />
    </>
  );
}

function StateComp() {
  const [count, setCount] = useState(0);
  console.log("StateComp", count);
  return (
    <>
      <h1>State Comp</h1>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </>
  );
}

function RefComp() {
  const count = useRef(0);
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current?.focus();
    // console.log(inputRef.current.value, "inputRef.current");
    // inputRef.current.style.color = "red";

    inputRef.current.focus();
    console.log("🚀 ~ handleClick ~ inputRef.current:", inputRef.current);
    inputRef.current.inputRef.current.style.color = "red";
  }
  return (
    <>
      <h1>Ref Comp</h1>
      {/* <button onClick={() => alert(++count.current)}>
        Click {count.current}
      </button>
      <hr />
      <TimeComp />
      <hr />
      <ButtonOff />
      <hr />
      <Dom />
      <hr />
      <MyInputRef ref={inputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
      <hr /> */}
      {/* <FlushSyncRef /> */}
      <CompRef />
    </>
  );
}

export default Ref;
