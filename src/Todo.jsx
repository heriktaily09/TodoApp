import React from "react";
import { ImCross } from "react-icons/im";
function Todo({ id, title, completed, toggleCompleted, removeTodo }) {
  return (
    <div className="todo">
      {/* <p>Compelted: {completed ? "true" : "false"}</p> */}
      <div className="todo-title">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <p className={`${completed ? "completed" : ""}`}>{title}</p>
      </div>
      <div className="cross-btn" onClick={() => removeTodo(id)}>
        <ImCross />
      </div>
    </div>
  );
}

export default Todo;
