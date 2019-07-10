import React from 'react';
import './App.css';
import CountProvider from './components/countContext';

import Count from './components/count';
import Increment from './components/increment';
import Decrement from './components/decrement';

const mainApp = {
  backgroundColor: '#000000',
  color: '#121212',
  width: '100vw',
  height: '100vh'
};

const headStyle = {
  color: '#bb86fc',
  fontSize: '46px',
  textAlign: 'center',
  width: '100vw',
  paddingTop: '2.5%',
  paddingBottom: '2.5%',
  backgroundColor: '#1f1b24'
};

const countBox = {
  color: '#bb86fc',
  width: '40vw',
  height: '50vh',
  backgroundColor: '#1f1b24'
}
function App() {
  return (
    <CountProvider>
      <div style={mainApp}>
        <header style={headStyle}>Context Counter Lab:33</header>
        <div style={countBox}>
          <Increment />
          <Count />
          <Decrement />
        </div>
      </div>
    </CountProvider>
  );
}

export default App;
