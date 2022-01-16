import React from 'react'

const Navbar = () => {
    return (
        <div className="header-container shadow rounded-xl">
        <header className="container flex justify-between h-20 items-center">
            <div className="menu space-y-1">
                <div className="line w-7 h-1 bg-red"></div>
                <div className="line w-7 h-1 bg-red"></div>
                <div className="line w-7 h-1 bg-red"></div>
            </div>

            <div className="logo">
                <h1 className="text-red text-3xl">spiceUp!</h1>
            </div>

            <div className="search space-x-3">
            <i class="fas fa-search text-2xl"></i>
            <input type="text" placeholder='Search' className="border-gray-400 border px-2 py-1 rounded-xl"/>
            </div>
        </header>
        </div>
    )
}

export default Navbar
