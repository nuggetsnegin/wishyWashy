import React, { Component } from 'react';
import './App.css';
import CreateWish from './CreateWish';
import DisplayWishes from './DisplayWishes';

class App extends Component {

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1>Wishy Washy</h1>
          <CreateWish />
          <DisplayWishes />
        </header>
      </div>
    );

  }

}

export default App;
