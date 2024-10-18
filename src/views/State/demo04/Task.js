import { useState, useContext } from "react";
import { TasksDispatchContext } from "./context";
function Task({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  let todoContent = "";
  function handleChangeText(e) {
    dispatch({ type: "changed", task: { id: task.id, text: e.target.value } });
  }

  function handleDeleteTask(id) {
    dispatch({ type: "deleted", task: { id } });
  }

  if (isEdit) {
    todoContent = (
      <span>
        <input type="text" value={task.text} onChange={handleChangeText} />
        <button onClick={() => setIsEdit(false)}>完成</button>
      </span>
    );
  } else {
    todoContent = (
      <span>
        <span>{task.text}</span>
        <button onClick={() => setIsEdit(true)}>编辑</button>
      </span>
    );
  }
  return (
    <li>
      {todoContent}
      <button onClick={() => handleDeleteTask(task.id)}>删除</button>
    </li>
  );
}

export default Task;
