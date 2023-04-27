import React from "react";
import { CompletedTasks } from "./CompletedTasks";
import { Todos } from "./Todos";

export const Task = ({
  task,
  onToggleCompleted,
  onEditTask,
  onDeleteTask,
}) => {
  const handleToggleCompleted = () => {
    onToggleCompleted(task.id, !task.completed)
  };

  const handleEditTask = () => {
    onEditTask(task.id, task.title, task.description, task.date);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <div key={task.id} className="task">
      <h3>Title:</h3>
      <h3>{task.title}</h3>
      <p>Description:</p>
      <p>{task.description}</p>
      <p>Date:</p>
      <p>{task.date}</p>
      <button onClick={handleToggleCompleted}>
        <>{task.completed ? <>Status:  Incomplete|<b>Complete</b></> : <>Status: <b>Incomplete</b>|Complete </>}

        </>
      </button>
      <button onClick={handleEditTask}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};
