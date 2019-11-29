/*SUBMITTEDWISH.JS - read only component, finished wish*/
import React, { Component } from "react";
import Support from "./Support";

class SubmittedWish extends Component {

    render(){
        const{wishId, wish, support} = this.props; /*destructing props from displayWishes*/
     
        return(
            <div className="idk">
                <li>{wish}</li>
                <Support 
                    support={support}
                    key={wishId}
                    wishId={wishId}
                />
            </div>

        );
    }
}

export default SubmittedWish;