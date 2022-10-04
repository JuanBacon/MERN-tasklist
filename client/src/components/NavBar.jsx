import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h1> React MySQL</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={"/new"}>Add task</Link></li>
            </ul>
        </div>
    )
}

export default NavBar