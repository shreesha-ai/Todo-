import React from "react";

function Todo({ task, index, deleteTodo }) {
  return (
    <li style={{ margin: "10px 0" }}>
      {task}
      <button
        onClick={() => deleteTodo(index)}
        style={{ marginLeft: "10px" }}
      >
        Delete
      </button>
    </li>
  );
}

export default Todo;
