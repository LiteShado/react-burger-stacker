import React from 'react';
import Ingredient from './Ingredient';

function Ingredients(props) {
  const { ingredients, stackBurger } = props;
  const list = ingredients.map((pick, index) => {
    const { name, color } = pick;

    return <Ingredient key={`pick-${index}`} name={name} color={color} stackBurger={stackBurger} />
  });

  return <div className="ingListDiv">{list}</div>
}

export default Ingredients;
