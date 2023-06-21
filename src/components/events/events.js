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

    const getMonthName = (monthNum) => {
        const date = new Date()
        date.setMonth(monthNum - 1)
        return date.toLocaleString('en-US', { month: 'long' })
    }

    const createEventList = (eventsArray) => {

        return eventsArray.map(singleEvent => {

            return <section className="event" key={`event--${singleEvent.id}`}>
                        <div className="event--name bg-blue-200">
                            <a href={`/event/edit/${singleEvent.id}`} title="Click to edit">{singleEvent.name}</a>
                        </div>
                        <div className="event--location bg-blue-200">Location: {singleEvent.location} </div>
                        <div className="event--date bg-blue-200">Date: {singleEvent.date} </div>
                    </section>
        })
    }

    const eventsByMonth = () => {

        const jsxArray = []
        
        for(let i = 1; i < 13; i++){

            const monthlyEvents = []
            let eventCount = 0
            events.forEach(event => {

                const [,eventMonth] = event.date.split("-")
                if(parseInt(eventMonth) === i){
                    monthlyEvents.push(event)
                    eventCount++
                }
            })

            if(eventCount !== 0){
                jsxArray.push(
                <div className="event--list" key={`events--${i}`}>
                    <h3>{getMonthName(i)} ({eventCount})</h3>
                    <div>{createEventList(monthlyEvents)}</div>
                </div>
                )
            }
        }

        return jsxArray
    }
    


    

    return <article className="events">

        {eventsByMonth()}

        <button className="button" onClick={() => navigate("/event/create")}>Add Event</button>

  </article>



}
