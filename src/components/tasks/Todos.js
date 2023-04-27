import { useState, useEffect } from "react";
import { editTask } from "../ApiManager";
import { Task } from "./Task";
import { ModifyTaskForm } from "./ModifyTaskForm";
import { getTodos } from "../ApiManager"
import { AddTaskButton } from "./AddTaskButton";

export const Todos = (toggleShowCompleted, toggleShowTodos, toggleShowTasks) => {
  const [todos, setTodos] = useState([]);
  const [editingTodos, setEditingTodos] = useState(null);

  useEffect(() => {
    getTodosFunction()
  }, []
  )

  const getTodosFunction = () => {
    getTodos()
      .then((todosArray) => {
        setTodos(todosArray)
      })
  }

  const handleToggleCompleted = (id, completed) => {
    const task = todos.find((task) => task.id === id);
    const updatedTask = { ...task, completed };
    editTask(updatedTask)
      .then(getTodosFunction())
      .then(() => {
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
      <h2>Todos</h2>
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
          <>
            <AddTaskButton label="Add Task" onClick={() => toggleShowTasks()} />
            <AddTaskButton label="Add Todo" onClick={() => toggleShowTodos()} />
            <AddTaskButton label="Completed" onClick={() => toggleShowCompleted()} />
          </>
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