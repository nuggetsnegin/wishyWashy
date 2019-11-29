import React from 'react';
import SubmittedWish from "./SubmittedWish";
/*SUPPORT.JS - checking how many times a support has been issued (user clicks!) and rendering the result*/

function Support(prop) {
    /* DbKey and Support => Update Wish of this dbKey with this support number*/

    supporting = () =>{
        console.log(this.state.support);
        this.setState({
            support: this.state.support +1
        })
    }

    /*rendering support number*/
    render() {
        return(
            <div className="displaySupport">
                <button onClick={this.supporting}>
                    💗
                </button>
            </div>
        )

    }
}

export default Support;