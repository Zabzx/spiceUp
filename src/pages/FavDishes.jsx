import React from 'react';
import { useContext } from 'react';
import { FavoriteDishContext } from '../context/FavoritesContext';

const FavDishes = () => {

    const [favDishes, setFavDishes] = useContext(FavoriteDishContext)
    console.log(favDishes)

  return  <>
    <h1 className="text-center text-7xl mt-10 font-nautigal text-red">Your Favorite Dishes!</h1>
    <div className="container grid grid-cols-4 gap-5 mt-10">
      {favDishes.map((dish) => (
    <div className="text-center rounded w-full shadow-2xl pb-5" key={dish.label}>
    <img className="w-screen" src={dish.image} alt="" />
    <h1 className=" text-red text-xl mt-2">{dish.label}</h1>
    <p className="">Meal: {dish.mealType}</p>
    <p className="">Calories: {dish.calories.toString().split('.')[0]}</p>
    </div>
))}
  </div>
  </>
};

export default FavDishes;
//<div className="container grid grid-cols-4 gap-5 mt-10">
// //{favDishes.map((dish) => (
//     <div className="text-center rounded w-full shadow-2xl pb-5" key={dish.label}>
//     <img className="w-screen" src={dish.image} alt="" />
//     <h1 className=" text-red text-xl mt-2">{dish.label}</h1>
//     <p className="">Meal: {dish.mealType}</p>
//     <p className="">Calories: {dish.calories.toString().split('.')[0]}</p>
//     </div>
// ))}