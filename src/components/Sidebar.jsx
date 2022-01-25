import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { MenuContext } from '../context/MenuContext';

const Sidebar = () => {

    const [menuContext, setMenuConext] = useContext(MenuContext)

    return (
        <>
        <div className={` ${menuContext.toggle ? menuContext.context : '-translate-x-full'} absolute h-4/5 bg-white w-1/5 flex flex-col justify-around shadow rounded-r-lg transition`}>
            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i class="fas fa-star"></i>
            <h1>Trending</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i class="fas fa-book-open"></i>
            <h1>About</h1>
            </div>
        </div>
        </>
    )
}

export default Sidebar
