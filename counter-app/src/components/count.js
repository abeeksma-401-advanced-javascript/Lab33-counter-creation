import React, { useContext } from 'react';
import CountContext from '../components/countContext';

function Count () {
  const context = useContext(CountContext);
  return (
    <h2>{context.count}</h2>
  );
}

export default Count;
