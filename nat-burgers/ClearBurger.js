import React from 'react';

function ClearBurger(props) {
  return(
    <div>
      <button onClick={(e) => props.clear(e)}>Clear Burger</button>
    </div>
  )
}

export default ClearBurger;
