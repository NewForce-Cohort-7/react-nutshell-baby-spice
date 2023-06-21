//AUTHOR:Aaron Dean
//Purpose: A form to edit messages


import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getChatById, editChat  } from "../ApiManager"

export const ChatEdit = () => {
    const [chat, setChat] = useState({ message: "", userId: 0 })
    const { chatId } = useParams()
    const navigate = useNavigate()
  
    useEffect(() => {
      getChatById(chatId).then((response) => {
        setChat(response)
      })
    }, [chatId])
  
    const handleSaveButtonClick = (evt) => {
      evt.preventDefault()
      editChat(chat).then(() => {
        navigate("/")
      }) 
      console.log(chatId)
    }
  
    return (
      <form className="chatBox">
        <h2 className="chatBox__title">Edit Chat</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="Message">Message:</label>
            <input
              required
              autoFocus
              type="text"
              className="form-control"
              placeholder="New Message"
              value={chat.message}
              onChange={(evt) => {
                setChat({ ...chat, message: evt.target.value })
              }}
            />
          </div>
        </fieldset>
        <button
          onClick={(evt) => handleSaveButtonClick(evt)}
          className="button"
        >
          Save Edited Message
        </button>
      </form>
    )
  }
  