import React, { Component } from 'react';
import Addition from'./component/Addition';
import Soustraction from './component/Soustraction'
import Multiplication from'./component/Multiplication';
import Division from'./component/Division';


class App extends Component {
  render() {
    return (
      <div>
        <Addition/>
        <Soustraction/>
        <Multiplication/>
        <Division/>
      </div>  
    )
  }
}

export default App;
