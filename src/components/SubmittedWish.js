/* SUBMITTEDWISH.JS - read only component, finished wish */
import React, { Component } from "react";
import Support from "./Support";

class SubmittedWish extends Component {
  render() {
    const {
      wishId,
      wish,
      support,
      animationClass,
    } = this.props; /* destructing props from displayWishes */

    /*made variables because of array destructuring error :( */
    const randomBorder1 = "40% 60% 48% 52% / 60% 61% 39% 40%";
    const randomBorder2 = "40% 60% 59% 41% / 45% 48% 52% 55%";
    const randomBorder3 = "52% 48% 45% 55% / 56% 49% 51% 44%";
    const randomBorder4 = "52% 48% 57% 43% / 39% 59% 41% 61%";
    const randomBorder5 = "52% 48% 68% 32% / 56% 58% 42% 44%";
    const randomBorder6 = "45% 55% 31% 69% / 47% 44% 56% 53%";
    const randomBorder7 = "34% 66% 49% 51% / 63% 57% 43% 37%";

    /*randomizing border radius*/
    const randomBorderRadius = [
      randomBorder1,
      randomBorder2,
      randomBorder3,
      randomBorder4,
      randomBorder5,
      randomBorder6,
      randomBorder7,
    ];
    const borderRandomizer = Math.floor(
      Math.random() * randomBorderRadius.length
    ); // returns a random integer from 0 to 9

    return (
      <div className={`${animationClass} bubblePosition`} id={wishId}>
        <li
          className='wobble'
          style={{ borderRadius: randomBorderRadius[borderRandomizer] }}
        >
          {wish}
        </li>
        <Support support={support} key={wishId} wishId={wishId} />
      </div>
    );
  }
}

export default SubmittedWish;
