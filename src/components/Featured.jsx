import React from 'react'
import { useContext, useState } from 'react'
import { DishContext } from '../context/DishContext'
import { LoadingContext } from '../context/LoadingContext'
import { FavoriteDishContext } from '../context/FavoritesContext'

const Featured = () => {

    const [featuredData, setFeaturedData] = useContext(DishContext)
    const [loadingData, setLoadingData] = useContext(LoadingContext)
    const [favoriteDishes, setFavoriteDishes] = useContext(FavoriteDishContext)


    const addToFavorites = (item) => {
        setFavoriteDishes([...favoriteDishes], item)
        console.log(favoriteDishes)
    }

    return (
        <>
        <h1 className='text-center text-7xl mt-10 font-nautigal text-red'>Featured Ingredient: Cheese</h1>
        <div className="container grid grid-cols-4 gap-5 mt-10">
            {!loadingData ? featuredData.map((item) => (
                <div className="text-center rounded w-full shadow-2xl pb-5" key={item.recipe.label}>
                <img className="w-screen" src={item.recipe.image} alt="" />
                <h1 className=" text-red text-xl mt-2">{item.recipe.label}</h1>
                <p className="">Meal: {item.recipe.mealType}</p>
                <p className="">Calories: {item.recipe.calories.toString().split('.')[0]}</p>

                <button onClick={(e) =>{
                    addToFavorites(item)

                    const isClicked = false

                    if (e.target.textContent = 'Add to Favorties') {
                        e.target.textContent = 'Remove from Favorites'
                        e.currentTarget.style.backgroundColor = 'red'
                    } else {
                        e.target.textContent = 'Add to Favorites'
                        e.currentTarget.style.backgroundColor = 'green'
                    }

                } } className="p-2 bg-green text-white rounded-lg mt-5">Add to Favorites</button>

                </div>
            )) : <div className="absolute top-2/4 left-2/4 -translate-x-2/4">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-red"></div>
          </div>}
        </div>
        </>
        
    )
}

export default Featured
