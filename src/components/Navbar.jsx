import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import { useState } from 'react'
import { DishContext } from '../context/DishContext'
import { LoadingContext } from '../context/LoadingContext'
import axios from 'axios'
import Search from '../img/search.png'

const Navbar = () => {

    const [menuContext, setMenuConext] = useContext(MenuContext)
    const [loadingData, setLoadingData] = useContext(LoadingContext)
    const [dishes, setDishes] = useContext(DishContext)
    const [userSearchInput, setUserSearchInput] = useState('')

    const openMenu = () => {
        setMenuConext({...menuContext, toggle: !menuContext.toggle})
    }

    const displayItems = () => {
        setLoadingData(true)
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${userSearchInput}&app_id=ec9c97fa&app_key=823a6d3e8a5570c0c8788d575bc915e2`)
        .then(res => {
            setDishes(res.data.hits)
            console.log(res.data.hits)
            setLoadingData(false)
        })
    }

    return (
        <div className="header-container shadow rounded-xl">
        <header className="container flex justify-between h-20 items-center">
            <div className="menu space-y-1 cursor-pointer" onClick={openMenu}>
                <div className="line w-7 h-1 bg-red rounded"></div>
                <div className="line w-7 h-1 bg-red rounded"></div>
                <div className="line w-7 h-1 bg-red rounded"></div>
            </div>

            <div className="logo">
                <h1 className="text-red text-5xl font-mukta">spiceUp!</h1>
            </div>

            <div className="flex items-center search space-x-3">
            <img src={Search} alt="" className="w-10 h-10" />
            <form onSubmit={(e) => {
                e.preventDefault();
                displayItems()
            }} action="">
            <input type="text" placeholder='Search' onChange={(e) => setUserSearchInput(e.target.value)} className="border-gray-400 border px-2 py-1 rounded-xl"/>
            </form>
            </div>
        </header>
        </div>
    )
}

export default Navbar
