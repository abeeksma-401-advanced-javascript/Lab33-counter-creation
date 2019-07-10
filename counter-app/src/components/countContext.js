import React from 'react';

export const CountContext = React.createContext();

class CountProvider extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count : 0, 
      increcment : this.increcment,
      decrement : this.decrement,

    }
  }

  increment = something => {

  }

  decrement = something => {

  }

  render(){
    return (
      <>
      <CountContext.Provider value = {this.state}>
        {this.props.children}
      </CountContext.Provider>
      </>
    );
  }
}

export default CountProvider; 