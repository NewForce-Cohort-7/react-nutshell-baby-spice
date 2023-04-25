import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const ChatBox = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [chat, update] = useState({
        message: "",
        userId: 0

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

        const navigate = useNavigate()

    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
   
        //     "userId": 1,
        // "description": "Sunt pariatur et quidem hic voluptatem. Neque aliquam voluptas eos incidunt repellendus. Vero expedita non sit quaerat sit et eum. Quasi dolor voluptatem illum eum qui est expedita sequi accusamus.",
        // "emergency": false,
        // "dateCompleted": ""
        const ticketToSendToApi = {
            userId: userObject.id,
            message: chat.message
        }


        // TODO: Perform the fetch() to POST the object to the API
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketToSendToApi)
        })
        .then(response => response.json())
        .then(() => {
         navigate("/")  

        })
    }

    return (
        <form className="chatBox">
            <h2 className="chatBox__title">New Chat</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Message">Message:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="New Message"
                        value={chat.message}
                        onChange={
                            (evt) => {
                                const copy = {...chat}
                                copy.message = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
             onClick={
                (clickEvent) => handleSaveButtonClick(clickEvent)}            
            className="btn btn-primary">
                Submit Message
            </button>
        </form>
    )
}