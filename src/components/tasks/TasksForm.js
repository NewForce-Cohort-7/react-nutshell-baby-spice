import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const TasksForm = () => {
  const [task, update] = useState({
    title: "",
    description: ""
  })

  const navigate = useNavigate()

  const localActiveUser = localStorage.getItem("activeUser")
  const activeUserObject = JSON.parse(localActiveUser)

  const handleSaveButtonClick = (event) => {
    event.preventDefault()

    const taskToSendToAPI = {
      userId: activeUserObject.id,
      title: task.title,
      description: task.description,
      dateCompleted: ""
    }

    return fetch('http://localhost:8088/tasks', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(taskToSendToAPI)
    })
      .then(res => res.json())
      .then(() => {
        navigate("/")
      })
  }

  return (
    <form className="tasksForm">
      <h2 className="tasksForm__title">New Service Task</h2>
      <fieldset>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            required autoFocus
            type="text"
            className="taskForm-control"
            placeholder="Add a name for your task"
            value={task.title}
            onChange={(evt) => {
              const copyTitleState = { ...task }
              copyTitleState.title = evt.target.value
              update(copyTitleState)
            }} />
          <label htmlFor="description">Description:</label>
          <input
            required autoFocus
            type="text"
            className="taskForm-control"
            placeholder="Brief description of task"
            value={task.description}
            onChange={(evt) => {
              const copyDescriptionState = { ...task }
              copyDescriptionState.description = evt.target.value
              update(copyDescriptionState)
            }} />
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => { handleSaveButtonClick(clickEvent) }
        }
        className="btn btn-primary">
        Submit Task
      </button>
    </form>

  )
}