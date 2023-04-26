import { useState } from "react";
import { Tasks } from "./Tasks";
import { AddTaskButton } from "./AddTaskButton";

export const TaskContainer = () => {
  const [showTasks, setShowTasks] = useState(false);

  const toggleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <>
      {showTasks ? (
        <>
          <Tasks />
        </>
      ) : (
        <AddTaskButton label="Add Task" onClick={() => toggleShowTasks()} />
      )}
    </>
  );
};
