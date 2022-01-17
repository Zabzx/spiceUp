import React from 'react'
import { useContext } from 'react';
import { MenuContext } from '../context/MenuContext';

const Sidebar = () => {

    const [menuContext, setMenuConext] = useContext(MenuContext)

    return (
        <>
        <div className={` ${menuContext.toggle ? menuContext.context : ''} absolute h-4/5 bg-white w-1/5 flex flex-col justify-around shadow rounded-r-lg transform transition`}>
            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>
        </div>
        </>
    )
}

export default Sidebar
