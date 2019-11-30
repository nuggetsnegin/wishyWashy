import React, { Component } from 'react';
import './App.css';
import CreateWish from './CreateWish';
import DisplayWishes from './DisplayWishes';
import Header from './Header';

class App extends Component {

  render(){

    return (
    <div className="App">

      <svg className="blob1"
          width="300"
          height="300"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
        <g transform="translate(300,300)">
          <path d="M138.8,-186.8C185,-157.4,231.4,-123.8,249.9,-78.4C268.5,-33.1,259.3,24.1,239.7,75.8C220,127.5,190,173.8,148.3,195.2C106.6,216.7,53.3,213.4,4.3,207.4C-44.7,201.5,-89.3,193,-134.5,172.6C-179.7,152.3,-225.4,120.2,-244.2,76.1C-263.1,31.9,-255.2,-24.2,-232,-69.1C-208.7,-114,-170.2,-147.6,-129,-178.7C-87.8,-209.8,-43.9,-238.4,1.2,-240C46.2,-241.6,92.5,-216.3,138.8,-186.8Z" fill="#f78da7" />
        </g>
      </svg>


        <Header />
        <div className="wrapper">
          <main>
            <div className="introduction">
              <p>Hi there! I see you want to make a wish well.. just type one in!</p>
            </div>
            <CreateWish />
            <DisplayWishes />
          </main>
        </div>
      </div>
    );

  }

}

export default App;
