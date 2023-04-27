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
    setShowTasks(!showTasks);
  };

  const toggleShowTodos = () => {
    setShowTodos(!showTodos);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <>
      {showTasks ? (
        <Tasks />
      )
        : showTodos ? (
          <Todos />
        )
          : showCompleted ? (
            <CompletedTasks />
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
