import React from "react";

function TaskItem({ text, done }) {
  return (
    <div>
      <li>
        {text}
        {done ? <span>✅</span> : <span>⏳</span>}
      </li>
    </div>
  );
}

export default TaskItem;
