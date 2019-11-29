import React, { Component } from 'react';
import firebase from "./firebase.js";
/*SUPPORT.JS - checking how many times a support has been issued (user clicks!) and rendering the result*/

class Support extends Component {

    constructor(props){
        super(props); /*preserving props from overriding constructor*/
        this.state={
            support: this.props.support
        }
    }
    /* DbKey and Support => Update Wish of this dbKey with this support number*/
    supporting = () =>{
        
        const dbRef = firebase.database().ref();
        const{wishId} = this.props;
        const newSupporVal = this.state.support + 1;
        this.setState({
            support: newSupportVal
        });

        dbRef.child(wishId).update({support: newSupportVal});


        console.log('support state', this.state.support);
        console.log('support props', this.props.support);
    
    }

    /*rendering support number and button*/
    render() {
        /*only need theWishId and support to increment support #*/
        console.log('render');
        return(
            <div className="displaySupport">
                <button className="supportButton" onClick={this.supporting}>
                    💗{this.state.support}
                </button>
            </div>
        );

    }
}

export default Support;