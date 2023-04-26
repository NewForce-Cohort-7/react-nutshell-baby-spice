import { useEffect, useState } from "react"
import { getFriendsById } from "../ApiManager.js"
import "./friends.css"
import { FriendSearch } from "./friendSearch.js"

export const FriendsList = () => {

    const [friends, setFriends] = useState([])
    const [showSearch, setSearch] = useState(false)

    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    //this fetch will return the relationships where the FRIEND id matches 
    useEffect(() => {
        getFriendsById(userObject.id)
            .then((eventsArray) => {
                setFriends(eventsArray)
            })
        }, []
    )

    return <section className="friends">

        <h2 className="friends--header">FRIENDS LIST</h2>

        {friends.map(friend => {
            return <div className="friend" key={`friend--${friend.userId}`}> {friend.user.username} </div>
        })}

        <button className="button" onClick={() => setSearch(true)}>Add Friends</button>

        { showSearch ? <FriendSearch /> : "" }
        
    </section>
}