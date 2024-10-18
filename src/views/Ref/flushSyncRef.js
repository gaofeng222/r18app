import { useState, useRef } from "react";
import { flushSync } from "react-dom";
function FlushSyncRef() {
  const [msgLists, setMsgList] = useState(["test0000"]);
  const [msg, setMsg] = useState("");
  const ulRef = useRef(null);
  const handleAdd = (e) => {
    e.preventDefault();
    flushSync(() => {
      setMsg("");
      setMsgList((prev) => {
        console.log(prev);
        return [...prev, msg];
      });
    });
    ulRef.current?.lastChild?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
    console.log("🚀 ~ handleAdd ~ ulRef.current:", ulRef.current.lastChild);
  };
  function handleChangeText(e) {
    setMsg(e.target.value);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your msg"
        value={msg}
        onChange={handleChangeText}
      />
      <button onClick={handleAdd}>添加</button>
      <hr />
      <ul
        style={{ height: "90px", border: "1px solid red", overflow: "auto" }}
        ref={ulRef}
      >
        {msgLists.map((item, index) => {
          return (
            <li key={index}>
              这是第{index}
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FlushSyncRef;
