import { Outlet, Route, Routes } from "react-router-dom"

import "./appViews.css"

import { TaskContainer } from "../tasks/TaskContainer"
import { ArticleList } from "../articles/ArticleList"
import { Events } from "../events/events.js"
import { CreateEventForm } from "../events/createEventForm.js"
import { EditEventForm } from "../events/editEventForm.js"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleEdit } from "../articles/ArticleEdit"
import { ChatBox } from "../chat/ChatBox"
import { ChatEdit } from "../chat/ChatEdit"
import { ChatList } from "../chat/ChatList"


export const ApplicationViews = () => {

  return (
    <Routes>
      <Route path="/" element={

        <div className="main--container">
          <div className="section--left">
            <div id="tasks" className="tasks--container"><TaskContainer /></div>
          </div>

          <div className="section--middle">
            <div id="events" className="events--container">
              <Events />
            </div>
            <div id="news" className="news--container"><ArticleList /></div>


          </div>

          <div className="section--right">
            <div id="chat" className="messages--container"><ChatBox /> <ChatList /> </div>
          </div>

          <Outlet />
        </div>
      }>



      </Route>

      <Route path="/event/create" element={<CreateEventForm />}></Route>
      <Route path="/event/edit/:eventId" element={<EditEventForm />}></Route>
      <Route path="article/create" element={<ArticleForm />} />
      <Route path="article/edit/:articleId" element={<ArticleEdit />} />
      <Route path="/messages/create" element={<ChatBox />}></Route>
      <Route path="/messages/edit/:chatId" element={<ChatEdit />}></Route>

    </Routes>
  )
}