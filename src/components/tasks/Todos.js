import { useState, useEffect } from "react";
import { createTask, editTask } from "../ApiManager";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { ModifyTaskForm } from "./ModifyTaskForm";
import { getTodos } from "../ApiManager"

const localActiveUser = localStorage.getItem("activeUser");
const activeUserObject = JSON.parse(localActiveUser);

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editingTodos, setEditingTodos] = useState(null);

  useEffect(() => {
    getTodos()
      .then((todosArray) => {
        setTodos(todosArray)
      })
  }, []
  )

  const handleToggleCompleted = (id, completed) => {
    const task = todos.find((task) => task.id === id);
    const updatedTask = { ...task, completed };
    editTask(updatedTask).then(() => {
      setTodos((currentTodos) =>
        currentTodos.map((task) => (task.id === id ? updatedTask : task))
      );
    });
  };

  const handleEditTask = (id) => {
    setEditingTodos(id);
  };

  const handleSaveTask = (id, title, description, date) => {
    const task = todos.find((task) => task.id === id);
    const updatedTask = { ...task, title, description, date };
    editTask(updatedTask).then(() => {
      setTodos((currentTodos) =>
        currentTodos.map((task) => (task.id === id ? updatedTask : task))
      );
      setEditingTodos(null);
    });
  }

  const handleCancelEdit = () => {
    setEditingTodos(null);
  };

  const handleDeleteTask = (id) => {
    fetch(`http://localhost:8088/tasks/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTodos((currentTodos) => currentTodos.filter((task) => task.id !== id));
    });
  };

  return (
    <>
      <h2>List of completed tasks</h2>
      {editingTodos === null ? (
        <article className="todos">
          {todos.map((task) => (
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
          task={todos.find((task) => task.id === editingTodos)}
          onCancel={handleCancelEdit}
          onSave={handleSaveTask}
        />
      )}
    </>
  )
}