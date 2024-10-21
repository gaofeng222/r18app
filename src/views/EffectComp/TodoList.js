import { useState, useMemo } from "react";
function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");
  const visibleTodos = useMemo(
    () => getFilteredTodos(todos, filter),
    [todos, filter]
  );
  return (
    <>
      <ul>
        {visibleTodos.map((todo) => {
          return <li>{todo.name}</li>;
        })}
      </ul>
      {newTodo}
      <br />
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
    </>
  );
}

function getFilteredTodos(todos, filter) {
  console.log("🚀 ~ getFilteredTodos ~ todos:", todos);
  return todos.filter((todo) => {
    return filter.call(null, todo);
  });
}
export default TodoList;
