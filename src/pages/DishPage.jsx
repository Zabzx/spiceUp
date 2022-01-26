import React, {useContext} from 'react';

const DishPage = ({ item }) => {
    
    console.log(item)

  return <div>
      <img src={item.recipe.image} alt="" />
  </div>;
};

export default DishPage;
