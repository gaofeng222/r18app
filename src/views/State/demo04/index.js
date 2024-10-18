import AddTask from "./AddTask";
import TaskList from "./TaskList";
import TasksProvider from "./context";
function State() {
  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default State;
