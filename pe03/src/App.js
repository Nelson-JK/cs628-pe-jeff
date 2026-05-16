import { useState } from "react";
import "./App.css";

function TodoTask({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoTask
          key={index}
          todo={todo}
          onDelete={() => onDeleteTodo(index)}
        />
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
  const trimmed = task.trim();
  if (trimmed === "") return;

  setTodos([...todos, trimmed]);
  setTask("");
};

  const deleteTask = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task description"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <TodoList todos={todos} onDeleteTodo={deleteTask} />
    </div>
  );
}

export default App;