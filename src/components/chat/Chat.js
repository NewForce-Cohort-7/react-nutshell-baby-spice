import { useEffect, useState } from "react"
import { getChats } from "../ApiManager.js"
import { useNavigate } from "react-router-dom"


export const Chats = () => {

    const [chats, setChats] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getChats()
            .then((chatsArray) => {
                setChats(chatsArray)
            })
        }, []
    )

    return <article className="chats">

        {
            chats.map(chat => {

                return <section className="chat" key={`chat--${chat.id}`}>
                            <div className="chat--name">
                                <a href={`/chat/edit/${chat.id}`} title="Click to edit">{chat.messages}</a>
                            </div>
                            <div className="chat--message">New Message: {chat.messages} </div>
                            
                        </section>
            })

        }

        <button onClick={() => navigate("/messages/create")}>Add Message</button>

    </article>

    
    
}
