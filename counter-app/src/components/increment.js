import React, { useContext } from 'react';
import {CountContext} from './countContext';

const buttonColor = {
  backgroundColor: '#414141',
  padding: '25px',
  fontSize: '30px',
  color: '#bb86fc'
};

function Increment () {
  const context = useContext(CountContext);

  const handleClick = e => {
    context.increment()
  }

  return (

    <button style={buttonColor} onClick={handleClick}>+</button>
  )
};

export default Increment;
