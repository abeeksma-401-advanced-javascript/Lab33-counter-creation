import React, { useContext } from 'react';
import {CountContext} from '../components/countContext';

const countStyle = {
  color: '#bb86fc',
  textAlign: 'center'
};

function Count () {
  const context = useContext(CountContext);
  return (
    <h2 style={countStyle}>{context.count}</h2>
  );
}

export default Count;
