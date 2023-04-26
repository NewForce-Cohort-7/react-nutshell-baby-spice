import { useState, useEffect } from "react";
import { getTasks, createTask, editTask } from "../ApiManager";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { ModifyTaskForm } from "./ModifyTaskForm";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFiltered] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const localActiveUser = localStorage.getItem("activeUser");
  const activeUserObject = JSON.parse(localActiveUser);

  useEffect(() => {
    getTasks().then((tasksArray) => {
      setTasks(tasksArray);
    });
  }, []);

  useEffect(() => {
    const myTasks = tasks.filter((task) => task.userId === activeUserObject.id);
    setFiltered(myTasks);
  }, [activeUserObject.id, tasks]);

  const handleAddTask = (taskObject) => {
    const newTaskObject = { ...taskObject, userId: activeUserObject.id };
    createTask(newTaskObject).then((createdTask) => {
      setTasks((currentTasks) => [...currentTasks, createdTask]);
    });
  };

  const handleToggleCompleted = (id, completed) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, completed };
    editTask(updatedTask).then(() => {
      setTasks((currentTasks) =>
        currentTasks.map((task) => (task.id === id ? updatedTask : task))
      );
    });
  };

  const handleEditTask = (id) => {
    setEditingTask(id);
  };

  const handleSaveTask = (id, title, description, date) => {
    const task = tasks.find((task) => task.id === id);
    const updatedTask = { ...task, title, description, date };
    editTask(updatedTask).then(() => {
      setTasks((currentTasks) =>
        currentTasks.map((task) => (task.id === id ? updatedTask : task))
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
      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    });
  };

  return (
    <>
      <h2>List of Tasks</h2>
      {editingTask === null ? (
        <TaskForm onAddTask={(taskObject) => handleAddTask(taskObject)} />
      ) : (
        <ModifyTaskForm
          task={tasks.find((task) => task.id === editingTask)}
          onCancel={handleCancelEdit}
          onSave={handleSaveTask}
        />
      )}
      <article className="tasks">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleCompleted={handleToggleCompleted}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
        ))}
      </article>
    </>
  );
};
