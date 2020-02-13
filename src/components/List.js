import React from "react";
import Item from "./Item";

const List = ({ todos, markComplete, remove }) => {
  return (
    <div className="list">
      {todos.length === 0 ? (
        <p className="message">You don't have any todos</p>
      ) : (
        todos.map(todo => (
          <Item
            markComplete={markComplete}
            remove={remove}
            key={todo.id}
            todo={todo}
          />
        ))
      )}
    </div>
  );
};

export default List;
