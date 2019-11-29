import React, { Component } from 'react';
import './App.css';
import CreateWish from './CreateWish';
import DisplayWishes from './DisplayWishes';
import Header from './Header';

class App extends Component {

  render(){

    return (
      <div className="App">
        <Header />
        <main>
          <CreateWish />
          <DisplayWishes />
        </main>
      </div>
    );

  }

}

export default App;
