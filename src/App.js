import React, { Component } from 'react';
import './styles/App.css';
import CreateWish from './components/CreateWish';
import DisplayWishes from './components/DisplayWishes';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {

  render(){

    return (
    <div className="App">
        <Header />
        <div className="wrapper">
        <div className="introduction">
              <p>Hi there, I see you want to make a wish well.. just type one in! If you're too shy to share, feel free to like other people's wishes!</p>
        </div>
          <main>
            <CreateWish />
            <DisplayWishes />
          </main>
        </div>
        <Footer />
      </div>
    );

  }

}

export default App;
