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

componentDidMount(){
        axios ({
            method: 'GET',
            url: 'https://proxy.hackeryou.com',
            dataResponse: 'JSON',
            paramsSerializer: function(params) {
              return Qs.stringify(params, {arrayFormat: 'brackets'})
            },
            params: {
              reqUrl: 'https://nookipedia.com/w/api.php?action=query&titles=Bugs/Animal_Crossing:_New_Leaf&prop=revisions&rvprop=content&format=json',
              proxyHeaders: {
                'header_params': 'value',
              },
              xmlToJSON: false,
            }
        }).then((result) =>{
                console.log(result);
            });

}


checkBadWords = async (wishInput) =>{

    const filter = require('leo-profanity');
    let cleanedUp = await filter.clean(wishInput, '💖');

    let replace = wishInput + 'poo';

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


validateInput = () =>{
    /*check if input not empty*/
    if (this.state.wishInput !== "") {
        /*check if wish under char length*/
        if(this.state.wishInput.length < 120){
            this.checkBadWords(this.state.wishInput);
            console.log('goes into wishinput lenght if', this.state.wishInput);
        }
        else{
            console.log('failed to validate input');
            return false; /*? error message div?*/
        }
    }
}

handleSubmit = event =>{
    /*stop refresh on button click*/
    event.preventDefault(); 

    /*grabbing the current state of wish and calling checkBadwords and setting it to a new variable called wishToBeAdded also setting current state of support to support to push to db*/

    this.validateInput();

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