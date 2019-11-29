import React, { Component } from 'react';
/*SUPPORT.JS - checking how many times a support has been issued (user clicks!) and rendering the result*/

class Support extends Component {

    /* DbKey and Support => Update Wish of this dbKey with this support number*/

    supporting = () =>{
        const support=this.props.support;
        console.log(support);
        support +1;
    }

    /*rendering support number and button*/
    render() {
        /*only need theWishId and support to increment support #*/
        const{wishId, support} = this.props;

        return(
            <div className="displaySupport">
                <button onClick={this.supporting}>
                    💗{support}
                </button>
            </div>
        );

    }
}

export default Support;