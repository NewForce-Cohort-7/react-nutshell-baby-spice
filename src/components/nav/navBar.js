import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

    //ATTEMPT TO GET NAVBAR LINKS TO SCROLL TO SECTION
    //NOT WORKING AS INTENDED
    const scrollToSection = (id) => {
        document?.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
      }
      

    return (

        <div className="navbar--container">

            <Link className="navbar--logo" to={"/"}> NUTSHELL </Link>

            <ul className="navbar--links">

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/"}>Events</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/"}>News</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/"}>Tasks</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" to={"/"}>Chat</Link>
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