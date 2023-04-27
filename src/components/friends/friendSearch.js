import { useEffect, useState } from "react"
import { addFriend, getUserFriends } from "../ApiManager.js"
import { Link } from "react-router-dom"

export const FriendSearch = () => {

    const [userFriends, setUserFriends] = useState([])
    const [unfriendedUsers, setUnfriended] = useState([])
    const [searchTerms, setSearchTerms] = useState("")
    const [filteredUsers, setFiltered] = useState([])

    const localUser = localStorage.getItem("activeUser")
    const userObject = JSON.parse(localUser)

    //GET ALL USERS EXPANDED WITH FRIENDS
    useEffect(() => {
        getUserFriends()
            .then((array) => {
                setUserFriends(array)
            })
        }, []
    )

    //FILTER THE USERS SO THAT ONLY THOSE WITH 0 FRIENDS OR NO FRIEND USERIDS THAT ALREADY MATCH THE ACTIVEUSER
    useEffect(() => {
        const userArray = userFriends.filter(user => { 
            return (user.friends.length === 0 && user.id !== userObject.id) || user.friends.some(friend => {
                return friend.friendId !== userObject.id && friend.userId !== userObject.id
            })
        })
        
        setUnfriended(userArray)
        setFiltered(userArray)
            
        }, [userFriends, userObject.id]
    )

    console.log(unfriendedUsers)

    //FILTER THE ARRAY OF UNFRIENDED USERS AGAIN BY THE SEARCH TERMS
    useEffect(
        () => {
            const searchedUsers = unfriendedUsers.filter(user => {
                return user.username.toLowerCase().startsWith(searchTerms.toLowerCase())
            })
            setFiltered(searchedUsers)
        }, [searchTerms]
    )


    //HANDLE FUNCTION THAT CREATES A NEW FRIEND RELATIONSHIP FOR BOTH THE ACTIVEUSER AND THE USER THEY HAVE SELECTED (2 OBJECTS)
    const handleAddFriend = (event) => {
        event?.preventDefault()

        const userId = userObject.id
        const [,friendId] = event.target.id.split("--")

        // Perform the fetch() to POST the object to the API
        return addFriend(userId, friendId)
        .then(addFriend(friendId, userId))
        .then(window.location.reload())
    }

    return <>

        <div className="search--field">
            <label htmlFor="search--input"><h2>User Search</h2></label>
            <input className="search--input"
                    type="text" 
                    placeholder="Enter username" 
                    onChange={event => {
                        setSearchTerms(event.target.value)
                    }} 
            />
        </div>

        <div className="search--userlist">
        <p className="search--instruct">Click a username to add them as a friend</p>
            {filteredUsers.map(user => {
                return <>
                        <div>
                        <Link className="user" id={`user--${user.id}`} onClick={(event) => {handleAddFriend(event)}} key={`user--${user.id}`}>{user.username}</Link>
                        </div>
                        </>
            })}
        </div>

    </>
}