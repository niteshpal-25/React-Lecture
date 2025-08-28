import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} text={task.text} done={task.done} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
