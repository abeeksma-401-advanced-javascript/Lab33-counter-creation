import React from 'react';
import './App.css';
import {CountProvider} from './components/countContext';

import Count from './components/count';
import Increment from './components/increment';
import Decrement from './components/decrement';

function App() {
  return (
    <CountProvider>
      <header>Counter project</header>
      <div>
        <Increment />
        <Count />
        <Decrement />
      </div>
    </CountProvider>
  );
}

export default App;
