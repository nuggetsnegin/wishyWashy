/*CREATEWISH.JS COMPONENT*/
/*Create a single 'wish' and loading it to the database. Rendering the text input field.*/
import React, { Component } from "react";
import firebase from "./firebase.js";
import axios from "axios";
import "./App.css";
import Qs from 'qs';

const filter = require('leo-profanity'); /*for filtering bad words*/

class CreateWish extends Component {
  constructor() {
    super();
    this.state = {
      wishInput: "",
      support: 0
    };
}

// componentDidMount(){
//         axios ({
//             method: 'GET',
//             url: 'https://proxy.hackeryou.com',
//             dataResponse: 'JSON',
//             paramsSerializer: function(params) {
//               return Qs.stringify(params, {arrayFormat: 'brackets'})
//             },
//             params: {
//               reqUrl: 'https://nookipedia.com/w/api.php?action=query&titles=Bugs/Animal_Crossing:_New_Leaf&prop=revisions&rvprop=content&format=json',
//               proxyHeaders: {
//                 'header_params': 'value',
//               },
//               xmlToJSON: false,
//             }
//         }).then((result) =>{
//                 console.log(result);
//         });

// }

handleInput = event =>{
    this.setState({
        wishInput: event.target.value
    });
}

checkBadWords = () =>{
    const wishInput = this.state.wishInput;
    let cleanedUp = filter.clean(wishInput, '💖');

    return cleanedUp;
}

validateInput = (wishInput) =>{
    /*check if input not empty and *check if wish under char length*/
        if(this.state.wishInput !== "" && this.state.wishInput.length < 120){
           return wishInput;
        }
        else{
            console.log('failed to validate input');
            return false; /*? error message div?*/
        }
    
}

handleSubmit = event =>{
    /*stop refresh on button click*/
    event.preventDefault(); 

    /*grabbing the current state of wish and calling checkBadwords and setting it to a new variable called wishToBeAdded also setting current state of support to support to push to db*/

    this.validateInput(this.state.wishInput);
    const cleanedText = this.checkBadWords();

    /*support is always 0 on creation so maybe not necessary*/
    const support = this.state.support;


     if(cleanedText){ /*if object exists then we push to db*/
        const dbRef = firebase.database().ref(); /*db reference*/
         dbRef.push({
             wish: cleanedText,
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


handleChange(event){
    const wishInput = event.target.value;

}

render(){
    return(
        <div className="input">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="wishInput"></label>

                <textarea
                    rows="8"
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