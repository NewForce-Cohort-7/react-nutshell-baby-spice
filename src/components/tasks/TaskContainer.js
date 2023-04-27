import { useState } from "react";
import { Tasks } from "./Tasks";
import { AddTaskButton } from "./AddTaskButton";
import { CompletedTasks } from "./CompletedTasks";
import { Todos } from "./Todos";

export const TaskContainer = () => {
  const [showTasks, setShowTasks] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleShowTasks = () => {
    setShowTasks(true);
    setShowTodos(false);
    setShowCompleted(false);
  };

  const toggleShowTodos = () => {
    setShowTasks(false);
    setShowTodos(true);
    setShowCompleted(false);
  };

  const toggleShowCompleted = () => {
    setShowTasks(false);
    setShowTodos(false);
    setShowCompleted(true);
  };

  return (
    <>
      {showTasks ? (
        <Tasks toggleShowCompleted={toggleShowCompleted} toggleShowTodos={toggleShowTodos} toggleShowTasks={toggleShowTasks} />
      )
        : showTodos ? (
          <Todos toggleShowCompleted={toggleShowCompleted} toggleShowTodos={toggleShowTodos} toggleShowTasks={toggleShowTasks} />
        )
          : showCompleted ? (
            <CompletedTasks toggleShowCompleted={toggleShowCompleted} toggleShowTodos={toggleShowTodos} toggleShowTasks={toggleShowTasks} />
          ) : (
            <>
              <AddTaskButton label="Add Task" onClick={() => toggleShowTasks()} />
              <AddTaskButton label="Add Todo" onClick={() => toggleShowTodos()} />
              <AddTaskButton label="Completed" onClick={() => toggleShowCompleted()} />
            </>
          )}
    </>
  );
};
