import { useState, useEffect } from "react"
import { getTasks } from "../ApiManager"
import { useNavigate } from "react-router-dom"

export const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [filteredTasks, setFiltered] = useState([])

  const localActiveUser = localStorage.getItem("activeUser")
  const activeUserObject = JSON.parse(localActiveUser)

  const navigate = useNavigate()

  useEffect(
    () => {
      getTasks()
        .then((tasksArray) => {
          setTasks(tasksArray)
        })
    },
    []
  )

  useEffect(
    () => {
      const myTasks = tasks.filter(task => task.userId === activeUserObject.id)
      setFiltered(myTasks)
    },
    [activeUserObject.id, tasks]
  )


  if (tasks[0]) {
    return <>
      <h2>List of Tasks</h2>
      <article className="tasks">
        {
          filteredTasks.map(
            (task) => {
              return <section className="task" key={`task--${tasks.id}`}>
                <ul>
                  <li>{task.title}</li>
                  <li>{task.description}</li>
                </ul>
              </section>
            }
          )
        }
      </article>
    </>
  }
}