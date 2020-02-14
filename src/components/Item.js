import React from "react";

const Item = ({ todo, markComplete, remove }) => {
  const getStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  return (
    <div className="todo">
      <label className="todo-title">
        <input type="checkbox" onChange={() => markComplete(todo.id)} />
        <p style={getStyle()}>{todo.title}</p>
      </label>
      <button className="removeTodo" onClick={() => remove(todo.id)}>
        X
      </button>
    </div>
  );
};

export default Item;
