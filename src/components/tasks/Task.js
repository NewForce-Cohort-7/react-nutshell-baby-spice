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
      <section className="taskCard">
        <h3>Title:</h3>
        <h3>{task.title}</h3>
        <p>Description:</p>
        <p>{task.description}</p>
        <p>Date:</p>
        <p>{task.date}</p>
      </section>
      <section className="taskButtons">
        <article className="editRemove">
          <button id="edit" onClick={handleEditTask}>Edit</button>
          <button id="remove" onClick={handleDeleteTask}>Delete</button>
        </article>
        <button className="completeToggle" onClick={handleToggleCompleted}>
          <>{task.completed ? <>Incomplete|<b>Complete</b></> : <><b>Incomplete</b>|Complete </>}

          </>
        </button>
      </section>
    </div>
  );
};
