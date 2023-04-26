import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { getChats } from "../ApiManager.js"
import "./chats.css"

export const ChatList = () => {
    const [chats, setChats] = useState([])
    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)
    useEffect(() => {
      getChats()
        .then((chatArray) => { setChats(chatArray) })
    }, [])
  
    return (
      <div className="chat--container">
        <h2>CHAT</h2>
        <article className="chats">
          {chats.map((chat) => (
            <section className="chat" key={`chat--${chat.id}`}>
            <div className="chatter">{chat.user.username}:</div>
              <Link to={`/messages/edit/${chat.id}`}>
                {chat.message}
              </Link>
              
            </section>
          ))}
        </article>
      </div>
    )
  }
  
  