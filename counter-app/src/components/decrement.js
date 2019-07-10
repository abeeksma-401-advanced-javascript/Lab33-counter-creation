import React from 'react';
import {CountContext} from './countContext';

function Decrement () {

  return (
    <CountContext.Consumer>
      {({decrement}) => (
      <button onClick={decrement}>-</button>
      )}
    </CountContext.Consumer>
  );
}

export default Decrement;
