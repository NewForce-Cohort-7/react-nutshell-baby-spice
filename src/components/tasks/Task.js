import React from "react";

export const Task = ({
  task,
  onToggleCompleted,
  onEditTask,
  onDeleteTask,
}) => {
  const handleToggleCompleted = () => {
    onToggleCompleted(task.id, !task.completed);
  };

  const handleEditTask = () => {
    onEditTask(task.id, task.title, task.description);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <div key={task.id} className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleToggleCompleted}>
        {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <button onClick={handleEditTask}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
};
