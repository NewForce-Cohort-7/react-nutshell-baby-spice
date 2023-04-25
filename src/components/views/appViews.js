import { Outlet, Route, Routes } from "react-router-dom"
import "./appViews.css"
import { ChatBox } from "../chat/ChatBox"
import { ChatList } from "../chat/ChatList"

export const ApplicationViews = () => {

    return (
        <Routes>
            <Route path="/" element={

                <div className="main--container">
                    <div className="section--left">
                        <div id="tasks" className="tasks--container">TASKS GO HERE</div>
                    </div>

                    <div className="section--middle">
                        <div id="events" className="events--container">EVENTS GO HERE</div>
                        <div id="news" className="news--container">NEWS GO HERE</div>
                    </div>

                    <div className="section--right">
                        <div id="chat" className="chat--container"><ChatBox /> <ChatList /> </div>
                    </div>

                    <Outlet/>
                </div>
            }>

            </Route>
        </Routes>
    )
}