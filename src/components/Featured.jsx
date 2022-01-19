import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Featured = () => {

    const [featuredData, setFeaturedData] = useState([])
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=cheese&app_id=ec9c97fa&app_key=823a6d3e8a5570c0c8788d575bc915e2`)
        .then(res => {
            setFeaturedData(res.data.hits)
            console.log(featuredData)
            setLoadingData(false)
        })
    }, [])

    
    return (
        <>
        <h1 className='text-center text-7xl mt-10 font-nautigal text-red'>Featured Ingredient: Cheese</h1>
        <div className="container grid grid-cols-4 gap-5 mt-10">
            {!loadingData ? featuredData.map((item) => (
                <div className="rounded w-full shadow-xl pb-5">
                <img className="w-screen" src={item.recipe.image} alt="" />
                <h1 className="text-center text-red text-xl mt-2">{item.recipe.label}</h1>
                <p className="text-center">Meal: {item.recipe.mealType}</p>
                <p className="text-center">Calories: {item.recipe.calories.toString().split('.')[0]}</p>
                </div>
            )) : <div className="absolute top-2/4 left-2/4 -translate-x-2/4">
            <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-red"></div>
          </div>}
        </div>
        </>
        
    )
}

export default Featured
