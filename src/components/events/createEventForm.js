//AUTHOR: JOEL DICK
//PURPOSE: DISPLAY FORM TO CREATE A NEW EVENT


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createEvent } from "../ApiManager.js"

export const CreateEventForm = () => {

    const [event, updateEvent] = useState({
        name: "",
        date: "",
        location: ""
    })
  
    const navigate = useNavigate()

    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()

        // TODO: Create the object to be saved to the API
        const eventToSendToAPI = {
            userId: userObject.id,
            name: event.name,
            date: event.date,
            location: event.location
        }

        // TODO: Perform the fetch() to POST the object to the API
        return createEvent(eventToSendToAPI)
        .then(()=> {
            navigate("/")
        })
    }

    return (
        <form className="eventform">
            <h2 className="eventform--title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Event Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control event--input"
                        placeholder="Name of the event"
                        value={event.name}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.name = evt.target.value
                                updateEvent(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Event Location:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control event--input"
                        placeholder="Location of the event"
                        value={event.location}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.location = evt.target.value
                                updateEvent(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Event Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control event--input"
                        value={event.date}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.date = evt.target.value
                                updateEvent(copy)
                            }
                        } />
                </div>
            </fieldset>
   
            <button 
                onClick={(event) => {handleSaveButtonClick(event)}}
                className="btn btn-primary">
                Save Event
            </button>

        </form>
    )
}