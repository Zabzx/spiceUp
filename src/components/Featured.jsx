import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Featured = () => {

    const [featuredData, setFeaturedData] = useState([])

    const getFeatured = () => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=ec9c97fa&app_key=823a6d3e8a5570c0c8788d575bc915e2%09&cuisineType=Caribbean`)
        .then(res => {
            setFeaturedData(res.data.hits)
            console.log(featuredData)
        })
    }

    
    return (
        <div>
            {featuredData.map((item) => (
                <>
                <img src={item.recipe.image} alt="" />
                <h1>{item.recipe.label}</h1>
                </>
            ))}
                <button onClick={getFeatured}>get</button>
            
        </div>
    )
}

export default Featured
