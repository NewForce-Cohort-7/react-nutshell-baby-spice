import { useState } from "react"
import { getCompletedTasks } from "../ApiManager"

export const CompletedTasks = () => {
  const [completed, setCompleted] = useState([])

  

  return <>
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
}