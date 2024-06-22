import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodoState }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodoState={toggleTodoState}
        />
      ))}
    </ul>
  );
};

export default TodoList;
