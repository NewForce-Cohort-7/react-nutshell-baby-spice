import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export const ChatList = () => {
    const [chats, setChats] = useState([])
    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)
    useEffect(() => {
      fetch(`http://localhost:8088/messages`)
        .then(response => response.json())
        .then((chatArray) => { setChats(chatArray) })
    }, [])
  
    return (
      <>
        <h2>List of Messages</h2>
        <article className="chats">
          {chats.map((chat) => (
            <section className="chat" key={`chat--${chat.id}`}>
              <Link to={`/messages/edit/${chat.id}`}>
                {chat.message}
              </Link>
              
            </section>
          ))}
        </article>
      </>
    )
  }
  
  