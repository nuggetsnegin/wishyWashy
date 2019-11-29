/*CREATEWISH.JS COMPONENT*/
/*Create a single 'wish' and loading it to the database. Rendering the text input field.*/
import React, { Component } from "react";
import firebase from "./firebase.js";
import axios from "axios";
import "./App.css";
import Qs from 'qs';
import LeoProfanity from 'leo-profanity';

class CreateWish extends Component {
  constructor() {
    super();
    this.state = {
      wishInput: "",
      support: 0
    };
}

checkBadWords = wishInput =>{

    const filter = require('leo-profanity');
    const cleanedUp = filter.clean(wishInput, '💖');

    this.setState({
        wishInput: cleanedUp
    });

    console.log('cleaned up', cleanedUp);

}

handleInput = event =>{
    this.setState({
        wishInput: event.target.value
    });
}

handleSubmit = event =>{
    /*stop refresh on button click*/
    event.preventDefault(); 

    /*grabbing the current state of wish and calling checkBadwords and setting it to a new variable called wishToBeAdded also setting current state of support to support to push to db*/

    this.validateInput(this.state.wishInput);


    /*support is always 0 on creation so maybe not necessary*/
    const support = this.state.support;
    console.log(this.state);
     if(this.state.wishInput){ /*if object exists then we push to db*/
        const dbRef = firebase.database().ref(); /*db reference*/
         dbRef.push({
             wish: this.state.wishInput,
             support: support
         });
         this.setState({
             wishInput: "" /*making input field empty on submit*/
         });

    }
    else{
        console.log('i fucked up error message');
    }

}


validateInput = wishInput =>{
    /*check if input not empty*/
    if (wishInput !== "") {
        /*check if wish under char length*/
        if(wishInput.length < 120){
            this.checkBadWords(wishInput);
            console.log('goes into wishinput lenght if', this.state.wishInput);
        }
        else{
            console.log('failed to validate input');
            return false; /*? error message div?*/
        }
    }
}

render(){
    return(
        <div className="input">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="wishInput"></label>
                <input
                    id="wishInput"
                    type="text"
                    value={this.state.wishInput}
                    onChange={this.handleInput}
                    placeholder="I wish I could own 3 cats someday!"
                />
            <button className="wishButton" type="submit">Submit Wish</button>
            </form>
        </div>
        )
    }
    
}

export default CreateWish