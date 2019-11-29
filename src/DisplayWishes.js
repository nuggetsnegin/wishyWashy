/*DISPLAYWISHES.JS*/
import React, { Component } from "react";
import SubmittedWish from "./SubmittedWish";
import firebase from "./firebase.js";

class DisplayWishes extends Component {

    constructor() {
        super();
        this.state = {
            wishes: [] /*empty because we're loading from db*/
        }
    }

    /*connecting to db*/
    componentDidMount(){
        const dbRef = firebase.database().ref();

        dbRef.on("value", snapshot => {
            const dbWishes = snapshot.val();
            const displayWishes = []; /*using thsi to display shit*/

            /*for in loop to grab db info and put it into an object*/
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
        <div className="wishDisplay">
            <ul>
           {/* map through object so we can render it */}
            {wishes.map((wish, i) => {
                return (
                    /*passing props to submittedWish component from wishObject*/
                    <SubmittedWish
                        key={i}
                        wishId={wish.wishId}
                        wish={wish.wish}
                        support={wish.support}
                    />
                );
            })}
            </ul>

        </div>
        );
    }
}

export default DisplayWishes;