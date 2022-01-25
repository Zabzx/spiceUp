import React from 'react';
import { useContext } from 'react';
import { FavoriteDishContext } from '../context/FavoritesContext';

const FavDishes = () => {

    const [favoriteDishes, setFavoriteDishes] = useContext(FavoriteDishContext)
    console.log(favoriteDishes)

  return <div>
      <h1 className="bg-red">Your Favorite Dishes!</h1>
      {favoriteDishes.map((dish) => (
          <div className="text-center rounded w-full shadow-2xl pb-5" key={Math.floor(Math.random() * 2000)}>
          <img className="w-screen" src={dish.image} alt="" />
          <h1 className=" text-red text-xl mt-2">{dish.label}</h1>
          <p className="">Meal: {dish.mealType}</p>
          <p className="">Calories: {dish.calories.toString().split('.')[0]}</p>
          </div>
      ))}
  </div>;
};

export default FavDishes;
