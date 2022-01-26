import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { MenuContext } from '../context/MenuContext';
import { Link } from 'react-router-dom';
import { FavoriteDishContext } from "../context/FavoritesContext";

const Sidebar = () => {

    const [menuContext, setMenuConext] = useContext(MenuContext)
    const [favDishes, setFavDishes] = useContext(FavoriteDishContext)

    return (
        <>
        <div className={` ${menuContext.toggle ? menuContext.context : '-translate-x-full'} absolute h-4/5 bg-white w-1/5 flex flex-col justify-around shadow rounded-r-lg transition`}>
            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-home"></i>
            <Link to={"/"}><h1>Home</h1></Link>
            </div>
            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-star"></i>
            <h1>Trending</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-heart"></i>
                <Link to={"/favorites"}><h1>Your Favorites</h1></Link>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i className="fas fa-book-open"></i>
            <h1>About</h1>
            </div>
        </div>
        </>
    )
}

export default Sidebar
