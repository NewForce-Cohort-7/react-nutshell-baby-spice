//AUTHOR: JOEL DICK
//PURPOSE: DISPLAY A LIST OF EVENTS IN THE DATABASE

import { useEffect, useState } from "react"
import { getEvents } from "../ApiManager.js"
import { useNavigate } from "react-router-dom"
import "./events.css"

export const Events = () => {

  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getEvents()
      .then((eventsArray) => {
        setEvents(eventsArray)
      })
  }, []
  )

  return <article className="events">

    {
      events.map(event => {

        return <section className="event" key={`event--${event.id}`}>
          <div className="event--name">
            <a href={`/event/edit/${event.id}`} title="Click to edit">{event.name}</a>
          </div>
          <div className="event--location">Location: {event.location} </div>
          <div className="event--date">Date: {event.date} </div>
        </section>
      })

    }

    <button onClick={() => navigate("/event/create")}>Add Event</button>

  </article>



}
