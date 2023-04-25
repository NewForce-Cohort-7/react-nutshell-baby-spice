import { Outlet, Route, Routes } from "react-router-dom"
import { Tasks } from "../tasks/Tasks"
import { TasksForm } from "../tasks/TasksForm"
import "./appViews.css"
import { Events } from "../events/events.js"
import { CreateEventForm } from "../events/createEventForm.js"
import { EditEventForm } from "../events/editEventForm.js"

export const ApplicationViews = () => {

  return (
    <Routes>
      <Route path="/" element={

        <div className="main--container">
          <div className="section--left">
            <div id="tasks" className="tasks--container"><Tasks /><TasksForm /></div>
          </div>

          <div className="section--middle">
            <div id="events" className="events--container"> 
                            <Events/> 
                        </div>
            <div id="news" className="news--container">NEWS GO HERE</div>
          </div>

          <div className="section--right">
            <div id="chat" className="chat--container">CHAT GO HERE</div>
          </div>

          <Outlet />
        </div>
      }>

            </Route>

            <Route path="/event/create" element={<CreateEventForm />}></Route>
            <Route path="/event/edit/:eventId" element={<EditEventForm />}></Route>

        </Routes>
    )
}