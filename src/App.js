import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { text: "Learn JavaScript", done: false },
    { text: "Build a todo app", done: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const toggleTodoState = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodoState={toggleTodoState} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
