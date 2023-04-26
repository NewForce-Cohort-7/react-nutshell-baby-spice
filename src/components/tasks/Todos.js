import { useState } from "react"
import { getTasks } from "../ApiManager"

export const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTasks()
      .then((eventsArray) => {
        setEvents(eventsArray)
      })
  }, []
  )

  return (

  )
}