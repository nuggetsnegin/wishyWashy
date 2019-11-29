/*CREATEWISH.JS COMPONENT*/
/*Create a single 'wish' and loading it to the database. Rendering the text input field.*/
import React, { Component } from "react";
import firebase from "./firebase.js";
import axios from "axios";
import "./App.css";

class CreateWish extends Component {
  constructor() {
    super();
    this.state = {
      wishInput: "",
      support: 0
    };
}

// componentDidMount(){
// 	axios({
// 		method: 'get',
// 		url: ' https://neutrinoapi.net/bad-word-filter',
// 		params:{
// 			key: '63FtVBHP3otlWrWEvQCcJiADFDXVroOqDPgjJHHuWPYWRC4J',
// 			content: this.state.wishInput,
// 			'censor-character': 'u'
// 		}
// 	}).then((data) =>{

// 		this.setState({
// 			wishInput: data.
// 		})
// 	})
// }

handleInput = event =>{
    this.setState({
        wishInput: event.target.value
    });
    console.log(event.target.value);
}

handleSubmit = event =>{
    /*stop refresh on button click*/
    event.preventDefault(); 

    /*grabbing the current state of wish and calling checkBadwords and setting it to a new variable called wishToBeAdded also setting current state of support to support to push to db*/
    const wishToBeAdded = this.validateInput(this.state.wishInput);

    /*support is always 0 on creation so maybe not necessary*/
    const support = this.state.support;
     
     if(wishToBeAdded){ /*if object exists then we push to db*/
        const dbRef = firebase.database().ref(); /*db reference*/
         dbRef.push({
             wish: wishToBeAdded,
             support: support
         });
         this.setState({
             wishInput: "" /*making input field empty on submit*/
         });

    }
    else{
        console.log('error message');
    }

}


validateInput = (wishInput) =>{
    /*check if input not empty*/
    if (this.state.wishInput !== "") {
        /*check if wish under char length*/
        if(this.state.wishInput.length < 120){
            return wishInput;
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