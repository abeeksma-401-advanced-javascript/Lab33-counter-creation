import React from 'react';
import {CountContext} from './countContext';

const buttonColor = {
  backgroundColor: '#414141',
  padding: '25px',
  fontSize: '30px',
  color: '#bb86fc'
};

function Decrement () {

  return (
    <CountContext.Consumer>
      {({decrement}) => (
      <button style={buttonColor} onClick={decrement}>-</button>
      )}
    </CountContext.Consumer>
  );
}

export default Decrement;
