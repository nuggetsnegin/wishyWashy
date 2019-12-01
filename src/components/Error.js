import React, { Component } from 'react';

class Error extends Component {

  render(){

    return (
        <div className="errorMessage">
            <h2>Can't have an empty wish!</h2>
            <button className="agreeButton" onClick={this.props.closeError}>Okay!</button>
        </div>
    );

  }
}

export default Error