import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <p>
          <span role='img' aria-label='fish emoji'>
            🐟
          </span>{" "}
          Made with big wishes by <span>Negin Sauermann</span> 2019{" "}
          <span role='img' aria-label='fish emoji' className='ripple'>
            🐟
          </span>
        </p>
      </footer>
    );
  }
}

export default Footer;
