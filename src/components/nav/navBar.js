import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

    const scrollToSection = (id) => {
        document?.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
      }
      

    return (

        <div className="navbar--container">

            <div className="navbar--logo">NUTSHELL</div>

            <ul className="navbar--links">

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToSection("events")}>Events</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToSection("news")}>News</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToSection("tasks")}>Tasks</Link>
                </li>

                <li className="navbar--item active">
                    <Link className="navbar--link" onClick={scrollToSection("chat")}>Chat</Link>
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