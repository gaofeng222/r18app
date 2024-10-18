import { useState, useContext } from "react";
import { TasksDispatchContext } from "./context";
let nextId = 3;

function AddTask() {
  let [msg, setMsg] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  const handleSubmit = () => {
    if (!msg) return;
    setMsg("");
    dispatch({
      type: "added",
      task: {
        id: nextId++,
        text: msg,
        done: false,
      },
    });
  };
  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  return (
    <>
      <input type="text" value={msg} onChange={handleChange} />
      <button onClick={handleSubmit}>添加</button>
    </>
  );
}

export default AddTask;
