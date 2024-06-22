import React from "react";

const TodoItem = ({ todo, toggleTodoState, index }) => {
  return (
    <li
      className={todo.done ? "done" : ""}
      onClick={() => toggleTodoState(index)}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
