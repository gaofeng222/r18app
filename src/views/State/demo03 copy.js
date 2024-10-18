import { useState, useReducer } from "react";
let nextId = 3;
const initialTasks = [
  { id: 0, text: "参观卡夫卡博物馆", done: true },
  { id: 1, text: "看木偶戏", done: false },
  { id: 2, text: "列侬墙图片", done: false },
];

function AddTask({ handleAdd }) {
  let [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setMsg(e.target.value);
  };
  return (
    <>
      <input type="text" value={msg} onChange={handleChange} />
      <button
        onClick={() => {
          setMsg("");
          handleAdd(msg);
        }}
      >
        添加
      </button>
    </>
  );
}

function TaskList({ tasks, onChange, onDeleteTask }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleChangeValue = (value) => {};
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task} onChange={onChange} onDeleteTask={onDeleteTask} />
          </li>
        );
      })}
    </ul>
  );
}

function Task({ task, onChange, onDeleteTask }) {
  const [isEdit, setIsEdit] = useState(false);
  let todoContent = "";
  if (isEdit) {
    todoContent = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEdit(false)}>完成</button>
      </>
    );
  } else {
    todoContent = (
      <>
        <span>{task.text}</span>
        <button onClick={() => setIsEdit(true)}>编辑</button>
      </>
    );
  }
  return (
    <div>
      {todoContent}
      <button onClick={() => onDeleteTask(task.id)}>删除</button>
    </div>
  );
}

function State() {
  const [tasks, setTasks] = useState(initialTasks);
  function handleAdd(value) {
    const todos = [];
    if (value) {
      todos.push({ id: nextId++, text: value, done: false });
    }
    setTasks([...tasks, ...todos]);
  }
  function handleChange(value) {
    const nowData = tasks.map((item) => {
      if (item.id === value.id) {
        return value;
      } else {
        return item;
      }
    });
    setTasks(nowData);
  }
  function handleDelete(id) {
    const nowData = tasks.filter((item) => item.id !== id);
    setTasks(nowData);
  }
  return (
    <>
      <AddTask handleAdd={handleAdd} />
      <TaskList
        tasks={tasks}
        onChange={handleChange}
        onDeleteTask={handleDelete}
      />
    </>
  );
}

export default State;
