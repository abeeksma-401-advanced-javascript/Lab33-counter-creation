import React, { useContext } from 'react';
import {CountContext} from './countContext';

function Increment () {
  const context = useContext(CountContext);

  const handleClick = e => {
    context.increment()
  }

  return (

    <button onClick={handleClick}>+</button>
  )
};

export default Increment;
