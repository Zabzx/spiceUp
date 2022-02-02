import React from 'react'
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [menuContext, setMenuConext] = useContext(MenuContext)

    return (
        <>
        <div className={` ${menuContext.toggle ? menuContext.context : "-translate-x-full"} absolute h-4/5 bg-white w-1/5 flex flex-col justify-around shadow rounded-r-lg transition`}>
            <Link to={"/"}><div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-home"></i>
            <h1>Home</h1>
            </div>
            </Link>

            <Link to={"/favorites"}><div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-heart"></i>
            <h1>Favorites</h1>
            </div>
            </Link>

            <Link to={"/about"}><div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-book-open"></i>
            <h1>About</h1>
            </div>
            </Link>
        </div>
        </>
    )
}

export default Sidebar
