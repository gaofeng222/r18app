import { TasksContext, TasksDispatchContext } from "./context";
import { useReducer } from "react";
import { initialTasks } from "./taskListsData";
import { taskReucers } from "./tasksReducer";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
function State() {
  const [tasks, dispatch] = useReducer(taskReucers, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export default State;
