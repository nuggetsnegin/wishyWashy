/*DISPLAYWISHES.JS*/
import React, { Component } from "react";
import SubmitedWish from "./SubmittedWish";
import firebase from "./firebase.js";

class DisplayWishes extends Component {

    constructor() {
        super();
        this.state = {
            wishes: [] /*empty because we're loading from db*/
        }
    }

    componentDidMount(){
        const dbRef = firebase.database().ref();

        dbRef.on("value", snapshot => {
            const dbWishes = snapshot.val();
            const displayWishes = []; /*using thsi to display shit*/

            for (let key in dbWishes){
                const wishObject = {
                    wishId: key,
                    wish: dbWishes[key].wish,
                    support: dbWishes[key].support
                }
                displayWishes.push(wishObject);
                console.log(wishObject);
            }

            this.setState({
                wishes: displayWishes
            });
        });
    }

    render(){
        const wishes = this.state.wishes;

        return(
        // const wishes = this.state.wishes;
        // <div>
        // for wish in this.state.wishes.map(
        // <SubmitedWish wishInput=wishInput, support=support, key=dbKey/>)
        // </div> 
        <div className="wishDisplay">
            <ul>
            {wishes.map((wish, i) => {
                return (
                    <li key={i}>{wish.wish} {wish.support}</li>
                );
            })}
            </ul>

        </div>
        )
    }
}

export default DisplayWishes;