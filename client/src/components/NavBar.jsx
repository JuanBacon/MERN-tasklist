import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const navigate = useNavigate();
    return (
        <div className='bg-zinc-800 flex justify-between px-20 py-5'>
            <h1 className='text-white font-bold text-lg'> React MySQL by Juan Bustamante</h1>
            
            <ul className='flex gap-x-3'>
                <li><Link className='bg-slate-200 px-2 py-1' to="/">Home</Link></li>
                <li><Link className='bg-slate-200 px-2 py-1' to={"/new"}>Add task</Link></li>
            </ul>
        </div>
    )
}

export default NavBar