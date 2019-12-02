import React, { Component } from 'react';

class Error extends Component {

  render(){

    return (
        <div className="errorMessage wobbleBottom">
            <h2>Oops!</h2>
            <p>Can't have an empty wish..</p>
            <button className="agreeButton" onClick={this.props.closeError}>Okay</button>
            <img src={require('../assets/scubaCat.png')} alt="Illustration of a cat in scuba suit"></img>
        </div>
    );

  }
}

export default Error