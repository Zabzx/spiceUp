import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import { useState } from 'react'
import { DishContext } from '../context/DishContext'
import { LoadingContext } from '../context/LoadingContext'
import axios from 'axios'
import { SearchedContext } from '../context/SearchedContext'
import { SearchValueContext } from '../context/SearchValue'

const Navbar = () => {

    const [menuContext, setMenuConext] = useContext(MenuContext)
    const [loadingData, setLoadingData] = useContext(LoadingContext)
    const [dishes, setDishes] = useContext(DishContext)
    const [searched, setSerched] = useContext(SearchedContext)
    const [userSearchInput, setUserSearchInput] = useState('')
    const [userValue, setUserValue] = useContext(SearchValueContext)

    const openMenu = () => {
        setMenuConext({...menuContext, toggle: !menuContext.toggle})
    }

    const displayItems = () => {
        setLoadingData(true)
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${userSearchInput}&app_id=ec9c97fa&app_key=823a6d3e8a5570c0c8788d575bc915e2`)
        .then(res => {
            setDishes(res.data.hits)
            setSerched(true)
            console.log(searched)
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

            <div className="logo flex space-x-3 items-center">
                <i className="fas fa-utensils text-red text-3xl"></i>
                <h1 className="text-red text-5xl font-mukta">spiceUp!</h1>
            </div>

            <div className="flex items-center search space-x-3">
            <i className="text-2xl text-red fas fa-search"></i>
            <form onSubmit={(e) => {
                e.preventDefault();
                displayItems()
            }} action="">
            <input type="text" placeholder='Search' onChange={(e) => {
                setUserSearchInput(e.target.value)
                setUserValue(e.target.value)
            }
                } className="border-gray border px-2 py-2 w-full rounded-xl"/>
            </form>
            </div>
        </header>
        </div>
    )
}

export default Navbar
