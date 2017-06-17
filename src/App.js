import React, { Component } from 'react';
import Addition from'./component/Addition';
import Soustraction from './component/Soustraction'
import Multiplication from'./component/Multiplication';


class App extends Component {
  render() {
    return (
      <div>
        <Addition/>
        <Soustraction/>
        <Multiplication/>
      </div>  
    )
  }
}

export default App;
