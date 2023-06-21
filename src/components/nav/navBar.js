import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = ( {scrollToEvents, scrollToNews, scrollToChat, scrollToTasks, scrollToFriends}) => {

    const navigate = useNavigate()

    //ATTEMPT TO GET NAVBAR LINKS TO SCROLL TO SECTION
    //NOT WORKING AS INTENDED


    return (

        <div className="navbar--container">

            <Link className="navbar--logo" to={"/"}> NUTSHELL </Link>

            <ul className="navbar--links">

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToEvents}>Events</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToNews} >News</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToTasks}>Tasks</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToChat}>Chat</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToFriends}>Friends</Link>
                </li>

            </ul>
            

            {
                localStorage.getItem("activeUser")
                    ? <div className="navbar--item navbar--logout">
                        <Link className="navbar--link" to="" onClick={() => {
                            localStorage.removeItem("activeUser")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </div>
                    : ""
            }

            </div>

        
    )
}