import React from 'react';
import Check from '../img/check.png'
import { useContext } from 'react';
import { FavAlertContext } from '../context/FavAlertContext';

const FavAlert = () => {

  const [faveAlert, setFavAlert] = useContext(FavAlertContext)

  return <div className={`${faveAlert.status ? faveAlert.scale : 'scale-0'} absolute rounded-lg shadow-xl p-6 right-0 top-24 text-center`}>
      <h1>Dish added to favorites!</h1>
      <div className="flex justify-center">
      <img src={Check} alt="" className="w-10 h-10"/>
      </div>
  </div>;
};

export default FavAlert;

