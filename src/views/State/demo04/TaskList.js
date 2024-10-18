import { useState, useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./context";

function TaskList() {
  const [isEdit, setIsEdit] = useState(false);
  const tasks = useContext(TasksContext);
  const handleChangeValue = (value) => {};
  return (
    <ul>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </ul>
  );
}

export default TaskList;
