import { useEffect, useState } from "react"
import { deleteFriend, getFriendsByFriendId } from "../ApiManager.js"
import "./friends.css"
import { FriendSearch } from "./friendSearch.js"

export const FriendsList = () => {

    const [friends, setFriends] = useState([])
    const [showSearch, setSearch] = useState(false)

    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    //this fetch will return the relationships where the FRIEND id matches 
    useEffect(() => {
        getFriendsByFriendId(userObject.id)
            .then((eventsArray) => {
                setFriends(eventsArray)
            })
        }, []
    )

    return <section className="friends">

        <h2 className="friends--header">FRIENDS LIST</h2>

        {friends.map(friend => {
            return <div className="friend" key={`friend--${friend.userId}`}> {friend.user.username.toUpperCase()}     
                        <button className="button--delete" id={`delete--${friend.id}`} onClick={(event) => {
                            const [,grabbedId] = event.target.id.split("--")
                            const relationshipId = parseInt(grabbedId)

                            //ALSO HAVE TO DELETE RELATIONSHIP *BEFORE* THE CURRENT, SO SUBTRACT 1 FROM ID AND ALSO DELETE THIS RELATIONSHIP
                            const otherId = relationshipId - 1
                            deleteFriend(relationshipId)
                            .then(deleteFriend(otherId))
                            .then(window.location.reload())

                        }} >remove</button>
            </div>
        })}

        <button className="button" onClick={() => {showSearch ? setSearch(false) : setSearch(true)}}>Add Friends</button>

        { showSearch ? <FriendSearch /> : "" }
        
    </section>
}