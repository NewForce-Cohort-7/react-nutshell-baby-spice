//AUTHOR: JOEL DICK
//PURPOSE: DISPLAY FORM TO EDIT AN EVENT

import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editEvent, getEventById } from "../ApiManager.js"

export const EditEventForm = () => {

    // TODO: Provide initial state for event
    const [event, updateEvent] = useState({
        name: "",
        date: "",
        location: ""
    })

    const navigate = useNavigate()

      // TODO: What is the variable in which you stored the route parameter?
      const { eventId } = useParams()

        // TODO: Get event from API and update state
        useEffect(() => {
            getEventById(eventId)
                .then((eventArray) => {
                    updateEvent(eventArray)
                })
        }, [])


    const handleSaveButtonClick = (evt) => {
        evt.preventDefault()
            editEvent(event)
            .then(()=> {
                navigate("/")
            })
    }

    return <>
        <form className="eventform">
            <h2 className="eventform--title">Edit Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Event Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control event--input"
                        value={event?.name}
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
                        value={event?.location}
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
                        value={event?.date}
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
                onClick={(evt) => handleSaveButtonClick(evt)}
                className="btn btn-primary">
                Save Event
            </button>
        </form>
    </>
}