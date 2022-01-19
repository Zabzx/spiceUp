import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { LoadingContext } from "./LoadingContext";

export const DishContext = createContext();

export const DishProvider = (props) => {
    const [featuredData, setFeaturedData] = useState([])
    const [loadingData, setLoadingData] = useContext(LoadingContext)

    useEffect(() => {
        axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=cheese&app_id=ec9c97fa&app_key=823a6d3e8a5570c0c8788d575bc915e2`)
        .then(res => {
            setFeaturedData(res.data.hits)
            setLoadingData(false)
        })
    }, [])

    return (
        <DishContext.Provider value={[featuredData, setFeaturedData]}>
            {props.children}
        </DishContext.Provider>
    )
}