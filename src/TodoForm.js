import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      addTodo(value.trim());
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter new todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
