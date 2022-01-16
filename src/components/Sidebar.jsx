import React from 'react'
import { useState } from 'react'

const Sidebar = () => {

    const [showSidebar, setShowSidebar] = useState('');
    
    return (
        <div className="h-screen bg-white w-1/5 flex flex-col justify-around shadow rounded-r-lg -translate-x-full transition">
            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i class="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i class="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i class="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>

            <div className="flex items-center text-red text-lg space-x-3 justify-center">
            <i class="fas fa-heart"></i>
            <h1>Your Favorites</h1>
            </div>
        </div>
    )
}

export default Sidebar
