import React, { Component } from 'react';
import Addition from'./component/Addition';
import Soustraction from './component/Soustraction'


class App extends Component {
  render() {
    return (
      <div>
        <Addition/>
        <Soustraction/>
      </div>  
    )
  }
}

export default App;
