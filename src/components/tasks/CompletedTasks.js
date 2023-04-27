import { useState, useEffect } from "react";
import { editTask } from "../ApiManager";
import { Task } from "./Task";
import { ModifyTaskForm } from "./ModifyTaskForm";
import { getCompletedTasks } from "../ApiManager"

export const CompletedTasks = ({ toggleShowCompleted, toggleShowTodos, toggleShowTasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    getCompletedFunction()
  }, []
  )

  const getCompletedFunction = () => {
    getCompletedTasks()
      .then((completedArray) => {
        setCompletedTasks(completedArray)
      })
  }

  const handleToggleCompleted = (id, completed) => {
    const task = completedTasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed };
    editTask(updatedTask)
      .then(getCompletedFunction())
      .then(() => {
        setCompletedTasks((currentCompletedTasks) =>
          currentCompletedTasks.map((task) => (task.id === id ? updatedTask : task))
        );
      })
  };

  const handleEditTask = (id) => {
    setEditingTask(id);
  };

  const handleSaveTask = (id, title, description, date) => {
    const task = completedTasks.find((task) => task.id === id);
    const updatedTask = { ...task, title, description, date };
    editTask(updatedTask).then(() => {
      setCompletedTasks((currentCompletedTasks) =>
        currentCompletedTasks.map((task) => (task.id === id ? updatedTask : task))
      );
      setEditingTask(null);
    });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    fetch(`http://localhost:8088/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      setCompletedTasks((currentCompletedTasks) => currentCompletedTasks.filter((task) => task.id !== id));
    });
  };

  return (
    <>
      <h2>Completed Tasks</h2>
      {editingTask === null ? (
        <article className="completedTasks">
          {completedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleCompleted={handleToggleCompleted}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </article>
      ) : (
        <ModifyTaskForm
          task={completedTasks.find((task) => task.id === editingTask)}
          onCancel={handleCancelEdit}
          onSave={handleSaveTask}
        />
      )}
    </>
  )
}