import React from 'react'
import { useContext, useState } from 'react'
import { DishContext } from '../context/DishContext'
import { LoadingContext } from '../context/LoadingContext'
import { FavoriteDishContext } from '../context/FavoritesContext'
import FavAlert from './FavAlert'
import { FavAlertContext } from '../context/FavAlertContext'

const Featured = () => {

    const [featuredData, setFeaturedData] = useContext(DishContext)
    const [loadingData, setLoadingData] = useContext(LoadingContext)
    const [favoriteDishes, setFavoriteDishes] = useContext(FavoriteDishContext)
    const [favAlert, setFavAlert] = useContext(FavAlertContext)


    const addToFavorites = (item) => {
        setFavoriteDishes([item.recipe, ...favoriteDishes])
    }

    const removeDish = (item) => {
        setFavoriteDishes(favoriteDishes.filter((dish => dish.label !== item.recipe.label)))
    }

    const removeALert = () => {
        setFavAlert({...favAlert, status: false})
    }

    return (
        <>
        <FavAlert/>
        <h1 className='text-center text-7xl mt-10 font-nautigal text-red'>Featured Ingredient: Cheese</h1>
        <div className="container grid grid-cols-4 gap-5 mt-10">
            {!loadingData ? featuredData.map((item) => (
                <div className="text-center rounded w-full shadow-2xl pb-5" key={item.recipe.label}>
                <img className="w-screen" src={item.recipe.image} alt="" />
                <h1 className=" text-red text-xl mt-2">{item.recipe.label}</h1>
                <p className="">Meal: {item.recipe.mealType}</p>
                <p className="">Calories: {item.recipe.calories.toString().split('.')[0]}</p>

                <button onClick={(e) => {
                    if (e.target.textContent === 'Remove from Favorites') {
                        removeDish(item)
                        e.target.textContent = 'Add to Favorites'
                        e.currentTarget.style.backgroundColor = '#15803d'
                    } else {
                        addToFavorites(item)
                        e.target.textContent = 'Remove from Favorites';
                        e.currentTarget.style.backgroundColor = '#E51A1A'
                        setFavAlert({...favAlert, status: true})
                        setTimeout(removeALert, 2000)
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
