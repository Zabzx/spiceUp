import React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../context/MenuContext'
import { useState } from 'react'

const Navbar = () => {

    const [menuContext, setMenuConext] = useContext(MenuContext)
    const [userSearchInput, setUserSearchInput] = useState('')

    const openMenu = () => {
        setMenuConext({...menuContext, toggle: !menuContext.toggle})
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
                <h1 className="text-red text-3xl font-mukta">spiceUp!</h1>
            </div>

            <div className="search space-x-3">
            <i className="fas fa-search text-2xl"></i>
            <form action="">
            <input type="text" placeholder='Search' onChange={(e) => setUserSearchInput(e.target.value)} className="border-gray-400 border px-2 py-1 rounded-xl"/>
            </form>
            </div>
        </header>
        </div>
    )
}

export default Navbar
