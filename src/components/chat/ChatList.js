import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
//The React library provides you with a function named useState() to store the state in a component. The function returns an array. The array contains the intial state value at index 0 and a function that modifies the state at index 1. 
export const ChatList = ({ searchTermState }) => {
    const [chats, setChats] = useState([]) // naming variables for the chats
    const navigate = useNavigate()
    const localUser = localStorage.getItem("activeUser") //retrieving user from storage
    const userObject = JSON.parse(localUser) //naming object that is the pars'd user from local storage
   
    
    //useEffect allows you to observe state and then tell it to do something based off of what it observes
    useEffect(
        () => {
            fetch(`http://localhost:8088/messages`) //fetch from this api
            .then(response => response.json()) //converts the response to json
            .then((chatArray) => {setChats(chatArray)}) //creates chatArray then uses a function to set the value of it
        },
        [] // When this array is empty, you are observing initial component state
    ) 



    // this sends the information to html 
    return <> 
  
    <h2>List of Messages</h2> 
    <article className="chats"> 
    { 
    
    //this maps through each filtered chat then whenever chat is used it sneds the information in the function to html
    chats.map(
            (chat) => {
                return <section className="chat" key={`chat--${chat.userId}`}>

<section>{chat.message}</section>

                </section>
            }

        )} 
        </article>
    </>

}
