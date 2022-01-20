import React from 'react'
import { useContext } from 'react'
import { DishContext } from '../context/DishContext'
import { LoadingContext } from '../context/LoadingContext'

const Featured = () => {

    const [featuredData, setFeaturedData] = useContext(DishContext)
    const [loadingData, setLoadingData] = useContext(LoadingContext)

    return (
        <>
        <h1 className='text-center text-7xl mt-10 font-nautigal text-red'>Featured Ingredient: Cheese</h1>
        <div className="container grid grid-cols-4 gap-5 mt-10">
            {!loadingData ? featuredData.map((item) => (
                <div className="text-center rounded w-full shadow-xl pb-5" key={item.recipe.label}>
                <img className="w-screen" src={item.recipe.image} alt="" />
                <h1 className=" text-red text-xl mt-2">{item.recipe.label}</h1>
                <p className="">Meal: {item.recipe.mealType}</p>
                <p className="">Calories: {item.recipe.calories.toString().split('.')[0]}</p>

                <button className="p-2 bg-red text-white rounded-lg mt-5">Add to Favorites</button>

                </div>
            )) : <div className="absolute top-2/4 left-2/4 -translate-x-2/4">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-red"></div>
          </div>}
        </div>
        </>
        
    )
}

export default Featured
