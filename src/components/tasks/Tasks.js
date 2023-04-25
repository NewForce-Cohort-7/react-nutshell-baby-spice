import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getTasks } from "../ApiManager"

export const Tasks = () => {
  const [tasks, setTasks] = useState()
  const [filteredTasks, setFiltered] = useState([])


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


  return <>
    {
      <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
    }


    <h2>List of Tickets</h2>

    <article className="tickets">
      {
        filteredTasks.map(
          (task) => {
            return <section className="task" key={`task--${tasks.id}`}>
              <header>{tasks.description}</header>
            </section>
          }
        )
      }
    </article>
  </>
}