import { Link, useNavigate } from "react-router-dom"
import "./navBar.css"

export const NavBar = () => {

    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar--item active">
                <Link className="navbar--link" to="/">Home</Link>
            </li>

            {
                localStorage.getItem("activeUser")
                    ? <li className="navbar--item navbar--logout">
                        <Link className="navbar--link" to="" onClick={() => {
                            localStorage.removeItem("activeUser")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }


        </ul>
    )
}