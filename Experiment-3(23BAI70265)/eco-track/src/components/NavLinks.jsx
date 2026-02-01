import React from "react" ;
import { Link } from "react-router-dom";

const NavLinks = () => {
        return (
            <ul className="flex justify-between items-center gap-6 ">
                <li>
                    <Link to = "" >Home</Link>
                </li>
                <li>
                    <Link to = "">About</Link>
                </li>
                <li>
                    <Link to = "/logs">Logs</Link>
                </li>
                <li>
                    <Link to = "">Feedback</Link>
                </li>
            </ul>
        )
    }

    export default NavLinks ;