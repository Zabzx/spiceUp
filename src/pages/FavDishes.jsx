import React from 'react';
import { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import { FavoriteDishContext } from '../context/FavoritesContext';
import { MenuContext } from '../context/MenuContext.js'

const FavDishes = () => {

    const [favDishes, setFavDishes] = useContext(FavoriteDishContext)
    const [menuContext, setMenuContext] = useContext(MenuContext)

    useEffect(() => {
      setMenuContext({...menuContext, toggle: false})
    }, [])

  return  <>
    {favDishes.length !== 0 ? favDishes.map((dish) => (
      <div className="flex flex-col justify-between h-screen">
        <h1 className="text-center text-7xl mt-10 font-nautigal text-red">Your Favorite Dishes!</h1>
        <div>
      <div className="container grid grid-cols-4 gap-5 mt-10">
      <div className="text-center rounded w-full shadow-2xl pb-5" key={dish.label}>
      <img className="w-screen" src={dish.image} alt="" />
      <h1 className=" text-red text-xl mt-2">{dish.label}</h1>
      <p className="">Meal: {dish.mealType}</p>
      <p className="">Calories: {dish.calories.toString().split('.')[0]}</p>
      </div>
      </div>
      </div>
      <Footer/>
      </div>
    )) : <div className="flex flex-col h-screen justify-between">
    <div className="text-center text-xl mt-20">No Favorites yet</div>
    <Footer/>
    </div>}
  </>
};

export default FavDishes;