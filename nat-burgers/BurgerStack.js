
import React from 'react';
import Ingredient from './Ingredient';

function BurgerStack(props) {
  const { burgerStack, clearPick } = props;
  const listOfIngredients = burgerStack.map((pick, index) => {
    const { name, color } = pick;

    if (index === 0) {
      return (
        <div key={`ing-${index}`}>
          <button onClick={clearPick}>Remove Last Ingredient</button>
          <Ingredient name={name} color={color}/>
        </div>
      )
    } else {
      return <Ingredient key={`ing-${index}`} name={name} color={color} />
    }
  });

  return listOfIngredients;
}

export default BurgerStack;
